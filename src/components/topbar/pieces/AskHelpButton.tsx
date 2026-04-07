import { useTimerContext } from "../../../context/TimerContext"
import { UserIcon } from "../../icons"

export default function AskHelpButton() {
  const { applyPenalty } = useTimerContext()
  return (
    <button 
      className="bg-linear-to-br from-(--main-green) to-(--main-green-dark) cursor-pointer rounded-2xl text-slate-100 px-20 ease-in-out duration-300 transition-all hover:scale-102 hover:shadow-xl active:scale-99"
      onClick={() => applyPenalty(5 * 60)}
    >
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center gap-1">
          <UserIcon />
          <p className="text-sm font-semibold">Central INCB</p>
        </div>
        <p className="font-bold text-xl">Solicitar Auxílio</p>
        <p className="text-xs text-slate-100">OBS: Utilizar com moderação</p>
      </div>
    </button>
  )
}