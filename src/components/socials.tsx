import { Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'GitHub', icon: Github, url: '#' },
];

export function Socials() {
  return (
    <>
      {socialLinks.map((social) => (
        <Button key={social.name} variant="outline" size="icon" asChild>
          <Link href={social.url} aria-label={social.name}>
            <social.icon className="h-5 w-5" />
          </Link>
        </Button>
      ))}
    </>
  );
}
