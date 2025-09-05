
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { JourneyTimeline } from '@/components/journey-timeline';
import { JourneyBottomNav } from '@/components/journey-bottom-nav';

export default function JourneyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-16">
        <JourneyTimeline />
      </main>
      <JourneyBottomNav />
      <Footer />
    </div>
  );
}
