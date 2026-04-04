import type { Puzzle } from "../../models/Puzzle"

interface PuzzleContainerProps {
  puzzle: Puzzle
  name: string
}

export default function PuzzleContainer({ puzzle, name }: PuzzleContainerProps) {
  return (
    <div className="flex flex-col shadow-2xl bg-slate-50 rounded-xl p-10 gap-5 text-left">
      <p>{puzzle.question}</p>
      <input
        name={name}
        className="border px-3 py-3 rounded-lg "
      ></input>
    </div>
  )
}