import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Work } from '@/components/work';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { Events } from '@/components/events';
import { Footer } from '@/components/footer';
import { Press } from '@/components/press';
import { Separator } from '@/components/ui/separator';
import { Contact } from '@/components/contact';
import { SideNav } from '@/components/side-nav';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <SideNav />
      <main className="flex-1">
        <Hero />
        <About />
        <SectionSeparator />
        <Work />
        <SectionSeparator />
        <Press />
        <SectionSeparator />
        <div className="container mx-auto grid max-w-5xl gap-16 px-4 md:grid-cols-5 md:gap-8 lg:gap-16">
          <Education />
          <Interests />
        </div>
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
