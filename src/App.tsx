import { useActionState, useEffect, useRef} from "react";
import { useTimerContext } from "./context/TimerContext";
import HandleCheck from "./actions/HandleCheck";
import { useSecretCodeContext } from "./context/SecretCodeContext";
import FormContainer from "./components/form/FormContainer";
import { firstForm, fourthForm, secondForm, thirdForm } from "./data/data";

export default function App() {
  // data imports
  const firstFormPuzzles = firstForm;
  const secondFormPuzzles = secondForm;
  const thirdFormPuzzles = thirdForm;
  const fourthFormPuzzles = fourthForm;
  
  // actionStates
  // // Handle actions with arguments
  const HandleFirst = HandleCheck.bind(null, firstFormPuzzles);
  const HandleSecond = HandleCheck.bind(null, secondFormPuzzles);
  const HandleThird = HandleCheck.bind(null, thirdFormPuzzles);
  const HandleFourth = HandleCheck.bind(null, fourthFormPuzzles);
  
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
    console.log(thirdState)
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
    <div className="mx-65 pt-65 pb-50 flex flex-col gap-7" >
      <FormContainer 
        title="Formulário de Análise 1"
        puzzles={firstFormPuzzles}
        formAction={firstAction}
        onResetRef={resetRef}
        prevValidatedFields={[]}
      />
      
      <FormContainer
        title="Formulário de Análise 2"
        puzzles={secondFormPuzzles}
        formAction={secondAction}
        onResetRef={resetRef}
        prevValidatedFields={[]}
      />
      
      
      <FormContainer
        title="Formulário de Análise 3"
        puzzles={thirdFormPuzzles}
        formAction={thirdAction}
        onResetRef={resetRef}
        prevValidatedFields={thirdState.type === "inProgress"
          ? thirdState.validatedPairs
          : []
        }
      />
      
      <FormContainer
        title="Formulário de Análise 4"
        puzzles={fourthFormPuzzles}
        formAction={fourthAction}
        onResetRef={resetRef}
        prevValidatedFields={[]}
      />
    </div>
  )
}
