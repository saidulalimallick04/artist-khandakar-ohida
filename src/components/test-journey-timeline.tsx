
'use client';

import { useMemo } from "react";
import { type JourneyItem } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Briefcase, Building, GraduationCap, Milestone, Palette, Plane, Award, Film } from "lucide-react";
import { cn } from "@/lib/utils";

const iconColorMap: { [key: string]: string } = {
  GraduationCap: 'text-blue-500',
  Briefcase: 'text-purple-500',
  Building: 'text-orange-500',
  Palette: 'text-red-500',
  Plane: 'text-green-500',
  Award: 'text-yellow-500',
  Film: 'text-pink-500',
  Milestone: 'text-indigo-500',
};

const JourneyIcon = ({ iconName, className }: { iconName: string, className?: string }) => {
  const colorClass = iconColorMap[iconName] || 'text-primary';
  const combinedClassName = cn(colorClass, className);

  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className={combinedClassName} />;
    case 'Briefcase':
      return <Briefcase className={combinedClassName} />;
    case 'Building':
        return <Building className={combinedClassName} />;
    case 'Palette':
        return <Palette className={combinedClassName} />;
    case 'Plane':
        return <Plane className={combinedClassName} />;
    case 'Award':
        return <Award className={combinedClassName} />;
    case 'Film':
        return <Film className={combinedClassName} />;
    default:
      return <Milestone className={combinedClassName} />;
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

export function TestJourneyTimeline({ items }: { items: JourneyItem[] }) {

  const groupedItems = useMemo(() => groupItemsByYear(items), [items]);
  const years = Object.keys(groupedItems);

  return (
    <section id="journey" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
       <ScrollAnimator>
        <h2 id="top" className="font-headline text-3xl md:text-4xl text-center">My Life Journey (Test)</h2>
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
                   <JourneyIcon iconName={groupedItems[year][0].icon} className="w-5 h-5" />
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                  <div
                    className={cn('pl-16 md:pl-0',
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'
                    )}
                  >
                    <div
                      className={cn('p-6 rounded-lg border bg-card text-card-foreground shadow-sm space-y-6',
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      )}
                    >
                      <p className={cn('font-semibold text-primary text-2xl', index % 2 === 0 ? 'md:text-right' : 'md:text-left')}>{year}</p>
                      <div className="space-y-4">
                        {groupedItems[year].map((item, itemIndex) => (
                            <div key={item.title + itemIndex}>
                                <div className="flex items-center gap-2" style={{justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start'}}>
                                  <JourneyIcon iconName={item.icon} className="w-4 h-4" />
                                  <h3 className="font-headline text-xl">{item.title}</h3>
                                </div>
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
