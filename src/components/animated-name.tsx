
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
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      aria-label={name}
      className={cn(
        'font-headline text-5xl md:text-7xl lg:text-8xl flex flex-wrap justify-center md:justify-start gap-x-1',
        className
      )}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="flex" aria-hidden="true">
          {word.split('').map((char, charIndex) => {
            const randomChars = Array.from({ length: 10 }, () => 
                allChars[Math.floor(Math.random() * allChars.length)]
            );

            const letterColumn = [...randomChars, char];
            const animationDelay = `${wordIndex * 200 + charIndex * 75}ms`;

            return (
              <span
                key={charIndex}
                className="h-[1.1em] overflow-hidden"
                style={{
                    lineHeight: '1.1em',
                }}
              >
                <span
                  className={cn(
                    'flex flex-col transition-transform duration-700 ease-in-out',
                     !isMounted && '-translate-y-[90.9%]'
                  )}
                  style={{
                    transitionDelay: animationDelay,
                    transform: isMounted ? 'translateY(-90.9%)' : 'translateY(0)',
                  }}
                >
                  {letterColumn.map((letter, index) => (
                    <span key={index}>{letter}</span>
                  ))}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </div>
  );
}
