
'use client';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
};

const reverseIndex = (index: number, total: number = 6) => total - index - 1;

export function Stairs() {
    const pathname = usePathname();

    const getDirection = () => {
        if (pathname === '/studio') return 'left-to-right';
        if (pathname === '/journey') return 'right-to-left';
        return 'right-to-left'; 
    }

    const direction = getDirection();

    return (
        <>
            {[...Array(6)].map((_, index) => {
                const finalIndex = direction === 'left-to-right' ? index : reverseIndex(index);
                return (
                    <motion.div 
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.3,
                            ease: 'easeInOut',
                            delay: finalIndex * 0.05
                        }}
                        className="h-full w-full bg-background relative z-[90]"
                    />
                );
            })}
        </>
    )
}
