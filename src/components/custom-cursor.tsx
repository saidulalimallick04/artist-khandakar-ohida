"use client"

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  
  useEffect(() => {
    if (cursorDotRef.current && cursorCircleRef.current) {
      if (x !== null && y !== null) {
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        cursorCircleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    }
  }, [x, y]);

  return (
    <>
      <div
        ref={cursorDotRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-[width,height] duration-200",
           isPointer && "h-0 w-0"
        )}
      />
      <div
        ref={cursorCircleRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent transition-all duration-300 ease-out",
          isPointer && "h-14 w-14 scale-125 border-accent/50",
          isClicking && "h-12 w-12 scale-110"
        )}
      />
    </>
  );
}
