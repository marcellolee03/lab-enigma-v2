import { useEffect, useRef} from "react";
import { useTimerContext } from "./context/TimerContext";
import { useSecretCodeContext } from "./context/SecretCodeContext";
import FormContainer from "./components/form/FormContainer";
import { data } from "./data/data";
import Topbar from "./components/topbar/Topbar";
import Bottombar from "./components/bottombar/Bottombar";
import { useNavigate } from "react-router-dom";
import { DelayComponent } from "./lib/DelayComponent";
import { useToast } from "./lib/Toast";
import { useFormStates } from "./lib/useFormStates";

export default function App() {
  const navigate = useNavigate();
  const toaster = useToast();
  const toasted = useRef(false);
  
  // data imports
  const forms = data;
  const formActionStates = useFormStates(forms)
  
  // helper functions
  const resetRef = useRef<() => void>(null);
  const { applyPenalty } = useTimerContext()
  const { revealPartOfCode } = useSecretCodeContext();
  
  // visual flare
  useEffect(() => {
    if (!toasted.current){
      toaster.custom(
        { type: "loading",
          title: "Recebendo formulários...",
          duration: 6000, 
          onDone: () => toaster.success("Formulários recebidos com sucesso. Boa sorte.")}
      );
      toasted.current = true;
    }
  }, [toaster])
  
  
  // check state logic
  useEffect(() => {
    const formStates = [
      { state: formActionStates.first.state, index: 0 },
      { state: formActionStates.second.state, index: 1 },
      { state: formActionStates.third.state, index: 2 },
      { state: formActionStates.fourth.state, index: 3 },
    ]
    
    formStates.forEach(({ state, index }) => {
      if (!state) return;
      resetRef.current?.()
      
      if (state.type === "fail" ) {
        applyPenalty(1 * 60);
      }
      
      if (state.type === "inProgress") {
        if (state.mistakeMade) { applyPenalty(1 * 60) };
      }
      
      if (state.type === "success") {
        revealPartOfCode(index);
      }
    });
    
    // final state check
    if (formActionStates.final.state) {
      if (formActionStates.final.state.type === "fail") {
        applyPenalty(3 * 60);
      }
      if (formActionStates.final.state.type === "success") {
        navigate("/success");
      }
    }
  }, [navigate, applyPenalty,
    formActionStates.first.state,
    formActionStates.second.state,
    formActionStates.third.state,
    formActionStates.fourth.state,
    formActionStates.final.state, revealPartOfCode])
  

  
  return (
    <>
      <Topbar />
      <div className="mx-65 pt-65 pb-50 flex flex-col gap-7" >
        <DelayComponent wait={5000}>
          <FormContainer 
            title="Formulário de Análise 1"
            puzzles={forms[0].firstForm}
            formAction={formActionStates.first.action}
            onResetRef={resetRef}
            prevValidatedFields={[]}
          />
        </DelayComponent>


        
        <DelayComponent wait={4000}>
          <FormContainer
            title="Formulário de Análise 2"
            puzzles={forms[1].secondForm}
            formAction={formActionStates.second.action}
            onResetRef={resetRef}
            prevValidatedFields={[]}
          />
        </DelayComponent>
        
        
        <DelayComponent wait={3000}>
          <FormContainer
            title="Formulário de Análise 3"
            puzzles={forms[2].thirdForm}
            formAction={formActionStates.third.action}
            onResetRef={resetRef}
            prevValidatedFields={formActionStates.third.state.type === "inProgress"
              ? formActionStates.third.state.validatedPairs
              : []
            }
          />
        </DelayComponent>
        
        <DelayComponent wait={2000}>
          <FormContainer
            title="Formulário de Análise 4"
            puzzles={forms[3].fourthForm}
            formAction={formActionStates.fourth.action}
            onResetRef={resetRef}
            prevValidatedFields={[]}
          />
        </DelayComponent>
        
        
        <DelayComponent wait={1000}>
          <FormContainer
            title="Análise Final"
            puzzles={forms[4].finalForm}
            formAction={formActionStates.final.action}
            onResetRef={resetRef}
            prevValidatedFields={[]}
          />
        </DelayComponent>
      </div>
      <Bottombar />
    </>
  )
}
