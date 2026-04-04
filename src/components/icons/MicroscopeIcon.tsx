interface MicroscopeIconProps {
  className?: string;
}

export default function MicroscopeIcon({ className = "w-6 h-6" }: MicroscopeIconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      {/* Base do microscópio */}
      <rect x="3" y="19" width="18" height="2" rx="1"/>

      {/* Braço principal */}
      <rect x="11" y="8" width="2" height="11" rx="1"/>

      {/* Ocular */}
      <circle cx="12" cy="6" r="2"/>
      <rect x="11" y="4" width="2" height="3" rx="1"/>

      {/* Braço diagonal */}
      <path d="M12 8 L16 12 L17 11 L13 7 Z"/>

      {/* Objetivas */}
      <circle cx="16" cy="13" r="1.5"/>
      <circle cx="16" cy="15" r="1"/>

      {/* Platina */}
      <rect x="14" y="16" width="5" height="1" rx="0.5"/>

      {/* Botões de foco */}
      <circle cx="9" cy="12" r="1"/>
      <circle cx="9" cy="14" r="0.8"/>

      {/* Suporte da platina */}
      <rect x="15" y="17" width="1" height="2" rx="0.5"/>
    </svg>
  );
}