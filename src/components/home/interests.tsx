"use client";

import { hobbiesData } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Card } from "@/components/ui/card";
import { Heart, Building, Film, Paintbrush, Plane } from 'lucide-react';

const HobbyIcon = ({ iconName }: { iconName: string }) => {
  const iconStyle = "h-8 w-8 mb-4 text-accent";
  switch (iconName) {
    case 'museum':
      return <Building className={iconStyle} />;
    case 'film':
        return <Film className={iconStyle} />;
    case 'palette':
        return <Paintbrush className={iconStyle} />;
    case 'plane':
        return <Plane className={iconStyle} />;
    default:
      return <Heart className={iconStyle} />;
  }
};

export function Interests() {
  return (
    <section id="interests" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
       <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">{hobbiesData.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          {hobbiesData.subtitle}
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {hobbiesData.items.map((hobby, index) => (
          <ScrollAnimator key={hobby.name} delay={100 * (index + 1)}>
             <Card className="text-center p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <HobbyIcon iconName={hobby.icon} />
                <h3 className="font-semibold">{hobby.name}</h3>
             </Card>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
