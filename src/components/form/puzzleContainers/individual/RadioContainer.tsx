import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle"
import PuzzleContainerHeader from "../pieces/PuzzleContainerHeader"

interface RadioContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
}

export default function RadioContainer({ puzzle, baseClasses }: RadioContainerProps){
  if (puzzle.answerType === AnswerTypes.radio) {
    return (
      <div className={baseClasses}>
        <PuzzleContainerHeader
          question={puzzle.question}
          hint={puzzle.hint}
        />
        {puzzle.options.map((option) => (
          <label key={option.id}>
            <input 
            type="radio"
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