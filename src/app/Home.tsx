import { useNavigate } from "react-router-dom";

import main_logo from "../assets/main_logo.png"

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col gap-5 h-screen justify-center items-center">
        <div className="flex gap-5 flex-col pb-5 border border-slate-300 rounded-xl">
          
          <div className="flex gap-2 pl-5 pr-50 border-b border-slate-300 py-5">
            <img src={main_logo} className="w-auto h-10" />
            <div>
              <p className="text-slate-900 text-sm">Instituto Nacional de Contenção e Biossegurança</p>
              <p className="text-slate-400 text-xs">RECEBIMENTO DE FORMULÁRIO</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-5">
            <div className="rounded-xl bg-(--main-green-light) px-10 text-left font-semibold py-5">
              <p>Prioridade: 0</p>
              <p>Remetente: Dr. Rafael Martins</p>
            </div>
            
            <div className="relative w-64 h-16">
              <div className="bg-(--main-green-light) w-full h-full py-4 px-4 animate-ping rounded-xl " />
              <button
                onClick={() => navigate("/app")}
                className="absolute top-0 left-0 w-full h-full bg-(--main-green) text-white font-bold py-4 px-5 rounded-xl cursor-pointer ease-in-out duration-300 transition-all hover:scale-102 hover:shadow-xl active:scale-99"
              >
                Abrir Formulários
              </button>
            </div>
          </div>
          
          
        </div>
      </div>
      
    </>
  );
}
