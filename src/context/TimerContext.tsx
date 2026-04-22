import { useCallback, type ReactNode } from "react"
import { useContext, createContext, useState, useEffect, useRef} from "react"
import { useNavigate } from "react-router-dom"
import useSound from "use-sound";
import wrongSfx from "../../public/sfx/wrong.mp3";

// CONTEXT and USECONTEXT
// Setting Context Type. Essentially what the provider will provide.
interface TimerContextType {
    getRemainingTime: () => number,
    applyPenalty: (penalty: number) => void,
    getIsPenalized: () => boolean,
    startTimer: () => void,
    stopTimer: () => void,
}

const TimerContext = createContext<TimerContextType | undefined>(undefined)

export function useTimerContext(){
    const context = useContext(TimerContext)
    if (context == null) {
        throw new Error('useTimerContext should be used inside a TimerProvider')
    }
    return context
}

// CONTEXT PROVIDER
// Setting props for the Context Provider
interface TimerProviderProps {
    children: ReactNode
}

// Context provider. Attributes and methods accessible through useContext
export function TimerProvider({ children }: TimerProviderProps) {
  const [isPenalized, setIsPenalized] = useState<boolean>(false)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null)

  const navigate = useNavigate();
  const [ playWrongSfx ] = useSound(wrongSfx);

  // Timer logic
  const [ remainingTime, setRemainingTime ] = useState<number>(30 * 60)
  useEffect(() => {
    if (isTimerRunning) {
      if (remainingTime < 0) {
        navigate("/failure");
      } 

      const timer = setInterval(() => {
          setRemainingTime(prevRemainingTime => prevRemainingTime - 1)
      }, 1000)

      return () => clearInterval(timer)
      }
    }, [remainingTime, isTimerRunning])

    // Timer functions
    function getRemainingTime() {
        return remainingTime
    }
  
  function startTimer() {
    setIsTimerRunning(true)
  }

  function stopTimer() {
    setIsTimerRunning(false)
  }

  useEffect(() => {
    if (isPenalized) {
        playWrongSfx();
    }
  }, [isPenalized]);

    const applyPenalty = useCallback((penalty: number) => {
        setRemainingTime(prevRemainingTime => prevRemainingTime - penalty)

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        setIsPenalized(true)
        setTimeout(()=> {
            setIsPenalized(false)
            timeoutRef.current = null
        },500)
    }, [])

    function getIsPenalized(){
        return isPenalized
    }

    return (
        <TimerContext.Provider
            value ={{
                getRemainingTime,
                applyPenalty,
                getIsPenalized,
                startTimer,
                stopTimer
            }}
        >
            {children}
        </TimerContext.Provider>
    )
}