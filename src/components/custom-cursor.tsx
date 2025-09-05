"use client"

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[9999]",
        "transition-transform duration-200 ease-out"
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-50%, -50%)`,
      }}
    >
      <div
        className={cn(
          "rounded-full transition-all duration-300 ease-out",
          isClicking ? "scale-125 h-10 w-10 bg-primary/30" : "h-8 w-8",
          isPointer ? "h-12 w-12 bg-primary/25 shadow-[0_0_40px_20px] shadow-primary/25" : "bg-primary/20 shadow-[0_0_30px_15px] shadow-primary/20",
          "backdrop-blur-sm"
        )}
      />
    </div>
  );
}
