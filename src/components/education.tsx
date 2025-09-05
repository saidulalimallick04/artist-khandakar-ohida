import { educationData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";

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
        {/* Vertical line for the timeline */}
        <div className="absolute left-4 w-0.5 h-full bg-border/70 md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <ScrollAnimator key={index} delay={100 * (index + 1)}>
              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-1 left-4 w-4 h-4 bg-primary rounded-full -translate-x-1/2 md:left-1/2" />

                <div className="md:grid md:grid-cols-2 md:gap-8 items-start">
                  <div
                    className={`pl-10 md:pl-0 ${
                      index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'
                    }`}
                  >
                    <div
                      className={`p-6 rounded-lg border bg-card text-card-foreground shadow-sm ${
                        index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      <p className="font-semibold text-muted-foreground">{edu.period}</p>
                      <h3 className="font-headline text-xl mt-2">{edu.degree}</h3>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}