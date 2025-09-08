
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StudioBottomNav } from '@/components/studio/studio-bottom-nav';
import { StudioHero } from '@/components/studio/studio-hero';
import { Services } from '@/components/studio/services';
import { Philosophy } from '@/components/studio/philosophy';
import { FeaturedWork } from '@/components/studio/featured-work';

export default function StudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <StudioHero />
        <Services />
        <Philosophy />
        <FeaturedWork />
        <div id="bottom" />
      </main>
      <StudioBottomNav />
      <Footer />
    </div>
  );
}
