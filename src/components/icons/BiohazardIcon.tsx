interface BiohazardIconProps {
  className?: string;
}

export default function BiohazardIcon({ className = "w-6 h-6" }: BiohazardIconProps) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12,2.5A2,2 0 0,1 14,4.5A2,2 0 0,1 12,6.5A2,2 0 0,1 10,4.5A2,2 0 0,1 12,2.5M8.5,7A4.5,4.5 0 0,1 13,11.5A1,1 0 0,1 12,12.5A1,1 0 0,1 11,11.5A4.5,4.5 0 0,1 15.5,7A7.5,7.5 0 0,0 12,10A7.5,7.5 0 0,0 8.5,7M12,13.5A2,2 0 0,1 14,15.5A2,2 0 0,1 12,17.5A2,2 0 0,1 10,15.5A2,2 0 0,1 12,13.5M17,20.5A2,2 0 0,1 15,18.5A2,2 0 0,1 17,16.5A2,2 0 0,1 19,18.5A2,2 0 0,1 17,20.5M7,20.5A2,2 0 0,1 5,18.5A2,2 0 0,1 7,16.5A2,2 0 0,1 9,18.5A2,2 0 0,1 7,20.5Z" />
    </svg>
  );
}