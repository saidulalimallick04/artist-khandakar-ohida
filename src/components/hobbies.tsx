import { hobbiesData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";
import { Card } from "./ui/card";

const HobbyIcon = ({ iconName }: { iconName: string }) => {
  const iconStyle = "h-8 w-8 mb-4 text-accent";
  switch (iconName) {
    case 'palette':
      return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M15.5 12a3.5 3.5 0 0 0-7 0m7 0a3.5 3.5 0 0 1-7 0"/><path d="M10.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/></svg>;
    case 'film':
        return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>;
    case 'plane':
        return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.7 3.7c.5.4 1.2.3 1.5-.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>;
    case 'museum':
        return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 18v-5l-8-8-8 8v5h16zM10 10h4"/><path d="m2 22 10-10 10 10zM12 2v2M4 12H2M22 12h-2"/></svg>;
    default:
      return null;
  }
};

export function Hobbies() {
  return (
    <section id="hobbies" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
       <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">Hobbies & Interests</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          When I'm not in the studio, you can find me exploring new passions and seeking inspiration.
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {hobbiesData.map((hobby, index) => (
          <ScrollAnimator key={hobby.name} delay={100 * (index + 1)}>
             <Card className="text-center p-6 h-full flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-2">
                <HobbyIcon iconName={hobby.icon} />
                <h3 className="font-semibold">{hobby.name}</h3>
             </Card>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
