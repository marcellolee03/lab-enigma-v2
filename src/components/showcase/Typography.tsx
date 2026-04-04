export default function Typography() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
          </svg>
        </div>
        Tipografia Médica
      </h2>

      <div className="space-y-8">
        {/* Fonte Principal */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Fonte Principal: Inter</h3>
          <p className="text-gray-600 mb-4">
            Fonte escolhida por sua excelente legibilidade em interfaces digitais e caráter profissional.
          </p>

          <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
            <div>
              <span className="text-xs text-gray-500 font-mono">text-3xl font-bold</span>
              <h1 className="text-3xl font-bold text-gray-800">Central Nacional de Biosegurança</h1>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-2xl font-bold</span>
              <h2 className="text-2xl font-bold text-gray-800">Relatório de Análise Microbiológica</h2>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-xl font-semibold</span>
              <h3 className="text-xl font-semibold text-gray-800">Seção de Resultados</h3>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-lg font-medium</span>
              <h4 className="text-lg font-medium text-gray-700">Subsecção Importante</h4>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-base (padrão)</span>
              <p className="text-base text-gray-600">
                Texto padrão para leitura contínua. Esta fonte garante alta legibilidade mesmo em
                situações de stress ou pressa, essencial para ambientes médicos.
              </p>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-sm</span>
              <p className="text-sm text-gray-600">
                Texto secundário para metadados, instruções auxiliares ou informações complementares.
              </p>
            </div>

            <div>
              <span className="text-xs text-gray-500 font-mono">text-xs</span>
              <p className="text-xs text-gray-500">
                Texto para disclaimers, códigos técnicos ou informações terciárias.
              </p>
            </div>
          </div>
        </div>

        {/* Hierarquia de Cores */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Hierarquia de Cores do Texto</h3>

          <div className="space-y-3 bg-gray-50 p-6 rounded-lg">
            <div className="text-gray-800 font-bold">text-gray-800 - Títulos principais e informações críticas</div>
            <div className="text-gray-700 font-semibold">text-gray-700 - Subtítulos e informações importantes</div>
            <div className="text-gray-600">text-gray-600 - Texto padrão para leitura</div>
            <div className="text-gray-500">text-gray-500 - Texto secundário e metadados</div>
            <div className="text-emerald-700 font-medium">text-emerald-700 - Informações médicas positivas</div>
            <div className="text-blue-700 font-medium">text-blue-700 - Informações técnicas</div>
            <div className="text-amber-700 font-medium">text-amber-700 - Avisos e atenção</div>
            <div className="text-red-700 font-bold">text-red-700 - Alertas críticos</div>
          </div>
        </div>

        {/* Exemplos de Uso */}
        <div>
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Exemplos Contextualizados</h3>

          <div className="space-y-6">
            {/* Exemplo 1: Cabeçalho */}
            <div className="bg-white border-2 border-emerald-200 rounded-lg p-6">
              <h4 className="text-lg font-bold text-gray-800 mb-2">URGENTE: Análise Bacteriológica</h4>
              <p className="text-sm text-emerald-700 font-medium">Protocolo: BIO-2026-0404 | Status: Em Análise</p>
              <p className="text-gray-600 mt-3">
                Amostra coletada apresenta características atípicas que requerem análise imediata
                pela equipe de biosegurança especializada.
              </p>
              <p className="text-xs text-gray-500 mt-3">
                Relatório gerado automaticamente pelo sistema às 14:23 - Código de Rastreamento: BRS-7749
              </p>
            </div>

            {/* Exemplo 2: Formulário */}
            <div className="bg-green-50 border border-emerald-200 rounded-lg p-6">
              <label className="block text-gray-800 font-semibold text-sm mb-2">
                Morfologia celular observada:
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg text-gray-700"
                placeholder="Ex: cocos em cadeia, bacilos isolados..."
              />
              <p className="text-xs text-gray-600 mt-2 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Campo obrigatório - Dados utilizados para classificação taxonômica
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}