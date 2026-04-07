import { useTimerContext } from "../../context/TimerContext";

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
  
  return (
    <div className="rounded-2xl col-span-2 p-5 bg-linear-to-br from-red-600 to-red-900 text-white font-bold text-center grid grid-cols-1 gap-1">
      <div>
        <p>Tempo Restante:</p>
      </div>
      <p className="text-3xl">{formattedTime}</p>
    </div>
  )
}