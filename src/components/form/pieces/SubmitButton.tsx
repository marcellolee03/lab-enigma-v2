import { SendIcon } from "../../icons";

export default function SubmitButton(){
  return (
    <div className="flex items-center justify-center">
      <button 
        className="bg-(--main-green-dark) text-white px-7 py-5 rounded-xl cursor-pointer ease-in-out duration-300 transition-all hover:scale-102 hover:shadow-xl active:scale-99"
      >
        <div className="flex items-center justify-center gap-3">
          <SendIcon />
          <p className="font-semibold text-slate-100">Enviar Formulário</p>
        </div>
      </button>
    </div>
  )
}