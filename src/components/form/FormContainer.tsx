import type { Puzzle } from "../../models/Puzzle"
import FormContainerHeader from "./pieces/FormContainerHeader"
import SubmitButton from "./pieces/SubmitButton"
import PuzzleContainer from "./puzzleContainers/PuzzleContainer"

interface FormContainerProps { 
  title: string,
  puzzles: Puzzle[],
  prevValidatedFields: string[],
  onResetRef: React.RefObject<(() => void) | null>,
  formAction: (payload: FormData) => void,
}

export default function FormContainer({ title, puzzles, prevValidatedFields, onResetRef, formAction}: FormContainerProps) {
  return (
    <div className="bg-slate-100 rounded-2xl p-10 shadow-2xl col-span-2 flex flex-col gap-13">
      <FormContainerHeader
        title={title}
      />
      <form
      action={formAction}
      >
        <div className="flex flex-col gap-10">
          {puzzles.map((puzzle) => (
            <PuzzleContainer
            prevValidatedFields={prevValidatedFields}
            onResetRef={onResetRef}
            key={puzzle.id}
            puzzle={puzzle}
            />
          ))}
          
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}