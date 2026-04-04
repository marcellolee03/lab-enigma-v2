import type { Puzzle } from "../../models/Puzzle"
import PuzzleContainer from "./PuzzleContainer"
import { SendIcon } from "../icons"

interface FormContainerProps {
  puzzles: Puzzle[],
  formAction: (payload: FormData) => void
}

export default function FormContainer({ puzzles, formAction}: FormContainerProps) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl p-8 shadow-xl border border-emerald-100/50 col-span-2">
      <form action={formAction}>
        <div className="flex flex-col gap-8">
          {puzzles.map((puzzle) => (
            <PuzzleContainer
              key={puzzle.id}
              name={puzzle.id.toString()}
              puzzle={puzzle}
            />
          ))}

          {/* Submit button */}
          <div className="flex justify-center pt-6 border-t border-emerald-200/30">
            <button
              type="submit"
              className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-emerald-400/30"
            >
              <div className="flex items-center gap-3">
                <SendIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                <span className="text-sm tracking-wide">Enviar Análises</span>
              </div>
            </button>
          </div>

          {/* Footer info */}
          <div className="text-center text-xs text-gray-500 border-t border-gray-200/50 pt-4">
            <p>Sistema de Análise Laboratorial • Instituto Nacional de Biossegurança</p>
          </div>
        </div>
      </form>
    </div>
  )
}