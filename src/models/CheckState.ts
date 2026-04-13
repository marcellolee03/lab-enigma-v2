interface Success {
  type: "success"
}

interface Fail {
  type: "fail";
}

interface InProgress {
  type: "inProgress",
  validatedPairs: string[],
  mistakeMade: boolean
}

interface Error {
  type: "error",
  error?: string;
  details?: {
    [key: string]: { errors: string[] }
  }
}

export type CheckState = Success | Fail | InProgress | Error