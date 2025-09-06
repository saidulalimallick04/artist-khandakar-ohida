import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Studio } from '@/components/studio';
import { Work } from '@/components/work';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { Events } from '@/components/events';
import { Footer } from '@/components/footer';
import { Press } from '@/components/press';
import { Separator } from '@/components/ui/separator';
import { Contact } from '@/components/contact';
import { BottomNav } from '@/components/bottom-nav';
import { PublicProfile } from '@/components/public-profile';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden no-scrollbar">
      <Header />
      <BottomNav />
      <main className="flex-1 pt-16">
        <Hero />
        <About />
        <SectionSeparator />
        <Studio />
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
