"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";

import type { ReactNode } from "react";


// ── Types ──────────────────────────────────────────────────────────────────
export type ToastType = "success" | "error" | "warning" | "info" | "loading";

export interface ToastOptions {
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  onDone?: () => void;
}

interface ToastItem extends ToastOptions {
  id: number;
}

interface ToastContextValue {
  toast: {
    success: (title: string, message?: string, duration?: number) => number;
    error:   (title: string, message?: string, duration?: number) => number;
    warning: (title: string, message?: string, duration?: number) => number;
    info:    (title: string, message?: string, duration?: number) => number;
    loading: (title: string, message?: string) => number;
    custom:  (opts: ToastOptions) => number; 
    dismiss: (id: number) => void;
  };
}

// ── Context ────────────────────────────────────────────────────────────────
const ToastContext = createContext<ToastContextValue | null>(null);

// ── Variants ───────────────────────────────────────────────────────────────
const VARIANTS: Record<ToastType, { bar: string; icon: string }> = {
  success: { bar: "bg-emerald-500", icon: "text-emerald-500" },
  error:   { bar: "bg-rose-500",    icon: "text-rose-500"    },
  warning: { bar: "bg-amber-400",   icon: "text-amber-400"   },
  info:    { bar: "bg-sky-500",     icon: "text-sky-500"     },
  loading: { bar: "bg-violet-500",  icon: "text-violet-500"  },
};

// ── Icons ──────────────────────────────────────────────────────────────────
const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);
const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
  </svg>
);
const WarningIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);
const LoadingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5 animate-spin">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
);


const ToastIcon: Record<ToastType, () => ReactNode> = {
  success: SuccessIcon,
  error:   ErrorIcon,
  warning: WarningIcon,
  info:    InfoIcon,
  loading: LoadingIcon,
};

// ── Single Toast ───────────────────────────────────────────────────────────
interface ToastProps extends ToastItem {
  onRemove: (id: number) => void;
}

function Toast({ id, type, title, message, duration = 4000, onRemove, onDone }: ToastProps) {
  const [visible,  setVisible]  = useState(false);
  const [leaving,  setLeaving]  = useState(false);
  const [progress, setProgress] = useState(100);
  const variant = VARIANTS[type];
  const Icon = ToastIcon[type];
  
  useEffect(() => {
      if (!duration) return;
      const start = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - start;
        const pct = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(pct);
        if (elapsed >= duration) {
          clearInterval(interval);
          onDone?.();   // ← chama antes de sair
        }
      }, 30);
      return () => clearInterval(interval);
    }, [type, duration, onDone]);

  const dismiss = useCallback(() => {
    setLeaving(true);
    setTimeout(() => onRemove(id), 350);
  }, [id, onRemove]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!duration) return;
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.max(0, 100 - (elapsed / duration) * 100);
      setProgress(pct);
      if (elapsed >= duration) {
        clearInterval(interval);
        dismiss();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [type, duration, dismiss]);

  return (
    <div
      style={{
        transform:  visible && !leaving ? "translateY(0)" : "translateY(-120%)",
        opacity:    visible && !leaving ? 1 : 0,
        transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease",
      }}
      className="relative w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 pointer-events-auto"
    >

      {/* Content */}
      <div className="flex items-start gap-3 px-4 py-3.5 pl-5">
        <span className={`mt-0.5 shrink-0 ${variant.icon}`}>
          <Icon />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[15px] font-semibold text-gray-900 tracking-tight leading-tight">
            {title}
          </p>
          {message && (
            <p className="text-[13px] text-gray-500 mt-0.5 leading-snug">{message}</p>
          )}
        </div>
      </div>

      {/* Bottom countdown bar */}
      {type !== "loading" && duration && (
        <div className="h-[3px] bg-gray-100">
          <div
            className={`h-full ${variant.bar}`}
            style={{ width: `${progress}%`, transition: "width 30ms linear" }}
          />
        </div>
      )}
    </div>
  );
}

// ── Provider ───────────────────────────────────────────────────────────────
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const add = useCallback((opts: ToastOptions): number => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, ...opts }]);
    return id;
  }, []);

  const remove = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // dentro do ToastProvider, substituir o objeto toast por:
  const toast = useMemo<ToastContextValue["toast"]>(() => ({
    success: (title, message, duration) => add({ type: "success", title, message, duration }),
    error:   (title, message, duration) => add({ type: "error",   title, message, duration }),
    warning: (title, message, duration) => add({ type: "warning", title, message, duration }),
    info:    (title, message, duration) => add({ type: "info",    title, message, duration }),
    loading: (title, message)           => add({ type: "loading", title, message, duration: 0 }),
    custom:  (opts)                     => add(opts),
    dismiss: remove,
  }), [add, remove]);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}

      {/* Toast container — rendered once, here, for the entire app */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-3 items-center pointer-events-none">
        {toasts.map((t) => (
          <Toast key={t.id} {...t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

// ── useToast hook ──────────────────────────────────────────────────────────
export function useToast(): ToastContextValue["toast"] {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx.toast;
}