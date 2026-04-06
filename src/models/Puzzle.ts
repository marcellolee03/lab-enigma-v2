export const AnswerTypes = {
  open: "open",
  radio: "radio",
  checkbox: "checkbox",
} as const;

export type AnswerTypes = typeof AnswerTypes[keyof typeof AnswerTypes];

type PuzzleBase = {
  id: number,
  question: string,
}

type OpenPuzzle = PuzzleBase & {
  answerType: typeof AnswerTypes.open
  answer: string
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

export type Puzzle = OpenPuzzle | RadioPuzzle | CheckboxPuzzle