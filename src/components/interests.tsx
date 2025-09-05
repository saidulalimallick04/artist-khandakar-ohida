import { interestsData } from "@/lib/data";
import { ScrollAnimator } from "./scroll-animator";

const InterestIcon = ({ iconName }: { iconName: string }) => {
  const iconStyle = "h-5 w-5 text-secondary-foreground";
  switch (iconName) {
    case 'palette':
      return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M15.5 12a3.5 3.5 0 0 0-7 0m7 0a3.5 3.5 0 0 1-7 0"/><path d="M10.5 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm5 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z"/></svg>;
    case 'camera':
      return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>;
    case 'code':
      return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
    case 'book':
      return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20v2H6.5A2.5 2.5 0 0 1 4 19.5z"/><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20v2H6.5A2.5 2.5 0 0 1 4 7.5z"/></svg>;
    case 'mountain':
        return <svg className={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>;
    default:
      return null;
  }
};

export function Interests() {
  return (
    <section id="interests" className="md:col-span-2">
      <ScrollAnimator>
        <h2 className="font-headline text-2xl md:text-3xl">Interests</h2>
      </ScrollAnimator>
      <div className="mt-6 space-y-6">
        {interestsData.map((interest, index) => (
          <ScrollAnimator key={interest.name} delay={100 * (index + 1)}>
            <div className="flex items-center gap-4">
               <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <InterestIcon iconName={interest.icon} />
               </div>
              <h3 className="font-semibold text-sm">{interest.name}</h3>
            </div>
          </ScrollAnimator>
        ))}
      </div>
    </section>
  );
}
