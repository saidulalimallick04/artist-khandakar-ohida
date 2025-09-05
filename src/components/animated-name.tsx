
"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedNameProps {
  name: string;
  className?: string;
}

const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function AnimatedName({ name, className }: AnimatedNameProps) {
  const [isMounted, setIsMounted] = useState(false);
  const words = name.split(' ');

  useEffect(() => {
    // A short delay helps ensure the animation triggers after the component is painted.
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-label={name}
      className={cn(
        'font-headline text-5xl md:text-7xl lg:text-8xl flex flex-wrap justify-center md:justify-start gap-x-4',
        className
      )}
    >
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="flex" aria-hidden="true">
          {word.split('').map((char, charIndex) => {
            // Generate a random set of letters for the slot machine roll effect.
            const randomChars = Array.from({ length: 10 }, () => 
                allChars[Math.floor(Math.random() * allChars.length)]
            );

            // The final letter column includes the random characters and the correct one at the end.
            const letterColumn = [...randomChars, char];
            const animationDelay = `${wordIndex * 200 + charIndex * 75}ms`;

            return (
              <div
                key={charIndex}
                className="h-[1.1em] overflow-hidden"
                style={{
                    lineHeight: '1.1em',
                }}
              >
                <div
                  className={cn(
                    'flex flex-col transition-transform duration-700 ease-in-out',
                     !isMounted && '-translate-y-[90.9%]'
                  )}
                  style={{
                    transitionDelay: animationDelay,
                  }}
                >
                  {letterColumn.map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
