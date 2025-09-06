
'use client';

import { ScrollAnimator } from './scroll-animator';
import { studioData } from '@/lib/data';
import { Card } from './ui/card';
import { Socials } from './socials';
import Image from 'next/image';

export function StudioSection() {
  return (
    <section id="studio" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
       <ScrollAnimator>
         <Card className="bg-card text-card-foreground overflow-hidden">
           <div className="grid md:grid-cols-2">
             <div className="p-8 md:p-12 flex flex-col justify-center">
               <h2 className="font-headline text-3xl md:text-4xl text-primary-foreground">
                 {studioData.title}
               </h2>
               <p className="mt-4 text-muted-foreground">
                 {studioData.description1}
               </p>
               <p className="mt-4 text-muted-foreground">
                 {studioData.description2}
               </p>
               <div className="mt-8 flex gap-2">
                 <Socials />
               </div>
             </div>
             <div className="relative min-h-[300px] md:min-h-0">
               <Image
                 src="https://images.unsplash.com/photo-1444492417251-9f1265418963?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 alt="A small green plant in a natural setting"
                 fill
                 data-ai-hint="plant nature"
                 className="object-cover"
               />
             </div>
           </div>
         </Card>
       </ScrollAnimator>
    </section>
  );
}
