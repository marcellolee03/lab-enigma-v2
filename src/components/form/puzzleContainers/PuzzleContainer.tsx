import { AnswerTypes, type Puzzle } from "../../../models/Puzzle"
import CheckboxContainer from "./individual/CheckboxContainer";
import MatchingContainer from "./individual/MatchingContainer";
import OpenContainer from "./individual/OpenContainer";
import OrdenationContainer from "./individual/OrdenationContainer";
import RadioContainer from "./individual/RadioContainer";

interface PuzzleContainerProps {
  puzzle: Puzzle
  prevValidatedFields: string[],
  onResetRef: React.RefObject<(() => void) | null>
}

export default function PuzzleContainer({ puzzle, prevValidatedFields, onResetRef }: PuzzleContainerProps) {
  const baseClasses = "flex flex-col shadow-2xl bg-slate-50 rounded-xl p-10 gap-5 text-left";
  
  if (puzzle.answerType === AnswerTypes.open) {
    return (
      <OpenContainer
        puzzle={puzzle}
        baseClasses={baseClasses}
      />
    )
  }
  
  ///////
    
  if (puzzle.answerType === AnswerTypes.radio) {
    return (
      <RadioContainer
        puzzle={puzzle}
        baseClasses={baseClasses}
      />
    )
  }
  
  ///////
  
  if (puzzle.answerType === AnswerTypes.checkbox) {
    return (
      <CheckboxContainer
        puzzle={puzzle}
        baseClasses={baseClasses}
      />
    )
  }
  
  ///////
  
  if (puzzle.answerType === AnswerTypes.matching) {
    return (
      <MatchingContainer
        puzzle={puzzle}
        baseClasses={baseClasses}
        prevValidatedFields={prevValidatedFields}
      />
    )
  }
  
  ///////
  
  if (puzzle.answerType === AnswerTypes.ordenation) {
    return (
      <OrdenationContainer
      puzzle={puzzle}
      baseClasses={baseClasses}
      onResetRef={onResetRef}
      />
    )
  }
}