import type { CheckState } from "../models/CheckState";
import type { Puzzle } from "../models/Puzzle";

export default function HandleCheck(puzzles: Puzzle[], prevState: CheckState| null, formData: FormData): CheckState {
  const rawData = Object.fromEntries(formData.entries());
  puzzles.map((puzzle) => (
    
    rawData[puzzle.id] === puzzle.answer
      ? console.log("right")
      : console.log("wrong")
  ))
    
  return {
    type: "success"
  }
}