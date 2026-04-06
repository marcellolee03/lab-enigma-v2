import { useActionState, useEffect} from "react";
import { AnswerTypes, type Puzzle } from "./models/Puzzle";
import HandleMatchingCheck from "./actions/HandleMatchingCheck";
import { useTimerContext } from "./context/TimerContext";
import MatchingContainer from "./components/matchingPuzzle/MatchingContainer";
import HandleCheck from "./actions/HandleCheck";
import OrdenationContainer from "./components/ordenationPuzzle/OrdenationContainer";

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
      id: 2,
      answerType: AnswerTypes.ordenation,
      question: "test",
      options: [{id: 1, value: "a"}, {id: 2, value: "b"}, {id: 3, value:"c"}],
      answer: ["a", "b", "c"]
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
      console.log("matching success!");
    }
    
    if (regularState) {
      if (regularState.type === "fail") {
        applyPenalty(3 * 60);
      }
      
      if (regularState.type === "success") {
        console.log("regular success!")
      }
    }
  }, [matchingState, regularState, applyPenalty])
  
  
  return (
    <div className="mx-65 pt-50" >
      <OrdenationContainer 
      puzzle={regularPuzzles[0]}
      formAction={regularAction}
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
