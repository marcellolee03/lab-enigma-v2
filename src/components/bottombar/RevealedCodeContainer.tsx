import { useSecretCodeContext } from "../../context/SecretCodeContext"

export default function RevealedCodeContainer(){
  const { getRevealedCode } = useSecretCodeContext();
  const revealedCode = getRevealedCode();
  
  return (
    <div className="flex">
      {revealedCode.map((codePiece) => (
        <p>
          {codePiece}
        </p>
      ))}
    </div>
  )
}