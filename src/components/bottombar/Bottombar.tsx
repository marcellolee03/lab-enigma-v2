import RevealedCodeContainer from "./RevealedCodeContainer";

export default function Bottombar() {
  
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 mx-50 flex items-center rounded-t-2xl shadow-2xl bg-slate-200 px-10 py-8 gap-5">
      <RevealedCodeContainer />
    </div>
  )
}