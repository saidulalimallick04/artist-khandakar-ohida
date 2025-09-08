
"use client";

import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Film, PencilRuler } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator>
            <h2 className="font-headline text-3xl md:text-4xl text-center">What I Do</h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                I offer a range of creative services, blending artistic vision with technical skill.
            </p>
        </ScrollAnimator>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioData.marqueeItems.slice(0, 6).map((item, index) => (
                <ScrollAnimator key={index} delay={100 * (index + 1)}>
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              {index % 3 === 0 ? <Palette className="h-6 w-6 text-primary" /> : index % 3 === 1 ? <Film className="h-6 w-6 text-primary" /> : <PencilRuler className="h-6 w-6 text-primary" />}
                              {item.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                </ScrollAnimator>
            ))}
        </div>
      </div>
    </section>
  );
}
