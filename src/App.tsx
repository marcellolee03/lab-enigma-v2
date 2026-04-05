import { useActionState, useEffect} from "react";
import type { Puzzle } from "./models/Puzzle";
import FormContainer from "./components/form/FormContainer";
import HandleCheck from "./actions/HandleCheck";
import { useTimerContext } from "./context/TimerContext";

export default function App() {
  const puzzles: Puzzle[] = [
    {
      id: 1,
      question: "what color is the sky?",
      answer: "blue"
    },
    {
      id: 2,
      question: "what color is the sky?",
      answer: "blue"
    },
    {
      id: 3,
      question: "what color is the sky?",
      answer: "blue"
    },
    {
      id: 4,
      question: "what color is the sky?",
      answer: "blue"
    }
  ]
  
  const HandleCheckWithPuzzles = HandleCheck.bind(null, puzzles);
  const [state, formAction] = useActionState(HandleCheckWithPuzzles, null);
  const { applyPenalty } = useTimerContext()
  
  useEffect(() => {
    if (state) {
      if (state.type === "success") {
        console.log ("success!")
      }
      
      if (state.type === "fail") {
        applyPenalty(3 * 60)
      }
    }
  }, [state, applyPenalty])
  
  
  return (
    <div className="mx-65 pt-50" >
      <FormContainer
        puzzles={puzzles}
        formAction={formAction}
      />
    </div>
  )
}
