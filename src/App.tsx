import { useActionState, useEffect} from "react";
import { AnswerTypes, type Puzzle } from "./models/Puzzle";
import FormContainer from "./components/form/FormContainer";
import HandleCheck from "./actions/HandleCheck";
import { useTimerContext } from "./context/TimerContext";

export default function App() {
  const puzzles: Puzzle[] = [
    {
      id: 6,
      question: "what color is the sky?",
      answer: ["orange", "blue"],
      answerType: AnswerTypes.checkbox,
      options: [{id: 1, value: "orange"}, {id: 2, value: "blue"}]
    },
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
