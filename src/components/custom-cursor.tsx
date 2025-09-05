"use client"

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { Feather } from "lucide-react";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const cursorIconRef = useRef<HTMLDivElement>(null);
  const cursorCircleRef = useRef<HTMLDivElement>(null);

  const previousCirclePos = useRef({ x: 0, y: 0 });

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
    const iconEl = cursorIconRef.current;
    const circleEl = cursorCircleRef.current;
    
    if (!iconEl || !circleEl || x === null || y === null) return;
    
    let animationFrameId: number;

    const animate = () => {
      // Move the icon directly to the mouse position
      iconEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      // Smoothly move the circle towards the mouse position (lerping)
      const currentX = previousCirclePos.current.x;
      const currentY = previousCirclePos.current.y;
      
      const dx = x - currentX;
      const dy = y - currentY;
      
      const newX = currentX + dx * 0.15; // The 0.15 is the "smoothness" factor
      const newY = currentY + dy * 0.15;
      
      circleEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
      
      previousCirclePos.current = { x: newX, y: newY };
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize positions if they are at 0,0
    if(previousCirclePos.current.x === 0 && previousCirclePos.current.y === 0) {
      previousCirclePos.current = { x, y };
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [x, y]);

  return (
    <>
      <div
        ref={cursorIconRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2 text-accent"
        )}
      >
        <Feather className="h-5 w-5" />
      </div>
      <div
        ref={cursorCircleRef}
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent transition-transform duration-300 ease-out",
          isPointer ? "h-14 w-14 scale-125 border-accent/50" : "",
          isClicking ? "h-12 w-12 scale-110" : ""
        )}
      />
    </>
  );
}
