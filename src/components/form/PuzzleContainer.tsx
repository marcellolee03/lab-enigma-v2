import type { Puzzle } from "../../models/Puzzle"
import { MicroscopeIcon, DocumentIcon } from "../icons"

interface PuzzleContainerProps {
  puzzle: Puzzle
  name: string
}

export default function PuzzleContainer({ puzzle, name }: PuzzleContainerProps) {
  return (
    <div className="group relative bg-gradient-to-br from-white via-emerald-50 to-emerald-100 hover:from-emerald-50/50 hover:via-emerald-100/70 hover:to-emerald-200/60 rounded-2xl shadow-xl hover:shadow-2xl border-2 border-emerald-200/40 hover:border-emerald-300/60 overflow-hidden transition-all duration-300 hover:scale-[1.01] cursor-pointer">
      {/* Header with medical styling */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 group-hover:from-emerald-600 group-hover:to-emerald-700 px-6 py-3 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 group-hover:bg-white/30 rounded-lg flex items-center justify-center backdrop-blur-sm transition-all duration-300">
            <MicroscopeIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wide">
              Análise Laboratorial
            </h3>
            <p className="text-emerald-100 text-xs opacity-90">
              Protocolo de Identificação Biológica
            </p>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="p-8">
        {/* Question section */}
        <div className="mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <DocumentIcon className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-emerald-800 font-semibold text-sm mb-2 uppercase tracking-wider">
                Questão 
              </h4>
              <p className="text-gray-700 leading-relaxed font-medium">
                {puzzle.question}
              </p>
            </div>
          </div>
        </div>

        {/* Input section */}
        <div className="space-y-3">
          <label className="block">
            <span className="text-emerald-700 font-medium text-sm uppercase tracking-wider mb-2 block">
              Resposta:
            </span>
            <div className="relative">
              <input
                name={name}
                className="w-full bg-white group-hover:bg-emerald-50/30 border-2 border-emerald-200 group-hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 px-4 py-3 rounded-xl text-gray-800 placeholder-gray-400 transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-lg"
                placeholder="Digite sua análise aqui..."
              />
              {/* Input accent line */}
            </div>
          </label>
        </div>

      </div>

      {/* Subtle medical pattern overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300">
        <div className="w-full h-full bg-gradient-to-br from-emerald-600 to-transparent transform rotate-45 group-hover:scale-110 transition-transform duration-500"></div>
      </div>
    </div>
  )
}