"use client"

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="#" className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className={cn(
        "font-headline text-5xl md:text-7xl lg:text-8xl transition-all duration-1000 ease-out",
        isMounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
      )}>
        Saks Afridi
      </h1>
      <p className={cn(
        "mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl transition-all duration-1000 delay-300 ease-out",
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        An artist's journey through pixels and passion. Exploring the intersection of digital art, design, and technology.
      </p>
    </section>
  );
}
