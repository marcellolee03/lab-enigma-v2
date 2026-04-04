import { useTimerContext } from "../../context/TimerContext";
import { ClockIcon } from "../icons";

export default function Timer() {
  const { getRemainingTime } = useTimerContext();
  const remainingSeconds = getRemainingTime();

  function formatTime(remainingSeconds: number) {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return (
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    )
  }

  const formattedTime = formatTime(remainingSeconds);

  // Determine timer state based on remaining time
  const getTimerState = () => {
    if (remainingSeconds > 300) return 'normal';    // > 5 minutes
    if (remainingSeconds > 60) return 'warning';    // 1-5 minutes
    return 'critical';                              // < 1 minute
  };

  const timerState = getTimerState();

  const stateStyles = {
    normal: {
      container: "bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg shadow-emerald-200",
      icon: "text-emerald-100",
      time: "text-white",
      pulse: ""
    },
    warning: {
      container: "bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-200",
      icon: "text-amber-100",
      time: "text-white",
      pulse: ""
    },
    critical: {
      container: "bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg shadow-red-200",
      icon: "text-red-100",
      time: "text-white",
      pulse: "animate-pulse"
    }
  };

  const styles = stateStyles[timerState];

  return (
    <div className={`rounded-xl col-span-2 p-4 font-medium transition-all duration-500 ${styles.container} ${styles.pulse}`}>
      <div className="flex items-center justify-center gap-2 mb-1">
        <ClockIcon className={`w-4 h-4 ${styles.icon}`} />
        <span className="text-xs font-medium tracking-wide uppercase opacity-90">
          Tempo Restante
        </span>
      </div>
      <div className="text-center">
        <p className={`text-2xl font-bold tracking-wider ${styles.time} drop-shadow-sm`}>
          {formattedTime}
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mt-2 bg-black/20 rounded-full h-1 overflow-hidden">
        <div
          className="h-full bg-white/40 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${Math.max(0, Math.min(100, (remainingSeconds / 1800) * 100))}%`
          }}
        />
      </div>
    </div>
  )
}