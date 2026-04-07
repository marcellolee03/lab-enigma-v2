interface DigitContainerProps {
  digit: string 
}

export default function DigitContainer({digit}: DigitContainerProps){
  console.log("alou")
  return (
    <div className="rounded-lg text-4xl min-w-12 min-h-12 bg-slate-300 px-2 py-1 text-slate-900 font-semibold text-center">
      <p>{digit}</p>
    </div>
  )
}