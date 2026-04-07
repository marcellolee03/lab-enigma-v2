import { useSecretCodeContext } from "../../../context/SecretCodeContext"
import DigitContainer from "./DigitContainer";

export default function RevealedCodeContainer(){
  const { getRevealedCode } = useSecretCodeContext();
  const revealedCode = getRevealedCode();
  
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="text-sm text-slate-900">Código Descoberto:</p>
      <div className="flex gap-3">
        {revealedCode.map((codePiece) => (
          <DigitContainer
            digit={codePiece}
          />
        ))}
      </div>
    </div>
  )
}