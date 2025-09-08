
"use client";

import { studioData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Palette, Film, PencilRuler, Briefcase, Bot, Sparkles } from 'lucide-react';

const serviceIcons: { [key: string]: React.ElementType } = {
  'Concept Development': Sparkles,
  'Digital Painting': Palette,
  'Brand Identity': Briefcase,
  'Animation & Motion': Film,
  'Interactive Installations': Bot,
  'Film & Documentary': PencilRuler,
};


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
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioData.marqueeItems.slice(0, 6).map((item, index) => {
                const Icon = serviceIcons[item.title] || Sparkles;
                return (
                  <ScrollAnimator key={index} delay={100 * (index + 1)}>
                      <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:bg-card transition-all duration-300 group">
                          <CardHeader>
                              <CardTitle className="flex items-center gap-4">
                                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                  <Icon className="h-6 w-6" />
                                </span>
                                <span className="font-headline text-xl">{item.title}</span>
                              </CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                      </Card>
                  </ScrollAnimator>
                )
            })}
        </div>
      </div>
    </section>
  );
}
