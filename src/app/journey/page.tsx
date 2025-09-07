
'use client';

import { useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JourneyTimeline } from '@/components/journey/journey-timeline';
import { JourneyBottomNav } from '@/components/journey/journey-bottom-nav';
import { journeyData } from '@/lib/data';

export default function JourneyPage() {
  const sortedJourneyData = useMemo(() => {
    return [...journeyData.items].sort((a, b) => {
      const yearA = parseInt(a.year, 10);
      const yearB = parseInt(b.year, 10);
      return yearB - yearA; // Newest to oldest
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <JourneyTimeline items={sortedJourneyData} />
      </main>
      <JourneyBottomNav />
      <Footer />
    </div>
  );
}
