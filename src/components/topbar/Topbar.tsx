import AskHelpButton from "./pieces/AskHelpButton";
import Header from "./pieces/Header";
import Timer from "./pieces/Timer";

export default function Topbar() {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-50 mx-50 rounded-b-2xl shadow-2xl bg-slate-100 px-10 pb-8 pt-4 gap-5 border-b-3 border-(--main-green)">
        <Header />
        <div className="grid grid-cols-3 gap-5 px-40 pt-2">
          <Timer />
          <AskHelpButton />
        </div>
      </div>
    </>
  )
}