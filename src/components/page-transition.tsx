
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const variants = {
  initialRight: {
    x: '100vw',
    opacity: 0,
  },
  initialLeft: {
    x: '-100vw',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exitRight: {
    x: '-100vw',
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
  exitLeft: {
    x: '100vw',
    opacity: 0,
    transition: { duration: 0.6, ease: 'easeInOut' },
  },
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const getAnimation = () => {
    switch (pathname) {
      case '/studio':
        return { initial: 'initialRight', exit: 'exitRight' };
      case '/journey':
        return { initial: 'initialLeft', exit: 'exitLeft' };
      default:
        return { initial: 'initialRight', exit: 'exitRight' };
    }
  };

  const { initial, exit } = getAnimation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={variants}
        initial={initial}
        animate="animate"
        exit={exit}
        className="overflow-x-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
