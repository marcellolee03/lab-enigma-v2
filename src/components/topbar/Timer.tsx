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

  // Determine timer state based on remaining time - always dark red with sirens
  const getTimerState = () => {
    if (remainingSeconds > 900) return 'normal';        // > 15 minutes - no pulse
    if (remainingSeconds > 300) return 'warning';       // 5-15 minutes - slow pulse
    return 'critical';                                   // < 5 minutes - fast pulse
  };

  const timerState = getTimerState();

  // Custom keyframes for siren effect with smooth transitions
  const sirenSlowClass = "animate-[siren-slow_3s_cubic-bezier(0.4,0,0.6,1)_infinite]";
  const sirenFastClass = "animate-[siren-fast_1s_cubic-bezier(0.4,0,0.6,1)_infinite]";

  const stateStyles = {
    normal: {
      container: "bg-gradient-to-br from-red-600 to-red-900 text-white shadow-lg shadow-red-400 transition-all duration-1000",
      icon: "text-red-100 transition-colors duration-500",
      time: "text-white transition-colors duration-500",
      pulse: ""
    },
    warning: {
      container: "bg-gradient-to-br from-red-600 to-red-900 text-white shadow-lg shadow-red-400 transition-all duration-1000",
      icon: "text-red-100 transition-colors duration-500",
      time: "text-white transition-colors duration-500",
      pulse: sirenSlowClass
    },
    critical: {
      container: "bg-gradient-to-br from-red-600 to-red-900 text-white shadow-lg shadow-red-400 transition-all duration-1000",
      icon: "text-red-100 transition-colors duration-500",
      time: "text-white transition-colors duration-500",
      pulse: sirenFastClass
    }
  };

  const styles = stateStyles[timerState];

  return (
    <div className={`rounded-xl col-span-2 p-4 font-medium ${styles.container} ${styles.pulse}`}>
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