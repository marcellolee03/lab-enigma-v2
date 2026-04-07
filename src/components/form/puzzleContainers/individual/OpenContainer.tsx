import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle"

interface OpenContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
}

export default function OpenContainer({ puzzle, baseClasses }: OpenContainerProps){
  if (puzzle.answerType === AnswerTypes.open) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
        <input
          name={puzzle.id.toString()}
          className="border px-3 py-3 rounded-lg "
        ></input>
      </div>
    )
  }
}