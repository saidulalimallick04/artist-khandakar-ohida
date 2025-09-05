
"use client";

import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowLeft, ArrowUp, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export function JourneyBottomNav() {
    const router = useRouter();

    const scrollTo = (position: 'top' | 'bottom') => {
        const element = document.getElementById(position);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

  return (
    <TooltipProvider>
      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-background/50 p-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => router.back()}>
                    <ArrowLeft className="h-5 w-5" />
                    <span className="sr-only">Return</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Return</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => scrollTo('top')}>
                    <ArrowUp className="h-5 w-5" />
                    <span className="sr-only">Scroll to Top</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Scroll to Top</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => scrollTo('bottom')}>
                    <ArrowDown className="h-5 w-5" />
                    <span className="sr-only">Scroll to Bottom</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>Scroll to Bottom</p>
              </TooltipContent>
            </Tooltip>
        </div>
      </nav>
    </TooltipProvider>
  );
}
