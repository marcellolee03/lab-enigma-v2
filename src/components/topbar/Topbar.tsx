import AskHelpButton from "./AskHelpButton";
import Timer from "./Timer";

export default function Topbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50 mx-50 grid grid-cols-3 rounded-b-2xl shadow-2xl bg-slate-200 px-10 py-8 gap-5">
      <Timer />
      <AskHelpButton />
    </div>
  )
}