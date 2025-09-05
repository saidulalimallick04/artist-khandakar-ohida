"use client"

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Paintbrush } from "lucide-react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      const cursorStyle = computedStyle.getPropertyValue("cursor");
      
      const isInteractive = cursorStyle === "pointer" || 
                            target.tagName === 'A' || 
                            target.tagName === 'BUTTON' ||
                            target.closest('a') ||
                            target.closest('button');

      setIsPointer(isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[9999]",
        "transition-transform duration-200 ease-out"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-10%, -20%)`,
      }}
    >
      <Paintbrush className={cn(
        "transition-all duration-300 ease-out text-accent",
        isClicking ? "scale-125 -rotate-12" : "scale-100",
        isPointer ? "h-8 w-8 drop-shadow-[0_0_8px] drop-shadow-accent" : "h-7 w-7 drop-shadow-[0_0_4px] drop-shadow-accent/50",
      )} />
    </div>
  );
}
