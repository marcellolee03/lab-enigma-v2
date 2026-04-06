import type { CheckState } from "../models/CheckState";
import { AnswerTypes, type Puzzle } from "../models/Puzzle";

export default function HandleMatchingCheck(puzzle: Puzzle, prevState: CheckState | null, formData: FormData): CheckState {
  const rawData: Record<string, FormDataEntryValue | FormDataEntryValue[]> = Object.fromEntries(formData.entries());
  let validatedPairs = prevState?.type === "inProgress"
    ? prevState.validatedPairs
    : [];

  if (puzzle.answerType === AnswerTypes.matching) {
    const pair: string = rawData[`${puzzle.id}_firstRow`].toString() + rawData[`${puzzle.id}_secondRow`].toString()
    if (!puzzle.answer.includes(pair)) {
      return { type: "inProgress", validatedPairs: validatedPairs, mistakeMade: true}
    } else {
      validatedPairs = [...validatedPairs, pair];
    }
  }
  
  if (validatedPairs.length === puzzle.answer.length) {
    return { type: "success" }
  } else {
    return { type: "inProgress", validatedPairs: validatedPairs, mistakeMade: false}
  }
}