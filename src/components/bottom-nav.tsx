
"use client";

import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Home,
  User,
  Palette,
  Newspaper,
  BookOpen,
  Calendar,
  Link2,
  Heart,
  Briefcase,
  Map,
} from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const desktopNavLinks = [
  { id: "#home", label: "Home", icon: Home },
  { id: "#about", label: "About", icon: User },
  { id: "#studio", label: "Studio", icon: Briefcase },
  { id: "#work", label: "Work", icon: Palette },
  { id: "#press", label: "Press", icon: Newspaper },
  { id: "#education", label: "Education", icon: BookOpen },
  { id: "#hobbies", label: "Hobbies", icon: Heart },
  { id: "#events", label: "Events", icon: Calendar },
  { id: "#profiles", label: "Profiles", icon: Link2 },
  { id: "/journey", label: "Life Journey", icon: Map },
];

const mobileNavLinks = [
  { id: "#home", label: "Home", icon: Home },
  { id: "#work", label: "Work", icon: Palette },
  { id: "#events", label: "Events", icon: Calendar },
  { id: "#profiles", label: "Profiles", icon: Link2 },
  { id: "/journey", label: "Life Journey", icon: Map },
];


export function BottomNav() {
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState("#home");
    const router = useRouter();

    const navLinks = isMobile ? mobileNavLinks : desktopNavLinks;

    useEffect(() => {
        const sectionIds = navLinks.map(link => link.id.substring(1)).filter(id => !id.startsWith('/'));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });


        return () => {
            sectionIds.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [navLinks]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (id.startsWith('/')) {
            router.push(id);
        } else {
            const element = document.querySelector(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
                if (history.pushState) {
                    history.pushState(null, "", id);
                }
            }
        }
    };

  return (
    <TooltipProvider>
      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border bg-background/50 p-2 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Tooltip key={link.id}>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon" className={cn(activeSection === link.id && "bg-accent text-accent-foreground")}>
                  <Link href={link.id} onClick={(e) => handleNavClick(e, link.id)}>
                    <link.icon className={cn("h-5 w-5 transition-transform duration-300", activeSection === link.id && "scale-125")} />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </nav>
    </TooltipProvider>
  );
}
