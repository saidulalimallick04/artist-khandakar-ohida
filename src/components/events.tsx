"use client";

import { useState, useTransition, useEffect } from 'react';
import { eventsData, type EventItem } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Calendar, Search, Loader2 } from "lucide-react";
import { Input } from './ui/input';
import { filterEventsAction } from '@/app/actions';
import { Badge } from './ui/badge';

export function Events() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState<EventItem[]>(eventsData);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    startTransition(async () => {
      const results = await filterEventsAction(debouncedSearchTerm, eventsData);
      setFilteredEvents(results);
    });
  }, [debouncedSearchTerm]);

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }
    const keywords = highlight.split(' ').filter(Boolean);
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


  return (
    <section id="events" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
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
            placeholder="e.g., 'Berlin', 'Solo Exhibition'"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {isPending && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
          )}
        </div>
      </ScrollAnimator>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {filteredEvents.map((event, index) => (
          <ScrollAnimator key={event.id} delay={100 * index}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{highlightText(event.title, debouncedSearchTerm)}</CardTitle>
                <CardDescription className="flex items-center gap-2 pt-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {highlightText(event.description, debouncedSearchTerm)} at <span className="font-semibold text-foreground">{highlightText(event.location, debouncedSearchTerm)}</span>.
                </p>
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
      
      {filteredEvents.length === 0 && !isPending && (
        <ScrollAnimator className="mt-12 text-center text-muted-foreground">No events found matching your criteria.</ScrollAnimator>
      )}
    </section>
  );
}
