import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';

const iconComponents: { [key: string]: React.ComponentType<any> } = {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Github
};

export function Socials() {
  return (
    <>
      {socialLinks.map((social) => {
        const Icon = iconComponents[social.icon];
        return (
          <Button key={social.name} variant="outline" size="icon" asChild>
            <Link href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon className="h-5 w-5" />}
            </Link>
          </Button>
        )
      })}
    </>
  );
}
