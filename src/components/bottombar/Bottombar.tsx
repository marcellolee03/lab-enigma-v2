import RevealedCodeContainer from "./pieces/RevealedCodeContainer";

export default function Bottombar() {
  
  return (
    <div className="fixed bottom-0 border-t-2 border-(--main-green) justify-center inset-x-0 z-50 mx-130 flex items-center rounded-t-2xl shadow-2xl bg-slate-100 px-10 py-4 gap-5 animate-fade-up [animation-delay:200ms]">
      <RevealedCodeContainer />
    </div>
  )
}