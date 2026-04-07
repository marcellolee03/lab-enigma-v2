export const AnswerTypes = {
  open: "open",
  radio: "radio",
  checkbox: "checkbox",
  matching: "matching",
  ordenation: "ordenation"
} as const;

export type AnswerTypes = typeof AnswerTypes[keyof typeof AnswerTypes];

type PuzzleBase = {
  id: number,
  question: string,
  hint?: string
}

type OpenPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.open
  answer: string | null
}

interface RadioPuzzleOptions {
  id: number
  value: string
}
type RadioPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.radio
  options: RadioPuzzleOptions[]
  answer: string
}


type CheckboxPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.checkbox
  options: RadioPuzzleOptions[]
  answer: string[]
}

type MatchingPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.matching
  firstRowOptions: RadioPuzzleOptions[]
  secondRowOptions: RadioPuzzleOptions[]
  answer: string[]
}

type OrdenationPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.ordenation
  options: RadioPuzzleOptions[]
  answer: string[]
}

export type Puzzle = OpenPuzzle | RadioPuzzle | CheckboxPuzzle | MatchingPuzzle | OrdenationPuzzle