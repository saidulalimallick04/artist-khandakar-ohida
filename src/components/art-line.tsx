"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ArtLine() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = (position / height) * 100;
    setScrollPosition(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border/50 z-50 hidden md:block">
      <div 
        className="w-full bg-accent transition-all duration-200 ease-out"
        style={{ height: `${scrollPosition}%` }}
      />
    </div>
  );
}
