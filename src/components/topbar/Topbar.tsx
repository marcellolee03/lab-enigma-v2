import AskHelpButton from "./AskHelpButton";
import Timer from "./Timer";
import { BiohazardIcon } from "../icons";

export default function Topbar() {
  return (
    <div className="fixed top-0  inset-x-0 z-50 mx-50">
      {/* Main topbar container */}
      <div className="bg-gradient-to-b  from-white via-gray-50 to-gray-100 border-b-2 border-emerald-200/30 shadow-2xl shadow-gray-300/50 backdrop-blur-sm">
        {/* Header bar with branding */}
        <div className="px-8 py-2 border-b border-gray-200/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-md flex items-center justify-center shadow-md">
                <BiohazardIcon className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-sm font-bold text-gray-800 tracking-tight">
                  Instituto Nacional de Biosseguranca
                </h1>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider leading-3">
                  Sistema de Contenção Biológica
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] text-gray-600 font-medium">Sistema Ativo</span>
              </div>
              <div className="text-[10px] text-gray-500">
                Nível: <span className="font-semibold text-emerald-600">BSL-4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main controls area */}
        <div className="px-8 py-4">
          <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            <Timer />
            <AskHelpButton />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div>
      </div>
    </div>
  )
}