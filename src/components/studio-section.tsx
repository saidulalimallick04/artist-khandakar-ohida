
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimator } from './scroll-animator';
import { studioData } from '@/lib/data';

export function StudioSection() {
  return (
    <section id="studio" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-black">
        <Image
          src={studioData.imageUrl}
          alt="Abstract studio background"
          fill
          data-ai-hint="artist studio dark"
          className="object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator className="text-center text-white">
          <h2 className="font-headline text-3xl md:text-4xl">
            {studioData.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-neutral-300">
            {studioData.subtitle}
          </p>
          <Button asChild variant="outline" className="mt-8 group bg-transparent text-white hover:bg-white hover:text-black">
            <Link href="/studio">
              Explore KO Studio
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}
