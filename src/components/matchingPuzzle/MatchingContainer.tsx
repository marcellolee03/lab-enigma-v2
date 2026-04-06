import { AnswerTypes, type Puzzle } from "../../models/Puzzle"

interface MatchingContainerProps {
  puzzle: Puzzle,
  prevValidatedFields: string[]
}

export default function MatchingContainer({ puzzle, prevValidatedFields}: MatchingContainerProps) {
  let monster: string = "";
  prevValidatedFields.forEach((validatedField) => {
    monster = monster + validatedField
  })
  const baseClasses = "flex flex-col shadow-2xl bg-slate-50 rounded-xl p-10 gap-5 text-left";
  
  if (puzzle.answerType === AnswerTypes.matching) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
        <div className="flex">
          {puzzle.firstRowOptions.map((option) => (
            <label key={option.id}>
              <input 
              type="radio"
              disabled={monster.includes(option.value)}
              name={`${puzzle.id}_firstRow`}
              value={option.value}
              />
              {option.value}
            </label>
          ))}
        </div>
        
        <div className="flex">
          {puzzle.secondRowOptions.map((option) => (
            <label key={option.id}>
              <input 
              type="radio"
              disabled={monster.includes(option.value)}
              name={`${puzzle.id}_secondRow`}
              value={option.value}
              />
              {option.value}
            </label>
          ))}
        </div>
      </div>
    )
  }
}