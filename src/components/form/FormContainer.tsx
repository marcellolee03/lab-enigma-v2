import type { Puzzle } from "../../models/Puzzle"
import PuzzleContainer from "./PuzzleContainer"

interface FormContainerProps { 
  puzzles: Puzzle[],
  prevValidatedFields: string[],
  onResetRef: React.RefObject<(() => void) | null>,
  formAction: (payload: FormData) => void
}

export default function FormContainer({ puzzles, prevValidatedFields, onResetRef, formAction}: FormContainerProps) {
  return (
    <div className="bg-slate-100 rounded-2xl p-10 shadow-2xl col-span-2">
      <form
      action={formAction}
      >
        <div className="flex flex-col gap-15">
          {puzzles.map((puzzle) => (
            <PuzzleContainer
            prevValidatedFields={prevValidatedFields}
            onResetRef={onResetRef}
            key={puzzle.id}
            puzzle={puzzle}
            />
          ))}
          
          <button>Submit Form</button>
        </div>
      </form>
    </div>
  )
}