interface Success {
  type: "success"
}

interface Fail {
  type: "fail";
  error?: string;
  details?: {
    [key: string]: { errors: string[] }
  }
}

interface InProgress {
  type: "inProgress",
  validatedPairs: string[],
  mistakeMade: boolean
}

export type CheckState = Success | Fail | InProgress