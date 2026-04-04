import {
  MicroscopeIcon,
  AlertIcon,
  CheckCircleIcon,
  InfoIcon,
  BiohazardIcon,
  ClockIcon,
  DocumentIcon,
  SendIcon,
  SettingsIcon,
  UserIcon,
  WifiIcon,
  EmergencyIcon
} from './icons';

export default function IconShowcase() {
  const icons = [
    { name: 'MicroscopeIcon', component: MicroscopeIcon },
    { name: 'AlertIcon', component: AlertIcon },
    { name: 'CheckCircleIcon', component: CheckCircleIcon },
    { name: 'InfoIcon', component: InfoIcon },
    { name: 'BiohazardIcon', component: BiohazardIcon },
    { name: 'ClockIcon', component: ClockIcon },
    { name: 'DocumentIcon', component: DocumentIcon },
    { name: 'SendIcon', component: SendIcon },
    { name: 'SettingsIcon', component: SettingsIcon },
    { name: 'UserIcon', component: UserIcon },
    { name: 'WifiIcon', component: WifiIcon },
    { name: 'EmergencyIcon', component: EmergencyIcon },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-emerald-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Ícones como Componentes
      </h2>

      <p className="text-gray-600 mb-8">
        Todos os ícones agora estão disponíveis como componentes React individuais.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {icons.map(({ name, component: IconComponent }) => (
          <div key={name} className="group">
            <div className="bg-gray-50 hover:bg-emerald-50 border-2 border-gray-200 hover:border-emerald-300 rounded-lg p-6 text-center transition-all duration-200 group-hover:shadow-md">
              <div className="flex justify-center mb-3 text-gray-600 group-hover:text-emerald-600 transition-colors duration-200">
                <IconComponent />
              </div>
              <h3 className="font-mono text-xs text-gray-700 break-all">{name}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-3">Como usar</h3>
        <div className="space-y-3 text-sm text-blue-700">
          <div className="bg-white border border-blue-200 rounded p-3 font-mono text-xs">
            <div className="text-gray-600 mb-1">// Importar ícone específico:</div>
            <div>import {'{ MicroscopeIcon }'} from './components/icons';</div>
            <div className="mt-2 text-gray-600">// Usar no JSX:</div>
            <div>&lt;MicroscopeIcon className="w-8 h-8 text-blue-500" /&gt;</div>
          </div>
          <div className="bg-white border border-blue-200 rounded p-3 font-mono text-xs">
            <div className="text-gray-600 mb-1">// Importar múltiplos ícones:</div>
            <div>import {'{ AlertIcon, InfoIcon, ClockIcon }'} from './components/icons';</div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-3">Customização</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-medium text-green-700 mb-2">Tamanhos diferentes:</h4>
            <div className="flex items-center gap-3">
              <MicroscopeIcon className="w-4 h-4 text-green-600" />
              <MicroscopeIcon className="w-6 h-6 text-green-600" />
              <MicroscopeIcon className="w-8 h-8 text-green-600" />
              <MicroscopeIcon className="w-12 h-12 text-green-600" />
            </div>
          </div>
          <div>
            <h4 className="font-medium text-green-700 mb-2">Cores diferentes:</h4>
            <div className="flex items-center gap-3">
              <AlertIcon className="w-6 h-6 text-red-500" />
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <InfoIcon className="w-6 h-6 text-blue-500" />
              <BiohazardIcon className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}