
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function SideNav() {
  const pathname = usePathname();
  const showNavs = pathname === '/';

  return (
    <AnimatePresence>
      {showNavs && (
        <TooltipProvider>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-1/2 z-50 flex w-full -translate-y-1/2 justify-between px-4 pointer-events-none"
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon" className="rounded-full pointer-events-auto">
                  <Link href="/studio">
                    <ArrowLeft />
                    <span className="sr-only">KO Studio</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>KO Studio</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild variant="outline" size="icon" className="rounded-full pointer-events-auto">
                  <Link href="/journey">
                    <ArrowRight />
                    <span className="sr-only">Life Journey</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Life Journey</p>
              </TooltipContent>
            </Tooltip>
          </motion.div>
        </TooltipProvider>
      )}
    </AnimatePresence>
  );
}
