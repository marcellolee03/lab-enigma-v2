import { useEffect, useState } from "react";
import { AnswerTypes, type Puzzle } from "../../../../models/Puzzle";

interface OrdenationContainerProps {
  puzzle: Puzzle,
  baseClasses: string,
  onResetRef: React.RefObject<(() => void) | null>
}

export default function OrdenationContainer({puzzle, baseClasses, onResetRef}: OrdenationContainerProps) {
  const [selected, setSelected] = useState<string[]>([]);
  function handleChange(value: string, checked: boolean){
    setSelected((prev) =>
     checked
     ? [...prev, value]
     : prev.filter(v => v !== value)
    )
  }
  
  useEffect(() => {
    onResetRef.current = () => setSelected([]);
  }, [onResetRef])
  
  if (puzzle.answerType === AnswerTypes.ordenation) {
    return (
      <div className={baseClasses}>
        <p>{puzzle.question}</p>
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
      </div>
    )
  }
}