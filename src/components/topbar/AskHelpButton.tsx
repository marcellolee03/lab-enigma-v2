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
      <div className="bg-white rounded-2xl border-2 border-amber-300 p-4 shadow-lg">
        <div className="text-center mb-4">
          <div className="flex justify-center mb-2">
            <AlertIcon className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="font-semibold text-gray-800 text-sm">Confirmar Solicitação</h3>
          <p className="text-xs text-gray-600 mt-1">
            3 minutos serão deduzidos do cronômetro
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleHelpRequest}
            disabled={isRequesting}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRequesting ? (
              <span className="flex items-center justify-center gap-1">
                <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Conectando...
              </span>
            ) : (
              "Confirmar"
            )}
          </button>
          <button
            onClick={() => setShowConfirmation(false)}
            disabled={isRequesting}
            className="flex-1 bg-gray-300 text-gray-700 text-xs font-medium py-2 px-3 rounded-lg hover:bg-gray-400 transition-all duration-200 disabled:opacity-50"
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
      className="group bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-2xl px-6 py-4 font-medium shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-blue-400/30"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 mb-1">
          <UserIcon className="w-5 h-5 text-blue-100 group-hover:text-white transition-colors" />
          <span className="text-sm font-semibold tracking-wide">
            CENTRAL INB
          </span>
        </div>

        <div className="text-center">
          <div className="text-xs uppercase tracking-wider opacity-90 mb-1">
            Solicitar Auxílio
          </div>
          <div className="text-[10px] opacity-75 leading-tight">
            Instituto Nacional de Biossegurança
          </div>
        </div>

        {/* Indicador de disponibilidade */}
        <div className="flex items-center gap-1 mt-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-[9px] opacity-80">Online 24/7</span>
        </div>
      </div>
    </button>
  );
}