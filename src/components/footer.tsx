import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row max-w-5xl">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Saks Afridi. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.url} aria-label={social.name}>
                <social.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
