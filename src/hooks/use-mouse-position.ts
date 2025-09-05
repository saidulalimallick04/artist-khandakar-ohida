"use client"

import { useState, useEffect } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState({ x: null as number | null, y: null as number | null });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}
