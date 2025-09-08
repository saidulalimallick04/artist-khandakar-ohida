
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
}: AnimatedTextProps) => {
  const letters = text.split("");

  return (
    <Wrapper className={className}>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            className={cn("inline-block", char === " " ? "w-2" : "")}
            variants={defaultAnimations}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
