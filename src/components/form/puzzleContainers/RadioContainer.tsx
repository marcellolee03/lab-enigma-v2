import { AnswerTypes, type Puzzle } from "../../../models/Puzzle"

interface RadioContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
}

export default function RadioContainer({ puzzle, baseClasses }: RadioContainerProps){
  if (puzzle.answerType === AnswerTypes.radio) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
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