import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle"

interface CheckboxContainerProps{
  puzzle: Puzzle,
  baseClasses: string,
}

export default function CheckboxContainer({ puzzle, baseClasses }: CheckboxContainerProps){
  if (puzzle.answerType === AnswerTypes.checkbox) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
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