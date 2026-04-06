import type { CheckState } from "../models/CheckState";
import { AnswerTypes, type Puzzle } from "../models/Puzzle";

export default function HandleCheck(puzzles: Puzzle[], prevState: CheckState | null, formData: FormData): CheckState {

  const rawData: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(formData.entries());
  puzzles.forEach((puzzle) => {
    if (puzzle.answerType === AnswerTypes.checkbox) {
      rawData[`${puzzle.id}`] = formData.getAll(`${puzzle.id}`)
    }
  })
  
  const mistakes: number[] = []
  console.log(rawData)
  
  puzzles.forEach((puzzle) => {
    const userAnswer = rawData[puzzle.id];
    if (puzzle.answerType === AnswerTypes.checkbox && Array.isArray(userAnswer)){ 
      const areEqual = puzzle.answer.length === userAnswer.length && puzzle.answer.every((value, index) => value === userAnswer[index]);
      if (!areEqual) {
        mistakes.push(puzzle.id)
      }
    } else {
      if (userAnswer !== puzzle.answer) {
        mistakes.push(puzzle.id);
      }
    }
  })
  
  if (mistakes.length === 0) {
    return { type: "success" }
  } else {
    return { type: "fail" }
  }
    
}