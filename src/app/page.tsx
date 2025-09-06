import { Header } from '@/components/header';
import { Hero } from '@/components/home/hero';
import { About } from '@/components/home/about';
import { Work } from '@/components/home/work';
import { Education } from '@/components/home/education';
import { Interests } from '@/components/home/interests';
import { Events } from '@/components/home/events';
import { Footer } from '@/components/footer';
import { Press } from '@/components/home/press';
import { Separator } from '@/components/ui/separator';
import { Contact } from '@/components/home/contact';
import { BottomNav } from '@/components/home/bottom-nav';
import { PublicProfile } from '@/components/home/public-profile';
import { StudioSection } from '@/components/home/studio-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden no-scrollbar">
      <Header />
      <BottomNav />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <SectionSeparator />
        <StudioSection />
        <SectionSeparator />
        <Work />
        <SectionSeparator />
        <Press />
        <SectionSeparator />
        <Education />
        <SectionSeparator />
        <Interests />
        <SectionSeparator />
        <Events />
        <SectionSeparator />
        <PublicProfile />
        <SectionSeparator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const SectionSeparator = () => (
  <div className="container mx-auto max-w-5xl px-2">
    <Separator className="my-8 md:my-12" />
  </div>
);
