import { useState } from "react";
import { AnswerTypes, type Puzzle } from "../../models/Puzzle";

interface OrdenationContainerProps {
  puzzle: Puzzle
  formAction: (payload: FormData) => void
}

export default function OrdenationContainer({puzzle, formAction}: OrdenationContainerProps) {
  const [selected, setSelected] = useState<string[]>([]);
  function handleChange(value: string, checked: boolean){
    setSelected((prev) =>
     checked
     ? [...prev, value]
     : prev.filter(v => v !== value)
    )
  }
  
  const baseClasses = "flex flex-col shadow-2xl bg-slate-50 rounded-xl p-10 gap-5 text-left";
  if (puzzle.answerType === AnswerTypes.ordenation) {
    return (
      <div className={baseClasses}>
        <form
          action={formAction}
        >
          {puzzle.options.map((option) => (
            <label key={option.id}>
              <input 
                type="checkbox"
                checked={selected.includes(option.value)}
                onChange={(e) => handleChange(option.value, e.target.checked)}
              />
              {option.value}
            </label>
          ))}
          <input 
            type="hidden"
            name={puzzle.id.toString()}
            value={JSON.stringify(selected)}
          />
          <button
          >submit</button>
        </form>
      </div>
    )
  }
}