import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle"
import PuzzleContainerHeader from "../pieces/PuzzleContainerHeader"

interface CheckboxContainerProps{
  puzzle: Puzzle,
  baseClasses: string,
}

export default function CheckboxContainer({ puzzle, baseClasses }: CheckboxContainerProps){
  if (puzzle.answerType === AnswerTypes.checkbox) {
    return (
      <div className={baseClasses}>
        <PuzzleContainerHeader
          question={puzzle.question}
          hint={puzzle.hint}
        />
        {puzzle.options.map((option) => (
          <label key={option.id}>
            <input 
            type="checkbox"
            name={puzzle.id.toString()}
            value={option.value}
            />
            {option.value}
          </label>
        ))}
      </div>
    )
  }
}