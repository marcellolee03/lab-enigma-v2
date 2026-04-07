import AskHelpButton from "./AskHelpButton";
import Header from "./Header";
import Timer from "./Timer";

export default function Topbar() {
  return (
    <>
      
      <div className="fixed top-0 inset-x-0 z-50 mx-50 rounded-b-2xl shadow-2xl bg-slate-100 px-10 pb-8 pt-4 gap-5">
        <Header />
        <div className="grid grid-cols-3 gap-5 px-40">
          <Timer />
          <AskHelpButton />
        </div>
      </div>
    </>
  )
}