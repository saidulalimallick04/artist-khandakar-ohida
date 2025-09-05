import { pressData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Award } from "lucide-react";

export function Press() {
  return (
    <section id="press" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">Press & Recognition</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          A selection of awards, publications, and mentions.
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {pressData.map((item, index) => (
          <ScrollAnimator key={index} delay={100 * index}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    <CardDescription className="pt-1">{item.year}</CardDescription>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary ml-4">
                    <Award className="h-5 w-5 text-secondary-foreground" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
