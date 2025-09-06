
"use client";

import { useMemo } from "react";
import { type JourneyItem } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Briefcase, Building, GraduationCap, Milestone, Palette, Plane, Award, Film } from "lucide-react";

const JourneyIcon = ({ iconName, className }: { iconName: string, className?: string }) => {
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Building':
        return <Building className={className} />;
    case 'Palette':
        return <Palette className={className} />;
    case 'Plane':
        return <Plane className={className} />;
    case 'Award':
        return <Award className={className} />;
    case 'Film':
        return <Film className={className} />;
    default:
      return <Milestone className={className} />;
  }
};

const groupItemsByYear = (items: JourneyItem[]): Record<string, JourneyItem[]> => {
  return items.reduce((acc, item) => {
    const year = item.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(item);
    return acc;
  }, {} as Record<string, JourneyItem[]>);
};

export function JourneyTimeline({ items }: { items: JourneyItem[] }) {

  const groupedItems = useMemo(() => groupItemsByYear(items), [items]);
  const years = Object.keys(groupedItems);

  return (
    <section id="journey" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
       <ScrollAnimator>
        <h2 id="top" className="font-headline text-3xl md:text-4xl text-center">My Life Journey</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          A timeline of my personal and professional milestones.
        </p>
      </ScrollAnimator>
      <div className="mt-12 relative">
        <div className="absolute left-4 w-0.5 h-full bg-border/70 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {years.map((year, index) => (
            <ScrollAnimator key={year} delay={100 * (index + 1)}>
              <div className="relative">
                <div className="absolute top-1 left-4 w-9 h-9 bg-background border-2 border-primary rounded-full -translate-x-1/2 flex items-center justify-center md:left-1/2">
                   <JourneyIcon iconName={groupedItems[year][0].icon} className="w-5 h-5 text-primary" />
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                  <div
                    className={`pl-16 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-6 ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <p className={`font-semibold text-primary text-2xl ${ index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{year}</p>
                      <div className="space-y-4">
                        {groupedItems[year].map((item, itemIndex) => (
                            <div key={item.title + itemIndex}>
                                <h3 className="font-headline text-xl mt-2">{item.title}</h3>
                                <p className="text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
      <div id="bottom" />
    </section>
  );
}
