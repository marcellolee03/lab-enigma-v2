import HandleCheck from "./actions/HandleCheck";
import type { Form } from "./data/data";

export function PuzzleStates(data: Form[]) {
  const HandleCheckArr = [];
  
  for (const form of data) {
    const puzzles = Object.values(form)[0];
    const aux = HandleCheck.bind(null, puzzles)
    HandleCheckArr.push(aux);
  }
  
  console.log(HandleCheckArr)
}