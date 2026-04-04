import { useState } from "react";
import { UserIcon, AlertIcon } from "../icons";

export default function AskHelpButton() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const handleHelpRequest = async () => {
    setIsRequesting(true);

    // Simular requisição à central
    setTimeout(() => {
      setIsRequesting(false);
      setShowConfirmation(false);
      // Aqui você implementaria a lógica real de deduzir tempo e mostrar dica
      alert("Dica recebida da Central INB! 3 minutos deduzidos do cronômetro.");
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className="bg-white rounded-xl border-2 border-amber-300 p-3 shadow-lg">
        <div className="text-center mb-3">
          <div className="flex justify-center mb-1">
            <AlertIcon className="w-5 h-5 text-amber-600" />
          </div>
          <h3 className="font-semibold text-gray-800 text-xs">Confirmar Solicitação</h3>
          <p className="text-[10px] text-gray-600 mt-1">
            3 minutos serão deduzidos do cronômetro
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleHelpRequest}
            disabled={isRequesting}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-[10px] font-medium py-1.5 px-2 rounded-md hover:from-blue-600 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRequesting ? (
              <span className="flex items-center justify-center gap-1">
                <div className="w-2.5 h-2.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Conectando...
              </span>
            ) : (
              "Confirmar"
            )}
          </button>
          <button
            onClick={() => setShowConfirmation(false)}
            disabled={isRequesting}
            className="flex-1 bg-gray-300 text-gray-700 text-[10px] font-medium py-1.5 px-2 rounded-md hover:bg-gray-400 transition-all duration-200 disabled:opacity-50"
          >
            Cancelar
          </button>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setShowConfirmation(true)}
      className="group bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-xl px-4 py-3 font-medium shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30"
    >
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <UserIcon className="w-4 h-4 text-blue-100 group-hover:text-white transition-colors" />
          <span className="text-xs font-semibold tracking-wide">
            CENTRAL INB
          </span>
        </div>

        <div className="text-center">
          <div className="text-[10px] uppercase tracking-wider opacity-90">
            Solicitar Auxílio
          </div>
          <div className="text-[8px] opacity-75 leading-tight">
            Instituto Nacional de Biossegurança
          </div>
        </div>

      </div>
    </button>
  );
}