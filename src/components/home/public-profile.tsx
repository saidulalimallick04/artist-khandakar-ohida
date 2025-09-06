import Link from 'next/link';
import { profileLinksData } from '@/lib/data';
import { ScrollAnimator } from '@/components/scroll-animator';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function PublicProfile() {
  return (
    <section id="profiles" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">{profileLinksData.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          {profileLinksData.subtitle}
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {profileLinksData.items.map((item, index) => (
          <ScrollAnimator key={item.name} delay={100 * (index + 1)}>
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <p className="text-muted-foreground">{item.description}</p>
                <Button asChild variant="outline" className="mt-4 w-fit group">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
