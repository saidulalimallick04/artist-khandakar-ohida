"use client"

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Feather } from 'lucide-react';
import { useMousePosition } from "@/hooks/use-mouse-position";

const TRAIL_LENGTH = 15;
const IDLE_TIMEOUT = 200; // ms

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isIdle, setIsIdle] = useState(true);
  const [trails, setTrails] = useState<{ x: number; y: number }[]>([]);
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

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

      setIsIdle(false);
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
      idleTimer.current = setTimeout(() => setIsIdle(true), IDLE_TIMEOUT);
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
      if (idleTimer.current) {
        clearTimeout(idleTimer.current);
      }
    };
  }, []);

  useEffect(() => {
    if (x === null || y === null) return;
    
    const newTrails = [...trails, { x, y }];
    if (newTrails.length > TRAIL_LENGTH) {
      newTrails.shift();
    }
    setTrails(newTrails);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [x, y]);

  // Always render the main cursor icon (the last one in the trail)
  const mainCursor = trails.length > 0 ? trails[trails.length - 1] : null;

  return (
    <>
      {/* Render trails only when not idle */}
      {!isIdle && trails.slice(0, -1).map((trail, index) => (
        <Feather
          key={`trail-${index}`}
          className="pointer-events-none fixed z-[9999] text-accent transition-opacity duration-300 ease-out h-6 w-6"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: 'translate(-10%, -20%)',
            opacity: (index / TRAIL_LENGTH) * 0.5,
          }}
        />
      ))}

      {/* Always render the main cursor icon */}
      {mainCursor && (
         <Feather
            key="main-cursor"
            className={cn(
              "pointer-events-none fixed z-[9999] text-accent transition-all duration-300 ease-out",
              isPointer ? "h-8 w-8 drop-shadow-[0_0_8px] drop-shadow-accent" : "h-7 w-7 drop-shadow-[0_0_4px] drop-shadow-accent/50",
              isIdle && "opacity-0" // Fade out the main cursor when it appears if idle
            )}
            style={{
              left: `${mainCursor.x}px`,
              top: `${mainCursor.y}px`,
              transform: `translate(-10%, -20%) ${isClicking ? 'scale(1.25) rotate(-12deg)' : ''}`,
               opacity: isIdle ? 0 : 1, // Control opacity for fade-in/out
            }}
          />
      )}
      
       {/* A separate, always-visible cursor when idle */}
       {mainCursor && isIdle && (
         <Feather
            key="idle-cursor"
            className={cn(
              "pointer-events-none fixed z-[9999] text-accent transition-opacity duration-300 ease-out",
               isPointer ? "h-8 w-8 drop-shadow-[0_0_8px] drop-shadow-accent" : "h-7 w-7 drop-shadow-[0_0_4px] drop-shadow-accent/50"
            )}
            style={{
              left: `${mainCursor.x}px`,
              top: `${mainCursor.y}px`,
              transform: `translate(-10%, -20%) ${isClicking ? 'scale(1.25) rotate(-12deg)' : ''}`,
            }}
          />
       )}
    </>
  );
}
