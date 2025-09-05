
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const variants = {
  initial: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute',
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 30,
    },
  },
  exit: (direction: 'left' | 'right') => ({
    x: direction === 'right' ? '-100%' : '100%',
    opacity: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 30,
    },
  }),
};

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  
  // Determine animation direction based on route
  // A more sophisticated logic can be implemented if there are more nested routes
  const direction = pathname === '/journey' ? 'right' : 'left';

  return (
    <AnimatePresence initial={false} mode="wait" custom={direction}>
        <motion.div
            key={pathname}
            custom={direction}
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
