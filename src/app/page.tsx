import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Studio } from '@/components/studio';
import { Work } from '@/components/work';
import { Education } from '@/components/education';
import { Hobbies } from '@/components/hobbies';
import { Events } from '@/components/events';
import { Footer } from '@/components/footer';
import { Press } from '@/components/press';
import { Separator } from '@/components/ui/separator';
import { Contact } from '@/components/contact';
import { BottomNav } from '@/components/bottom-nav';

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
        <Hobbies />
        <SectionSeparator />
        <Events />
        <SectionSeparator />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

const SectionSeparator = () => (
  <div className="container mx-auto max-w-5xl px-4">
    <Separator className="my-16 md:my-24" />
  </div>
);
