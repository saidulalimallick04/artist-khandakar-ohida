
'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimator } from './scroll-animator';
import { studioData } from '@/lib/data';

export function StudioSection() {
  return (
    <section id="studio" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">
            {studioData.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {studioData.subtitle}
          </p>
          <Button asChild variant="outline" className="mt-8 group">
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
