import { AnswerTypes, type Puzzle } from "../../models/Puzzle"

interface PuzzleContainerProps {
  puzzle: Puzzle
  name: string
}

export default function PuzzleContainer({ puzzle, name }: PuzzleContainerProps) {
  const baseClasses = "flex flex-col shadow-2xl bg-slate-50 rounded-xl p-10 gap-5 text-left";
  
  if (puzzle.answerType === AnswerTypes.open) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
        <input
          name={name}
          className="border px-3 py-3 rounded-lg "
        ></input>
      </div>
    )
  }
  
    ///////
    
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