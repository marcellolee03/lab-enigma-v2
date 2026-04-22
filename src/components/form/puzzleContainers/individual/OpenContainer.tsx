import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle"
import PuzzleContainerHeader from "../pieces/PuzzleContainerHeader"

interface OpenContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
  scientific?: boolean
}

export default function OpenContainer({ puzzle, baseClasses, scientific = false }: OpenContainerProps){
  if (puzzle.answerType === AnswerTypes.open) {
    return (
      <div className={baseClasses}>
        <PuzzleContainerHeader
          question={puzzle.question}
          hint={puzzle.hint}
        />
        <input
          name={puzzle.id.toString()}
          className={`border px-3 py-3 rounded-lg focus-within:ring-1 focus-within:ring-(--main-green) transition-all outline-none ${scientific && "underline italic"}`}
        ></input>
      </div>
    )
  }
}