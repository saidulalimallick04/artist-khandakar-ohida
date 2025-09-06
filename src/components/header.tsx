
"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#studio", label: "Studio" },
  { href: "#work", label: "Work" },
  { href: "#press", label: "Press" },
  { href: "#education", label: "Education" },
  { href: "#interests", label: "Interests" },
  { href: "#events", label: "Events" },
  { href: "#profiles", label: "Profiles" },
  { href: "/journey", label: "Life Journey" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (href.startsWith('/')) {
      if (pathname === href) {
        // If on the same page, scroll to top
         window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        router.push(href);
      }
    } else {
       if (pathname !== '/') {
        router.push('/' + href);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const desktopNavs = navLinks.filter(link => link.href !== '/' && link.href !== '/journey');
  const mobileNavs = navLinks.filter(link => link.href.startsWith('/') || link.href.startsWith('#'));


  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" onClick={(e) => handleNavClick(e, '/')} className="font-headline text-xl font-bold transition-colors hover:text-primary">
          Khandakar Ohida
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {desktopNavs.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
               <span className="absolute bottom-[-2px] left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}
          <ThemeToggle />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          {isClient && isMobile && (
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0">
                  <SheetHeader className="flex flex-row justify-between items-center p-4 border-b">
                     <SheetTitle className="font-headline text-lg">Menu</SheetTitle>
                      <SheetClose asChild>
                           <Button variant="ghost" size="icon">
                              <X className="h-6 w-6" />
                              <span className="sr-only">Close menu</span>
                          </Button>
                      </SheetClose>
                  </SheetHeader>
                <nav className="mt-8 flex flex-col gap-6 px-4">
                  {mobileNavs.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
