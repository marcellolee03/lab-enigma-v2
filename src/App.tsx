import { useActionState, useEffect} from "react";
import { AnswerTypes, type Puzzle } from "./models/Puzzle";
import HandleMatchingCheck from "./actions/HandleMatchingCheck";
import { useTimerContext } from "./context/TimerContext";
import MatchingContainer from "./components/matchingPuzzle/MatchingContainer";
import FormContainer from "./components/form/FormContainer";
import HandleCheck from "./actions/HandleCheck";

export default function App() {
  const matchingPuzzle: Puzzle = ( 
    {
      id: 6,
      answerType: AnswerTypes.matching,
      question: "what color is the sky?",
      answer: ["blueorange", "orangeblue", "6767"],
      firstRowOptions: [{id: 1, value: "orange"}, {id: 2, value: "blue"}, {id: 3, value: "67"}],
      secondRowOptions: [{id: 1, value: "orange"}, {id: 2, value: "blue"}, {id: 3, value: "67"}],
    }
  )

  
  const regularPuzzles: Puzzle[] = [
    {
      id: 1,
      answerType: AnswerTypes.open,
      question: "what color is the sky?",
      answer: "blue"
    }
  ]
  
  const HandleMatchingCheckWithPuzzles = HandleMatchingCheck.bind(null, matchingPuzzle);
  const HandleRegularCheckWithPuzzles = HandleCheck.bind(null, regularPuzzles);
  const [matchingState, matchingAction] = useActionState(HandleMatchingCheckWithPuzzles, { type: "inProgress", validatedPairs: [], mistakeMade: false});
  const [regularState, regularAction] = useActionState(HandleRegularCheckWithPuzzles, null);
  const { applyPenalty } = useTimerContext()
  
  useEffect(() => {
    if (matchingState.type === "inProgress") {
      if (matchingState.mistakeMade) {
        applyPenalty(3 * 60);
      }
    } else if (matchingState.type === "success") {
      console.log("success");
    }
    
    if (regularState) {
      if (regularState.type === "fail") {
        applyPenalty(3 * 60);
      }
      
      if (regularState.type === "success") {
        console.log("state 1 success!")
      }
    }
  }, [matchingState, regularState, applyPenalty])
  
  
  return (
    <div className="mx-65 pt-50" >
      <FormContainer 
      formAction={regularAction}
      puzzles={regularPuzzles}
      />
      <form
        action={matchingAction}
      >
        <MatchingContainer
          puzzle={matchingPuzzle}
          prevValidatedFields={matchingState.type === "inProgress" 
            ? matchingState.validatedPairs
            : []
          }
        />
        <button>submit</button>
      </form>
    </div>
  )
}
