import { useEffect, useState } from "react";
import { useTimerContext } from "../context/TimerContext";

const text =
  "É com um enorme prazer que, em nome das Nações Unidas e de toda a humanidade, agradecemos seus esforços para salvar o mundo. Vocês conseguiram. Parabéns aos grandes heróis.";

export default function VictoryPage() {
  const [_tick, setTick] = useState(0);
  const { stopTimer } = useTimerContext();
  stopTimer();

  useEffect(() => {
    setTick(1);
  }, []);

  return (
    <>
      <style>{`
        :root {
          --main-green: #10B981;
          --main-green-light: #DCFCE7;
          --main-green-dark: #065F46;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fff; overflow: hidden; }

        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0.2; }
          100% { transform: translateY(-100vh) scale(0.2); opacity: 0; }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }

        @keyframes drawCircle {
          from { stroke-dashoffset: 314; }
          to   { stroke-dashoffset: 0; }
        }

        @keyframes drawCheck {
          from { stroke-dashoffset: 60; }
          to   { stroke-dashoffset: 0; }
        }

        @keyframes pulseRing {
          0%   { transform: scale(1);    opacity: 0.15; }
          50%  { transform: scale(1.06); opacity: 0.3; }
          100% { transform: scale(1);    opacity: 0.15; }
        }

        @keyframes shimmer {
          0%   { background-position: -300% center; }
          100% { background-position: 300% center; }
        }

        .victory-wrapper {
          width: 100vw;
          height: 100vh;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }



        .corner {
          position: absolute;
          width: 28px;
          height: 28px;
          border-color: var(--main-green);
          border-style: solid;
          opacity: 0.35;
        }
        .corner-tl { top: 32px; left: 32px;  border-width: 2px 0 0 2px; }
        .corner-tr { top: 32px; right: 32px; border-width: 2px 2px 0 0; }
        .corner-bl { bottom: 32px; left: 32px;  border-width: 0 0 2px 2px; }
        .corner-br { bottom: 32px; right: 32px; border-width: 0 2px 2px 0; }

        .content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          max-width: 700px;
          padding: 2rem;
          text-align: center;
        }

        .top-label {
          font-size: 0.62rem;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          color: var(--main-green);
          opacity: 0;
          animation: fadeDown 0.7s ease forwards 0.2s;
          font-family: inherit;
        }

        .check-wrap {
          position: relative;
          width: 88px;
          height: 88px;
          opacity: 0;
          animation: scaleIn 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards 0.5s;
        }

        .pulse-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 1.5px solid rgba(16,185,129,0.25);
          animation: pulseRing 2.8s ease-in-out infinite;
        }

        .check-wrap svg circle {
          stroke-dasharray: 314;
          stroke-dashoffset: 314;
          animation: drawCircle 1s ease forwards 0.7s;
        }

        .check-wrap svg path {
          stroke-dasharray: 60;
          stroke-dashoffset: 60;
          animation: drawCheck 0.6s ease forwards 1.5s;
        }

        .title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: clamp(1.9rem, 4.5vw, 3.4rem);
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1.1;
          background: linear-gradient(120deg, var(--main-green-dark) 0%, var(--main-green) 45%, var(--main-green-dark) 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 5s linear infinite, fadeDown 0.8s ease forwards 0.6s;
          opacity: 0;
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 1rem;
          width: 100%;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 1s;
        }

        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.35), transparent);
        }

        .divider-diamond {
          width: 6px;
          height: 6px;
          background: var(--main-green);
          transform: rotate(45deg);
          opacity: 0.7;
        }

        .message {
          font-family: inherit;
          font-size: clamp(0.95rem, 1.8vw, 1.12rem);
          font-style: normal;
          line-height: 2;
          color: #374151;
          opacity: 0;
          animation: fadeUp 0.9s ease forwards 1.1s;
          padding: 0 0.5rem;
        }

        .status-row {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          opacity: 0;
          animation: fadeUp 0.7s ease forwards 1.7s;
        }

        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--main-green);
          box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
          animation: pulseRing 1.8s ease-in-out infinite;
        }

        .status-text {
          font-size: 0.68rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--main-green-dark);
          font-family: inherit;
          opacity: 0.75;
        }

        .bottom-id {
          position: absolute;
          bottom: 2rem;
          right: 2.5rem;
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          color: rgba(16,185,129,0.35);
          font-family: inherit;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeUp 0.6s ease forwards 2.2s;
        }
      `}</style>

      <div className="victory-wrapper">
        <div className="corner corner-tl" />
        <div className="corner corner-tr" />
        <div className="corner corner-bl" />
        <div className="corner corner-br" />

        <div className="content">
          <span className="top-label">— Declaração Oficial —</span>

          <div className="check-wrap">
            <div className="pulse-ring" />
            <svg width="88" height="88" viewBox="0 0 100 100" fill="none">
              <circle
                cx="50" cy="50" r="45"
                stroke="#10B981"
                strokeWidth="2"
                fill="rgba(16,185,129,0.05)"
              />
              <path
                d="M28 51l14 14 30-28"
                stroke="#065F46"
                strokeWidth="4.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <h1 className="title">SUCESSO</h1>

          <div className="divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line" />
          </div>

          <p className="message">"{text}"</p>

          <div className="status-row">
            <div className="status-dot" />
            <span className="status-text">O mundo está salvo</span>
          </div>
        </div>

        <span className="bottom-id">UN · {new Date().getFullYear()} · CONFIRMED</span>
      </div>
    </>
  );
}