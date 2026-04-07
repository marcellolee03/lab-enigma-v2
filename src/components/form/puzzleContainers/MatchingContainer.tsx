import { AnswerTypes, type Puzzle } from "../../../models/Puzzle"

interface MatchingContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
  prevValidatedFields: string[],
}

export default function MatchingContainer({ puzzle, baseClasses, prevValidatedFields}: MatchingContainerProps) {
  let monster: string = "";
  prevValidatedFields.forEach((validatedField) => {
    monster = monster + validatedField
  })
  
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