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
  Mail,
} from "lucide-react";
import { Button } from "./ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "#", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#work", label: "Work", icon: Palette },
  { href: "#press", label: "Press", icon: Newspaper },
  { href: "#education", label: "Info", icon: BookOpen },
  { href: "#events", label: "Events", icon: Calendar },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function SideNav() {
    const isMobile = useIsMobile();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (isMobile) {
        return null;
    }

  return (
    <TooltipProvider>
      <aside className="fixed left-4 top-1/2 z-50 -translate-y-1/2 hidden md:flex">
        <div className="flex flex-col items-center gap-2 rounded-full border bg-background/50 p-2 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Tooltip key={link.href}>
              <TooltipTrigger asChild>
                <Button asChild variant="ghost" size="icon">
                  <Link href={link.href} onClick={(e) => scrollToSection(e, link.href)}>
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </aside>
    </TooltipProvider>
  );
}
