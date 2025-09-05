import { educationData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">Education</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          My academic background and key qualifications.
        </p>
      </ScrollAnimator>
      <div className="mt-12 relative">
        {/* Desktop Timeline Line */}
        <div className="absolute left-1/2 top-0 -ml-[1px] h-full w-0.5 bg-border hidden md:block" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <ScrollAnimator key={index} delay={100 * (index + 1)}>
              <div className="md:grid md:grid-cols-2 md:gap-8 items-start relative">
                
                {/* Left Side or Right Side based on index */}
                <div className={`md:flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-3'}`}>
                   <div className="md:w-3/4">
                     {/* Mobile connector line */}
                     <div className="absolute top-8 -left-2 w-0.5 h-full bg-border/70 border-dotted md:hidden" />
                     <div className="absolute top-8 -left-[9px] w-4 h-4 bg-primary rounded-full md:hidden z-10" />

                     <div className={`p-6 rounded-lg border bg-card text-card-foreground shadow-sm relative ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <p className="font-semibold text-muted-foreground">{edu.period}</p>
                        <h3 className="font-headline text-xl mt-2">{edu.degree}</h3>
                        <p className="text-muted-foreground mt-1">{edu.institution}</p>
                     </div>
                   </div>
                </div>

                {/* Timeline Dot for Desktop */}
                <div className="hidden md:flex justify-center items-center md:order-2">
                    <div className="w-4 h-4 bg-primary rounded-full z-10" />
                </div>

                {/* Empty placeholder for grid layout */}
                 <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>


              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
