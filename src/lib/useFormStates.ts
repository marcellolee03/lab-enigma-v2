import { useActionState } from "react";
import HandleCheck from "../actions/HandleCheck";
import type { Form } from "../data/data";

export function useFormStates(data: Form[]) {
  const HandleCheckArr = [];
  
  for (const form of data) {
    const puzzles = Object.values(form)[0];
    const aux = HandleCheck.bind(null, puzzles)
    HandleCheckArr.push(aux);
  }
  
  const [firstState, firstAction] = useActionState(HandleCheckArr[0], null);
  const [secondState, secondAction] = useActionState(HandleCheckArr[1], null);
  const [thirdState, thirdAction] = useActionState(HandleCheckArr[2], { type: "inProgress", validatedPairs: [], mistakeMade: false});
  const [fourthState, fourthAction] = useActionState(HandleCheckArr[3], null);
  const [finalState, finalAction] = useActionState(HandleCheckArr[4], null);
  
  return {
    first: {
      state: firstState,
      action: firstAction
    },
    
    second: {
      state: secondState,
      action: secondAction
    },
    
    third: {
      state: thirdState,
      action: thirdAction
    },
    
    fourth: {
      state: fourthState,
      action: fourthAction,
    },
    
    final: {
      state: finalState,
      action: finalAction
    },
  }
}