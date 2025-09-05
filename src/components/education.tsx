import { educationData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="md:col-span-3">
      <ScrollAnimator>
        <h2 className="font-headline text-2xl md:text-3xl">Education</h2>
      </ScrollAnimator>
      <div className="mt-6 space-y-6">
        {educationData.map((edu, index) => (
          <ScrollAnimator key={index} delay={100 * (index + 1)}>
            <div className="flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <GraduationCap className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
              </div>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
