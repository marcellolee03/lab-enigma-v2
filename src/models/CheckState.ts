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

export type CheckState = Success | Fail