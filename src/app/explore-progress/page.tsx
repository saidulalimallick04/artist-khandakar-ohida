
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ScrollAnimator } from '@/components/scroll-animator';

const progressItems = [
  { title: 'Interactive Installation "Choros"', value: 75 },
  { title: 'Digital Painting Series "Mythos"', value: 40 },
  { title: 'Brand Identity for "Future Labs"', value: 90 },
  { title: 'Short Film "Ephemeral Echoes"', value: 20 },
  { title: '3D Sculpting & Animation Studies', value: 60 },
];

export default function ExploreProgress() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <section className="container mx-auto max-w-3xl px-4 py-16 md:py-24">
          <ScrollAnimator>
            <div className="text-center">
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl">
                Studio Progress
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
                A glimpse into the ongoing projects and creative explorations
                currently taking shape at Khandakar Ohida Studio.
              </p>
            </div>
          </ScrollAnimator>

          <ScrollAnimator delay={200}>
            <div className="mt-16 space-y-8">
              {progressItems.map((item, index) => (
                <div key={item.title}>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.value}%</p>
                  </div>
                  <Progress value={item.value} />
                </div>
              ))}
            </div>
          </ScrollAnimator>
          
          <ScrollAnimator delay={400} className="mt-16 text-center">
             <Button asChild variant="outline">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
             </Button>
          </ScrollAnimator>
        </section>
      </main>
      <Footer />
    </div>
  );
}
