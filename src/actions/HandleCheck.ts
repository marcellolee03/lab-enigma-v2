import type { CheckState } from "../models/CheckState";
import { AnswerTypes, type Puzzle } from "../models/Puzzle";
import HandleMatchingCheck from "./HandleMatchingCheck";

export default function HandleCheck(puzzles: Puzzle[], prevState: CheckState | null, formData: FormData): CheckState {

  const rawData: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(formData.entries());
  puzzles.forEach((puzzle) => {
    if (puzzle.answerType === AnswerTypes.checkbox) {
      rawData[`${puzzle.id}`] = formData.getAll(`${puzzle.id}`)
    }
    if (puzzle.answerType === AnswerTypes.ordenation) {
      rawData[`${puzzle.id}`]= JSON.parse(formData.get(`${puzzle.id}`) as string)
    }
  })
  
  const mistakes: number[] = []
  
  for (const puzzle of puzzles) {
    const userAnswer = rawData[puzzle.id];
    if ((puzzle.answerType === AnswerTypes.checkbox && Array.isArray(userAnswer))
        || (puzzle.answerType === AnswerTypes.ordenation && Array.isArray(userAnswer))
    ) {
      const areEqual = puzzle.answer.length === userAnswer.length && puzzle.answer.every((value, index) => value === userAnswer[index]);
      if (!areEqual) {
        mistakes.push(puzzle.id)
      }
    } else if (puzzle.answerType === AnswerTypes.matching){
      return HandleMatchingCheck(puzzle, prevState, formData);
    } else {
      if (puzzle.answer) {
        if (userAnswer !== puzzle.answer) {
          mistakes.push(puzzle.id);
        }
      }
    }
  }
  
  console.log(mistakes);
  if (mistakes.length > 0){
    return { type: "fail" } 
  } else { 
    return { type: "success" }
  };
}