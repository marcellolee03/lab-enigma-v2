import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface SecretCodeContextType {
  getRevealedCode: () => string[],
  revealPartOfCode: (index: number) => void
}

const SecretCodeContext = createContext<SecretCodeContextType | undefined>(undefined)

export function useSecretCodeContext(){
    const context = useContext(SecretCodeContext)
    if (context == null) {
        throw new Error('useSecretCodeContext should be used inside a TimerProvider')
    }
    return context
}

interface SecretCodeProviderProps {
    children: ReactNode
}

const secretCode: string[] = ["6", "7", "8", "9"];
export function SecretCodeProvider({ children }: SecretCodeProviderProps) {
  const [revealedCode, setRevealedCode] = useState<string[]>(["", "", "", ""]);
  
  function getRevealedCode(){
    return revealedCode;
  }
  
  const revealPartOfCode = useCallback((index: number) => {
    setRevealedCode(prev => {
      const copy = [...prev];
      copy[index] = secretCode[index];
      return copy
    }
    )
  }, []);
  
  return (
    <SecretCodeContext.Provider
        value ={{
          getRevealedCode,
          revealPartOfCode
        }}
    >
        {children}
    </SecretCodeContext.Provider>
  )
}