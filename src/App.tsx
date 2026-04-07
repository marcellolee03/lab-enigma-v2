import { useActionState, useEffect, useRef} from "react";
import HandleMatchingCheck from "./actions/HandleMatchingCheck";
import { useTimerContext } from "./context/TimerContext";
import MatchingContainer from "./components/matchingPuzzle/MatchingContainer";
import HandleCheck from "./actions/HandleCheck";
import OrdenationContainer from "./components/ordenationPuzzle/OrdenationContainer";
import { useSecretCodeContext } from "./context/SecretCodeContext";
import FormContainer from "./components/form/FormContainer";
import { firstForm, fourthForm, secondForm, thirdForm } from "./data/data";

export default function App() {
  // data imports
  const firstFormPuzzles = firstForm;
  const secondFormPuzzles = secondForm;
  const thirdFormPuzzle = thirdForm;
  const fourthFormPuzzle = fourthForm;
  
  // actionStates
  // // Handle actions with arguments
  const HandleFirst = HandleCheck.bind(null, firstFormPuzzles);
  const HandleSecond = HandleCheck.bind(null, secondFormPuzzles);
  const HandleThird = HandleMatchingCheck.bind(null, thirdFormPuzzle);
  const HandleFourth = HandleCheck.bind(null, fourthFormPuzzle);
  
  // // action states
  const [firstState, firstAction] = useActionState(HandleFirst, null);
  const [secondState, secondAction] = useActionState(HandleSecond, null);
  const [thirdState, thirdAction] = useActionState(HandleThird, { type: "inProgress", validatedPairs: [], mistakeMade: false});
  const [fourthState, fourthAction] = useActionState(HandleFourth, null);
  
  // helper functions
  const resetRef = useRef<() => void>(null);
  const { applyPenalty } = useTimerContext()
  const { revealPartOfCode } = useSecretCodeContext();
  
  useEffect(() => {
    // first state check
    if (firstState) {
      if (firstState.type === "fail") {
        applyPenalty(3 * 60);
      }
      if (firstState.type === "success") {
        revealPartOfCode(0);
      }
    }
    
    // second state check
    if (secondState) {
      resetRef.current?.()
      if (secondState.type === "fail") {
        applyPenalty(3 * 60);
      }
      if (secondState.type === "success") {
        revealPartOfCode(1);
      }
    }

    // third state check
    if (thirdState.type === "inProgress") {
      if (thirdState.mistakeMade) {
        applyPenalty(3 * 60);
      }
    } else if (thirdState.type === "success") {
      revealPartOfCode(2);
    }
    
    // fourth state check
    if (fourthState) {
      resetRef.current?.()
      if (fourthState.type === "fail") {
        applyPenalty(3 * 60);
      }
      if (fourthState.type === "success") {
        revealPartOfCode(3);
      }
    }
  }, [firstState, secondState, thirdState, fourthState, applyPenalty, revealPartOfCode])
  
  
  return (
    <div className="mx-65 pt-50 pb-50" >
      {
        // First form
      }
      <FormContainer 
        puzzles={firstFormPuzzles}
        formAction={firstAction}
      />
      
      {
        // Second form
      }
      
      <FormContainer
        puzzles={secondFormPuzzles}
        formAction={secondAction}
      />
      
      {
        // Third form
      }
      
      <form
        action={thirdAction}
      >
        <MatchingContainer
          puzzle={thirdFormPuzzle}
          prevValidatedFields={thirdState.type === "inProgress" 
            ? thirdState.validatedPairs
            : []
          }
        />
        <button>submit</button>
      </form>
      
      {
        // Fourth form
      }
      <OrdenationContainer 
      puzzle={fourthFormPuzzle[0]}
      formAction={fourthAction}
      onResetRef={resetRef}
      />
    </div>
  )
}
