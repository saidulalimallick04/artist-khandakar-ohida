"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Socials } from './socials';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative container mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-16 md:py-24"
    >
       <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Artistic background"
          fill
          data-ai-hint="abstract texture"
          className="object-cover opacity-10 blur-md"
        />
      </div>
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div
          className={cn(
            'flex flex-col items-center text-center md:items-start md:text-left transition-all duration-1000 ease-out',
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl">Khandakar Ohida</h1>
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
            'relative mx-auto w-full max-w-sm transition-all duration-1000 delay-500 ease-out flex flex-col items-center gap-4',
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          )}
        >
          <div className="relative aspect-square w-full">
            <Image
              src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Khandakar Ohida"
              fill
              data-ai-hint="artist portrait"
              className="rounded-full object-cover shadow-lg"
            />
          </div>
           <Button asChild className="group" variant="outline">
              <Link href="/journey">
                Life Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
