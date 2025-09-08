
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StudioBottomNav } from '@/components/studio/studio-bottom-nav';
import { Separator } from '@/components/ui/separator';
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
        <SectionSeparator />
        <Philosophy />
        <SectionSeparator />
        <FeaturedWork />
        <div id="bottom" />
      </main>
      <StudioBottomNav />
      <Footer />
    </div>
  );
}

const SectionSeparator = () => (
  <div className="container mx-auto max-w-5xl px-2">
    <Separator className="my-8 md:my-12" />
  </div>
);
