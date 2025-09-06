
"use client";

import { useState, useTransition, useEffect } from 'react';
import { eventsData, type EventItem } from "@/lib/data";
import { ScrollAnimator } from "@/components/scroll-animator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Calendar, Search, Loader2 } from "lucide-react";
import { Input } from '@/components/ui/input';
import { HorizontalScroll } from '@/components/horizontal-scroll';
import { useIsMobile } from '@/hooks/use-mobile';

export function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>(eventsData);
  const [isPending, startTransition] = useTransition();
  const isMobile = useIsMobile();

  useEffect(() => {
    startTransition(() => {
      if (searchTerm.trim() === '') {
        setFilteredEvents(eventsData);
        return;
      }

      const lowercasedKeywords = searchTerm.toLowerCase().trim().split(/\s+/);

      const results = eventsData.filter((item) => {
        const itemText = [
          item.title,
          item.description,
          item.location,
          item.date,
        ]
          .join(' ')
          .toLowerCase();

        return lowercasedKeywords.every((keyword) => itemText.includes(keyword));
      });
      setFilteredEvents(results);
    });
  }, [searchTerm]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const keywords = highlight.trim().split(/\s+/).filter(Boolean);
    if(keywords.length === 0) return text;

    const regex = new RegExp(`(${keywords.join('|')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="bg-primary/30 rounded-sm">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const eventItems = filteredEvents.map((event, index) => (
    <div key={event.id} className="w-full h-full md:w-auto flex-shrink-0">
     <ScrollAnimator delay={100 * index} className="h-full w-full">
       <Card className="h-full">
         <CardHeader>
           <CardTitle className="font-headline text-xl">{highlightText(event.title, searchTerm)}</CardTitle>
           <CardDescription className="flex items-center gap-2 pt-1">
             <Calendar className="h-4 w-4" />
             {highlightText(event.date, searchTerm)}
           </CardDescription>
         </CardHeader>
         <CardContent>
           <p className="text-sm text-muted-foreground">
             {highlightText(event.description, searchTerm)} at <span className="font-semibold text-foreground">{highlightText(event.location, searchTerm)}</span>.
           </p>
         </CardContent>
       </Card>
     </ScrollAnimator>
   </div>
 ));


  return (
    <section id="events">
       <div className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl text-center">Exhibitions & Events</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A log of past exhibitions, speaking engagements, and other notable events.
          </p>
        </ScrollAnimator>

        <ScrollAnimator delay={200} className="mt-8 max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              aria-label="Search events"
              placeholder="e.g., 'Berlin', 'Solo Exhibition', '2023'"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {isPending && (
              <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
            )}
          </div>
        </ScrollAnimator>
      </div>

      {isMobile ? (
        <HorizontalScroll className="mt-4" items={filteredEvents}>
            {filteredEvents.map((item, index) => (
              <div key={item.id} className="w-[80vw] sm:w-[45vw] flex-shrink-0">
                {eventItems[index]}
              </div>
            ))}
        </HorizontalScroll>
      ) : (
        <div className="container mx-auto max-w-5xl px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventItems}
            </div>
        </div>
      )}
      
      {filteredEvents.length === 0 && !isPending && (
        <ScrollAnimator className="mt-12 text-center text-muted-foreground">No events found matching your criteria.</ScrollAnimator>
      )}
    </section>
  );
}
