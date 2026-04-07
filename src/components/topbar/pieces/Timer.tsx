import { useTimerContext } from "../../../context/TimerContext";
import { ClockIcon } from "../../icons";

export default function Timer() {
  const { getRemainingTime, getIsPenalized } = useTimerContext();
  const remainingSeconds = getRemainingTime();
  
  function formatTime(remainingSeconds: number) {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return (
      `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
    )
  }
  
  const formattedTime = formatTime(remainingSeconds);
  
  const remainingTimeClasses = `text-4xl duration-200 ${
    getIsPenalized()
      ? "text-red-200 animate-shake"
      : ""
    }`
  
  return (
    <div className="rounded-2xl col-span-2 p-5 bg-linear-to-br from-red-600 to-red-900 text-slate-100 font-bold text-center grid grid-cols-1 gap-1">
      <div className="flex items-center justify-center gap-1">
        <ClockIcon />
        <p className="text-sm">Tempo Restante:</p>
      </div>
      <p className={remainingTimeClasses}>{formattedTime}</p>
    </div>
  )
}