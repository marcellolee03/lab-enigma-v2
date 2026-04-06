import { useTimerContext } from "../../context/TimerContext"

export default function AskHelpButton() {
  const { applyPenalty } = useTimerContext()
  return (
    <button 
      className="bg-blue-500 rounded-2xl text-white px-20 text-xl font-bold"
      onClick={() => applyPenalty(5 * 60)}
    >
      Solicitar Auxilio a Central
    </button>
  )
}