import { useActionState } from "react";
import type { Puzzle } from "./models/Puzzle";
import FormContainer from "./components/form/FormContainer";
import HandleCheck from "./actions/HandleCheck";
import IconShowcase from "./components/IconShowcase";

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
      id: 1,
      question: "what color is the sky?",
      answer: "blue"
    },
    {
      id: 2,
      question: "what color is the sky?",
      answer: "blue"
    }
  ]
  
  const HandleCheckWithPuzzles = HandleCheck.bind(null, puzzles);
  const [state, formAction, isPending] = useActionState(HandleCheckWithPuzzles, null);
  
  
  return (
    <div className="mx-65 pt-50" >
      <FormContainer
        puzzles={puzzles}
        formAction={formAction}
      />
    </div>
  )
}
