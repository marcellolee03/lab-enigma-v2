import React, { useState, useEffect } from "react";

interface DelayComponentProps {
  children: React.ReactNode,
  wait: number
}

export function DelayComponent({ children, wait }: DelayComponentProps) {
  const [isShown, setIsShown] = useState<boolean>(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsShown(true), wait);
    return () => clearTimeout(timer)
  }, [wait]);
  
  return isShown ? children : null
}