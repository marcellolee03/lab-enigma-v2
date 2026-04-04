export default function Components() {
  return (
    <div className="space-y-8">
      {/* Botões */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.122 2.122" />
            </svg>
          </div>
          Botões Médicos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Botões Primários */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Botões Primários</h3>
            <div className="space-y-4">
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Enviar Relatório para Central
              </button>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Confirmar Análise
              </button>
            </div>
          </div>

          {/* Botões Secundários */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Botões Secundários</h3>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg">
                Contatar Suporte Técnico
              </button>
              <button className="w-full border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Salvar Rascunho
              </button>
            </div>
          </div>

          {/* Botões de Estado */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Estados de Urgência</h3>
            <div className="space-y-4">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md">
                ⚠️ Situação Urgente
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md animate-pulse">
                🚨 EMERGÊNCIA BIOLÓGICA
              </button>
            </div>
          </div>

          {/* Botões Pequenos */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Botões Auxiliares</h3>
            <div className="space-y-4">
              <div className="flex gap-2">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Aprovar
                </button>
                <button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Pendente
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  Rejeitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alertas */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          Sistema de Alertas
        </h2>

        <div className="space-y-6">
          {/* Sucesso */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-emerald-800 font-medium">
                  Análise concluída com sucesso. Relatório enviado para a Central Nacional de Biosegurança.
                </p>
              </div>
            </div>
          </div>

          {/* Informação */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800 font-medium">
                  Lembre-se de verificar os protocolos de biosegurança antes de manusear amostras.
                </p>
              </div>
            </div>
          </div>

          {/* Atenção */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-800 font-medium">
                  ATENÇÃO: Prazo para envio do relatório expira em 15 minutos. Finalize o preenchimento rapidamente.
                </p>
              </div>
            </div>
          </div>

          {/* Crítico */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-800 font-bold">
                  CRÍTICO: Detectada possível contaminação de alta periculosidade. Isole a área imediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inputs e Formulários */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          Campos de Entrada
        </h2>

        <div className="space-y-6">
          {/* Input padrão */}
          <div>
            <label className="block text-gray-800 font-semibold text-sm mb-2">
              Identificação da Amostra
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-colors duration-200"
              placeholder="Ex: AMO-2026-0404-001"
            />
            <p className="text-xs text-gray-600 mt-1">Código único para rastreabilidade</p>
          </div>

          {/* Select */}
          <div>
            <label className="block text-gray-800 font-semibold text-sm mb-2">
              Nível de Biosegurança
            </label>
            <select className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-colors duration-200">
              <option value="">Selecione o nível...</option>
              <option value="BSL-1">BSL-1 - Risco mínimo</option>
              <option value="BSL-2">BSL-2 - Risco moderado</option>
              <option value="BSL-3">BSL-3 - Risco elevado</option>
              <option value="BSL-4">BSL-4 - Risco extremo</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-gray-800 font-semibold text-sm mb-2">
              Observações Adicionais
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 border-2 border-emerald-200 rounded-lg focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100 transition-colors duration-200"
              placeholder="Descreva características relevantes observadas durante a análise..."
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="protocol-confirmation"
              className="mt-1 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded"
            />
            <label htmlFor="protocol-confirmation" className="text-sm text-gray-700">
              Confirmo que todos os protocolos de segurança foram seguidos durante a coleta e análise da amostra,
              e que as informações fornecidas são precisas e verificadas.
            </label>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-3V7a2 2 0 00-2-2H7a2 2 0 00-2 2v1m14 3v6a2 2 0 01-2 2H7a2 2 0 01-2-2v-6m14-3H5" />
            </svg>
          </div>
          Cards Informativos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card de Status */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-emerald-800">Sistema Ativo</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">Online</span>
              </div>
            </div>
            <p className="text-emerald-700 text-sm">
              Todos os sistemas de biosegurança estão operacionais e monitorando continuamente.
            </p>
          </div>

          {/* Card de Informação */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-blue-800">Protocolo Ativo</h3>
            </div>
            <p className="text-blue-700 text-sm">
              Protocolo BIO-2026 em vigor. Consulte o manual para procedimentos específicos.
            </p>
          </div>

          {/* Card de Alerta */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-amber-800">Prazo Urgente</h3>
            </div>
            <p className="text-amber-700 text-sm">
              Relatórios devem ser enviados em até 24 horas após a coleta da amostra.
            </p>
          </div>

          {/* Card Crítico */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-red-800">Alerta Crítico</h3>
            </div>
            <p className="text-red-700 text-sm font-medium">
              Detectada anomalia no laboratório. Evacue a área e contate emergência.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}