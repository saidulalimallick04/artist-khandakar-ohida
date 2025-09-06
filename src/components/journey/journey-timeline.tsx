
"use client";

import { useMemo } from "react";
import { journeyData, type JourneyItem } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Briefcase, Building, GraduationCap, Milestone, Palette, Plane, Award, Film } from "lucide-react";
import { cn } from "@/lib/utils";

const iconColorClasses: Record<string, string> = {
    'GraduationCap': 'text-blue-500',
    'Briefcase': 'text-green-500',
    'Building': 'text-orange-500',
    'Palette': 'text-red-500',
    'Plane': 'text-indigo-500',
    'Award': 'text-yellow-500',
    'Film': 'text-purple-500',
    'Milestone': 'text-gray-500',
  };
  
const borderColorClasses: Record<string, string> = {
'GraduationCap': 'border-blue-500',
'Briefcase': 'border-green-500',
'Building': 'border-orange-500',
'Palette': 'border-red-500',
'Plane': 'border-indigo-500',
'Award': 'border-yellow-500',
'Film': 'border-purple-500',
'Milestone': 'border-gray-500',
};


const JourneyIcon = ({ iconName, className }: { iconName: string, className?: string }) => {
  const iconClass = cn(iconColorClasses[iconName] || 'text-primary', className);
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className={iconClass} />;
    case 'Briefcase':
      return <Briefcase className={iconClass} />;
    case 'Building':
        return <Building className={iconClass} />;
    case 'Palette':
        return <Palette className={iconClass} />;
    case 'Plane':
        return <Plane className={iconClass} />;
    case 'Award':
        return <Award className={iconClass} />;
    case 'Film':
        return <Film className={iconClass} />;
    default:
      return <Milestone className={iconClass} />;
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
        <h2 id="top" className="font-headline text-3xl md:text-4xl text-center">{journeyData.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          {journeyData.subtitle}
        </p>
      </ScrollAnimator>
      <div className="mt-12 relative">
        <div className="absolute left-4 w-0.5 h-full bg-border/70 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {years.map((year, index) => {
            const firstItemIcon = groupedItems[year][0].icon;
            return (
            <ScrollAnimator key={year} delay={100 * (index + 1)}>
              <div className="relative">
                <div className={cn(
                    "absolute top-1 left-4 w-9 h-9 bg-background border-2 rounded-full -translate-x-1/2 flex items-center justify-center md:left-1/2",
                    borderColorClasses[firstItemIcon] || 'border-primary'
                    )}>
                   <JourneyIcon iconName={firstItemIcon} className="w-5 h-5" />
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
                                <div className="flex items-center gap-3">
                                    <JourneyIcon iconName={item.icon} className="w-4 h-4 hidden md:block" />
                                    <h3 className="font-headline text-xl mt-2">{item.title}</h3>
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
          )})}
        </div>
      </div>
      <div id="bottom" />
    </section>
  );
}
