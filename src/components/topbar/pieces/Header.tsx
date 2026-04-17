import main_logo from "../../../assets/main_logo.png"

export default function Header(){
  
  return (
    <div className="flex mb-3 border-b border-slate-300 pb-2">
      <div className="flex gap-2">
        <img src={main_logo} className="w-auto h-10" />
        <div>
          <p className="text-slate-900 text-sm">Instituto Nacional de Contenção e Biossegurança</p>
          <p className="text-slate-400 text-xs">SISTEMA DE ANÁLISE VIA FORMULÁRIO</p>
        </div>
      </div>
    </div>
  )
}