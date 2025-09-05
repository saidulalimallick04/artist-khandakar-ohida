
"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { Socials } from './socials';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/lib/data';

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
          src={heroData.backgroundImageUrl}
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
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl">{heroData.name}</h1>
          <p
            className={cn(
              'mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl transition-all duration-1000 delay-300 ease-out',
              isMounted ? 'opacity-100' : 'opacity-0'
            )}
          >
            {heroData.tagline}
          </p>
          <div className="mt-8 flex gap-2">
            <Socials />
          </div>
        </div>
        <div
          className={cn(
            'relative mx-auto w-full max-w-sm transition-all duration-1000 delay-500 ease-out',
            isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          )}
        >
          <div className="relative aspect-square w-full">
            <Image
              src={heroData.profileImageUrl}
              alt="Khandakar Ohida"
              fill
              data-ai-hint="artist portrait"
              className="rounded-full object-cover shadow-lg"
            />
            <Button asChild className="group absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" variant="outline">
              <Link href="/journey">
                Life Journey
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
