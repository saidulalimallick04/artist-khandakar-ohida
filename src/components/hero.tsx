"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Socials } from './socials';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="#"
      className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-16 md:py-24"
    >
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div
          className={cn(
            'flex flex-col items-center text-center md:items-start md:text-left transition-all duration-1000 ease-out',
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <h1
            className={cn(
              'font-headline text-5xl md:text-7xl lg:text-8xl transition-all duration-1000 ease-out',
              isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            )}
          >
            Saks Afridi
          </h1>
          <p
            className={cn(
              'mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl transition-all duration-1000 delay-300 ease-out',
              isMounted ? 'opacity-100' : 'opacity-0'
            )}
          >
            An artist's journey through pixels and passion. Exploring the
            intersection of digital art, design, and technology.
          </p>
          <div className="mt-8 flex gap-2">
            <Socials />
          </div>
        </div>
        <div
          className={cn(
            'relative mx-auto aspect-square w-full max-w-sm transition-all duration-1000 delay-500 ease-out',
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          )}
        >
          <Image
            src="https://picsum.photos/500/500?random=11"
            alt="Saks Afridi"
            fill
            data-ai-hint="artist portrait"
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
