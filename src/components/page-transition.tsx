
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { Stairs } from './stairs';

export const PageTransition = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <div className="fixed top-0 left-0 w-screen h-screen bg-primary pointer-events-none z-[100]" />
            <Stairs />
            {children}
        </div>
    </AnimatePresence>
  );
};
