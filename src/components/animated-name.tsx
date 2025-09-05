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
    const timer = setTimeout(() => setIsMounted(true), 100); // Small delay to trigger animation
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
            // Generate a random set of letters for the jackpot roll
            const randomChars = Array.from({ length: 10 }, () => 
                allChars[Math.floor(Math.random() * allChars.length)]
            );

            // The final letter column for animation
            const letterColumn = [...randomChars, char];

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
                    'flex flex-col',
                    isMounted ? 'animate-roll-down' : '-translate-y-full'
                  )}
                  style={{
                    animationDelay: `${wordIndex * 200 + charIndex * 75}ms`,
                    transform: isMounted ? 'translateY(0)' : `translateY(-${10 * 100}%)`,
                    transition: 'transform 0.8s cubic-bezier(0.6, 0, 0.2, 1)',
                    transitionDelay: `${wordIndex * 200 + charIndex * 75}ms`
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
