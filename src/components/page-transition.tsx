
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

type Direction = 'left' | 'right' | 'none';

const variants = {
  initial: (direction: Direction) => ({
    x: direction === 'right' ? '100%' : direction === 'left' ? '-100%' : '0',
    opacity: 0,
    position: 'absolute',
    width: '100%',
    transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 }
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 }
  },
  exit: (direction: Direction) => ({
    x: direction === 'right' ? '-100%' : direction === 'left' ? '100%' : '0',
    opacity: 0,
    position: 'absolute',
    width: '100%',
    transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 }
  }),
};

const getDirection = (path: string): Direction => {
    if (path === '/journey') return 'right';
    if (path === '/studio') return 'left';
    return 'none';
}

let lastPath = '';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const direction = getDirection(pathname);
  const lastDirection = getDirection(lastPath);
  lastPath = pathname;

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
            key={pathname}
            custom={direction !== 'none' ? direction : lastDirection}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
        >
            {children}
        </motion.div>
    </AnimatePresence>
  );
};
