import type { CheckState } from "../models/CheckState";
import type { Puzzle } from "../models/Puzzle";

export default function HandleCheck(puzzles: Puzzle[], prevState: CheckState | null, formData: FormData): CheckState {
  const rawData = Object.fromEntries(formData.entries());
  const mistakes: number[] = []
  
  puzzles.forEach((puzzle) => {
    if (rawData[puzzle.id] !== puzzle.answer) {
      mistakes.push(puzzle.id)
    }
  })
  
  if (mistakes.length === 0) {
    return { type: "success" }
  } else {
    return { type: "fail" }
  }
    
}