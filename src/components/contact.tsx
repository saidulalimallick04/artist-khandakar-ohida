"use client";

import { useState } from 'react';
import { Github, Twitter, Linkedin, Send } from "lucide-react";
import Link from 'next/link';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimator } from './scroll-animator';

const socialLinks = [
  { name: "GitHub", icon: Github, url: "#" },
  { name: "Twitter", icon: Twitter, url: "#" },
  { name: "LinkedIn", icon: Linkedin, url: "#" },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(values);
    setIsSubmitting(false);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section id="contact" className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
      <ScrollAnimator>
        <h2 className="font-headline text-3xl md:text-4xl text-center">Get in Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Have a question or want to work together? Drop me a line.
        </p>
      </ScrollAnimator>
      <div className="mt-12 grid gap-12 md:grid-cols-3">
        <ScrollAnimator delay={200} className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." {...field} rows={5} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </ScrollAnimator>
        <ScrollAnimator delay={400}>
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-xl">Contact Details</h3>
              <p className="text-muted-foreground mt-2">
                For inquiries, commissions, or collaborations, feel free to reach out.
              </p>
              <a href="mailto:saks@saks.me" className="mt-2 block text-primary hover:underline">
                saks@saks.me
              </a>
            </div>
             <div>
              <h3 className="font-headline text-xl">Follow Me</h3>
               <p className="text-muted-foreground mt-2">
                Connect with me on social media.
              </p>
              <div className="flex items-center gap-2 mt-2">
                {socialLinks.map((social) => (
                  <Button key={social.name} variant="outline" size="icon" asChild>
                    <Link href={social.url} aria-label={social.name}>
                      <social.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
