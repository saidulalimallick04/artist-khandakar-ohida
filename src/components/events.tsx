import { eventsData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Calendar } from "lucide-react";

export function Events() {
  return (
    <section id="events" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">Exhibitions & Events</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          A log of past exhibitions, speaking engagements, and other notable events.
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {eventsData.map((event, index) => (
          <ScrollAnimator key={index} delay={100 * index}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 pt-1">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{event.description} at <span className="font-semibold text-foreground">{event.location}</span>.</p>
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
