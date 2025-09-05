"use client";

import { useState, useTransition, useEffect } from 'react';
import Image from 'next/image';
import { Search, Loader2 } from 'lucide-react';
import { workData, type WorkItem } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollAnimator } from './scroll-animator';
import { Lightbox } from './lightbox';
import { Badge } from './ui/badge';
import { HorizontalScroll } from './horizontal-scroll';
import { useIsMobile } from '@/hooks/use-mobile';

export function Work() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredWork, setFilteredWork] = useState<WorkItem[]>(workData);
  const [isPending, startTransition] = useTransition();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    startTransition(() => {
      if (searchTerm.trim() === '') {
        setFilteredWork(workData);
        return;
      }
      
      const lowercasedKeywords = searchTerm.toLowerCase().trim().split(/\s+/);

      const results = workData.filter((item) => {
        const itemText = [
          item.title,
          item.description,
          item.category,
          item.period,
          ...item.tags,
        ]
          .join(' ')
          .toLowerCase();

        return lowercasedKeywords.every((keyword) => itemText.includes(keyword));
      });
      setFilteredWork(results);
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

  const workItems = filteredWork.map((item, index) => (
    <div key={item.id} className={isMobile ? "w-[80vw] sm:w-[45vw] md:w-[30vw] flex-shrink-0" : ""}>
        <ScrollAnimator delay={index * 100} className="h-full w-full">
        <Card className="group overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg">
            <div className="overflow-hidden cursor-pointer" onClick={() => setLightboxImage(item.imageUrl)}>
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
            <h3 className="font-headline text-xl">{highlightText(item.title, searchTerm)}</h3>
            <p className="mt-2 text-sm text-muted-foreground flex-grow">
                {highlightText(item.description, searchTerm)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
                 <Badge variant="outline">{highlightText(item.period, searchTerm)}</Badge>
                {item.tags.map(tag => (
                    <Badge variant="secondary" key={tag}>{highlightText(tag, searchTerm)}</Badge>
                ))}
            </div>
            </CardContent>
        </Card>
        </ScrollAnimator>
    </div>
  ));

  return (
    <section id="work" className="py-16 md:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <ScrollAnimator>
          <h2 className="font-headline text-3xl md:text-4xl text-center">Featured Work</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A collection of projects and artwork. Use the search below to filter by keywords like &quot;digital painting&quot; or &quot;animation&quot;.
          </p>
        </ScrollAnimator>

        <ScrollAnimator delay={200} className="mt-8 max-w-lg mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              aria-label="Search work"
              placeholder="e.g., 'surrealism', 'branding', '2023'"
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
        <HorizontalScroll className="mt-12" items={filteredWork}>
            {workItems}
        </HorizontalScroll>
      ) : (
        <div className="container mx-auto max-w-5xl px-4 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workItems}
            </div>
        </div>
      )}


      {filteredWork.length === 0 && !isPending && (
        <ScrollAnimator className="mt-12 text-center text-muted-foreground">No work found matching your criteria.</ScrollAnimator>
      )}

      {lightboxImage && (
        <Lightbox imageUrl={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </section>
  );
}
