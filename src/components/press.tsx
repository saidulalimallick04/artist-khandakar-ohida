"use client";

import { pressData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Award } from "lucide-react";
import { HorizontalScroll } from "./horizontal-scroll";
import { useIsMobile } from "@/hooks/use-mobile";

export function Press() {
  const isMobile = useIsMobile();

  const pressItems = pressData.map((item, index) => (
    <div key={index} className={isMobile ? "w-[80vw] sm:w-[45vw] md:w-[30vw] flex-shrink-0" : ""}>
      <ScrollAnimator delay={100 * index} className="h-full w-full">
        <Card className="h-full">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                <CardDescription className="pt-1">{item.year}</CardDescription>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ml-4 flex-shrink-0">
                <Award className="h-5 w-5 text-secondary-foreground" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </CardContent>
        </Card>
      </ScrollAnimator>
    </div>
  ));

  return (
    <section id="press" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl text-center">Press & Recognition</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A selection of awards, publications, and mentions.
          </p>
        </ScrollAnimator>
      </div>

      {isMobile ? (
        <HorizontalScroll className="mt-12" items={pressData}>
          {pressItems}
        </HorizontalScroll>
      ) : (
        <div className="container mx-auto max-w-5xl px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pressItems}
            </div>
        </div>
      )}
    </section>
  );
}
