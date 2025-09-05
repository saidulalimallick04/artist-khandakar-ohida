"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HorizontalScrollProps {
  children: ReactNode;
  className?: string;
  items: any[];
}

export function HorizontalScroll({ children, className, items }: HorizontalScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1); // -1 for precision issues
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScrollability();
      el.addEventListener("scroll", checkScrollability);
      window.addEventListener("resize", checkScrollability);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScrollability);
        window.removeEventListener("resize", checkScrollability);
      }
    };
  }, [items]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (el) {
      const scrollAmount = el.clientWidth * 0.8;
      el.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  
  if (items.length === 0) {
    return null;
  }

  return (
    <div className={cn("relative group", className)}>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto pb-4 px-[max(calc((100%-1024px)/2),_1rem)]"
      >
        {children}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-[max(calc((100%-1088px)/2),_0.5rem)] pointer-events-none">
         <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className={cn(
              "rounded-full pointer-events-auto transition-opacity opacity-0 group-hover:opacity-100",
              !canScrollLeft && "opacity-0 invisible"
            )}
            aria-label="Scroll left"
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className={cn(
              "rounded-full pointer-events-auto transition-opacity opacity-0 group-hover:opacity-100",
               !canScrollRight && "opacity-0 invisible"
            )}
            aria-label="Scroll right"
          >
            <ChevronRight />
          </Button>
      </div>
    </div>
  );
}
