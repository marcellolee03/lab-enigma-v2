interface ColorSwatch {
  name: string;
  hex: string;
  tailwind: string;
  usage: string;
}

const colors: ColorSwatch[] = [
  {
    name: "Branco Medical",
    hex: "#FFFFFF",
    tailwind: "bg-white",
    usage: "Fundos principais, cards limpos"
  },
  {
    name: "Verde Hospital",
    hex: "#10B981",
    tailwind: "bg-emerald-500",
    usage: "Botões principais, indicadores ativos"
  },
  {
    name: "Verde Claro",
    hex: "#DCFCE7",
    tailwind: "bg-green-100",
    usage: "Fundos secundários, hover states"
  },
  {
    name: "Verde Escuro",
    hex: "#065F46",
    tailwind: "bg-green-800",
    usage: "Textos importantes, cabeçalhos"
  },
  {
    name: "Azul Medical",
    hex: "#3B82F6",
    tailwind: "bg-blue-500",
    usage: "Informações, botões secundários"
  },
  {
    name: "Amarelo Alerta",
    hex: "#F59E0B",
    tailwind: "bg-amber-500",
    usage: "Avisos, urgência moderada"
  },
  {
    name: "Vermelho Crítico",
    hex: "#EF4444",
    tailwind: "bg-red-500",
    usage: "Alertas críticos, emergências"
  },
  {
    name: "Cinza Texto",
    hex: "#374151",
    tailwind: "bg-gray-700",
    usage: "Textos secundários, labels"
  },
  {
    name: "Fundo Neutro",
    hex: "#F8FAFC",
    tailwind: "bg-slate-50",
    usage: "Background da aplicação"
  }
];

export default function ColorPalette() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        Paleta de Cores Médica
      </h2>

      <p className="text-gray-600 mb-8">
        Paleta desenvolvida para ambientes hospitalares e científicos, priorizando clareza, confiança e profissionalismo.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colors.map((color, index) => (
          <div key={index} className="group">
            <div className={`w-full h-20 ${color.tailwind} rounded-t-lg border-2 border-gray-200 group-hover:scale-105 transition-transform duration-200`}></div>
            <div className="bg-gray-50 p-4 rounded-b-lg border-2 border-t-0 border-gray-200">
              <h3 className="font-semibold text-gray-800 text-sm">{color.name}</h3>
              <p className="text-xs text-gray-600 font-mono">{color.hex}</p>
              <p className="text-xs text-emerald-700 mt-1">{color.tailwind}</p>
              <p className="text-xs text-gray-500 mt-2">{color.usage}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="font-semibold text-emerald-800 mb-3">Princípios de Uso</h3>
        <ul className="space-y-2 text-sm text-emerald-700">
          <li>• <strong>Verde Hospital:</strong> Cor primária para ações importantes e indicadores positivos</li>
          <li>• <strong>Branco Medical:</strong> Base para criar sensação de limpeza e esterilização</li>
          <li>• <strong>Amarelo/Vermelho:</strong> Apenas para alertas graduais (atenção → urgente → crítico)</li>
          <li>• <strong>Alto contraste:</strong> Sempre garantir legibilidade para ambientes de alta pressão</li>
        </ul>
      </div>
    </div>
  )
}