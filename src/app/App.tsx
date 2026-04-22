import { useEffect, useRef} from "react";
import { useTimerContext } from "../context/TimerContext";
import { useSecretCodeContext } from "../context/SecretCodeContext";
import FormContainer from "../components/form/FormContainer";
import { data } from "../data/data";
import Topbar from "../components/topbar/Topbar";
import Bottombar from "../components/bottombar/Bottombar";
import { useNavigate } from "react-router-dom";
import { DelayComponent } from "../lib/DelayComponent";
import { useToast } from "../lib/Toast";
import { useFormStates } from "../lib/useFormStates";
import useSound from "use-sound";
import correctSfx from "../../public/sfx/correct.mp3";
import wrongSfx from "../../public/sfx/wrong.mp3";

export default function App() {
  const navigate = useNavigate();
  const toaster = useToast();
  const toasted = useRef(false);

  const [playCorrectSfx] = useSound(correctSfx);
  const [playWrongSfx] = useSound(wrongSfx);
  
  // data imports
  const forms = data;
  const formActionStates = useFormStates(forms)
  
  // helper functions
  const resetRef = useRef<() => void>(null);
  const { startTimer, applyPenalty } = useTimerContext()
  const { revealPartOfCode } = useSecretCodeContext();
  
  // visual flare
  useEffect(() => {
    function onInitialLoad() {
      toaster.success("Formulários recebidos com sucesso. Boa sorte");
      startTimer();
    }
    if (!toasted.current){
      toaster.custom(
        {
          type: "loading",
          title: "Recebendo formulários...",
          duration: 6000,
          onDone: onInitialLoad} 
      );
      toasted.current = true;
    }
  }, [toaster, startTimer]);

  useEffect(() => {
    const state = formActionStates.first.state;
    if (!state) return;
    resetRef.current?.();
    if (state.type === "fail") {
      playWrongSfx();
      applyPenalty(20);
    }
    if (state.type === "success") {
      playCorrectSfx();
      revealPartOfCode(0);
    }
  }, [formActionStates.first.state]);

  useEffect(() => {
    const state = formActionStates.second.state;
    if (!state) return;
    resetRef.current?.();
    if (state.type === "fail") {
      playWrongSfx();
      applyPenalty(20);
    }
    if (state.type === "success") {
      playCorrectSfx();
      revealPartOfCode(1);
    }
  }, [formActionStates.second.state]);
  
  useEffect(() => {
    const state = formActionStates.third.state;
    if (!state) return;
    resetRef.current?.();
    if (state.type === "inProgress") {
      if (state.mistakeMade) { 
        playWrongSfx();
        applyPenalty(20);
      }
    }
    if (state.type === "success") {
      playCorrectSfx();
      revealPartOfCode(2);
    }
  }, [formActionStates.third.state]);

  useEffect(() => {
    const state = formActionStates.fourth.state;
    if (!state) return;
    resetRef.current?.();
    if (state.type === "fail") {
      playWrongSfx();
      applyPenalty(20);
    }
    if (state.type === "success") {
      playCorrectSfx();
      revealPartOfCode(3);
    }
  }, [formActionStates.fourth.state]);

  useEffect(() => {
    const state = formActionStates.final.state;
    if (!state) return;
    resetRef.current?.();
    if (state.type === "fail") {
      playWrongSfx();
      applyPenalty(3 * 60);
    }
    if (state.type === "success") {
      navigate("/success");
    }
  }, [formActionStates.final.state]);
  
  return (
    <>
      <Topbar />
      <div className="mx-65 pt-65 pb-50 flex flex-col gap-7" >
        
        {formActionStates.first.state?.type !== "success" &&
          <DelayComponent wait={5000}>
            <FormContainer 
              title="Formulário de Análise 1"
              puzzles={forms[0].firstForm}
              formAction={formActionStates.first.action}
              onResetRef={resetRef}
              prevValidatedFields={[]}
            />
          </DelayComponent>
        }


        {formActionStates.second.state?.type !== "success" &&
          <DelayComponent wait={4000}>
            <FormContainer
              title="Formulário de Análise 2"
              puzzles={forms[1].secondForm}
              formAction={formActionStates.second.action}
              onResetRef={resetRef}
              prevValidatedFields={[]}
            />
          </DelayComponent>
        }
        
        {formActionStates.third.state?.type !== "success" && 
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
        }
        
        {formActionStates.fourth.state?.type !== "success" &&
          <DelayComponent wait={2000}>
            <FormContainer
              title="Formulário de Análise 4"
              puzzles={forms[3].fourthForm}
              formAction={formActionStates.fourth.action}
              onResetRef={resetRef}
              prevValidatedFields={[]}
            />
          </DelayComponent>
        }
        
        {formActionStates.final.state?.type !== "success" &&
          <DelayComponent wait={1000}>
            <FormContainer
              title="Análise Final"
              puzzles={forms[4].finalForm}
              formAction={formActionStates.final.action}
              onResetRef={resetRef}
              prevValidatedFields={[]}
            />
          </DelayComponent>
        }
      </div>
      <Bottombar />
    </>
  )
}
