
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { workData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimator } from "@/components/scroll-animator";

export function FeaturedWork() {
  const featuredWork = workData.items.slice(0, 3);

  return (
    <section id="featured-work" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl text-center">Featured Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A glimpse into some of my favorite projects.
          </p>
        </ScrollAnimator>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWork.map((item, index) => (
            <ScrollAnimator key={item.id} delay={100 * (index + 1)}>
              <Card className="group overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
                <div className="overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    data-ai-hint={`${item.category} ${item.tags[0]}`}
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 flex-grow flex flex-col">
                  <h3 className="font-headline text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-grow">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimator>
          ))}
        </div>
        <ScrollAnimator delay={400} className="mt-12 text-center">
          <Button asChild>
            <Link href="/#work">
              Explore All Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}
