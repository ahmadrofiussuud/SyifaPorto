import Link from 'next/link';
import { personalInfo } from '@/data/content';
import { Github, Linkedin, Dribbble, Instagram, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { socials, bio } = personalInfo;

    const mainLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'Competitions', href: '/competitions' },
        { name: 'Journey', href: '/journey' },
        { name: 'About', href: '/about' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', href: socials.linkedin, icon: Linkedin },
        { name: 'GitHub', href: socials.github, icon: Github },
        { name: 'Dribbble', href: socials.dribbble, icon: Dribbble },
        { name: 'Instagram', href: socials.instagram, icon: Instagram },
    ].filter(link => link.href); // Only show existing links

    return (
        <footer className="w-full border-t border-border/40 bg-background/50 backdrop-blur-sm relative overflow-hidden">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

            <Container className="py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-16">
                    {/* Column 1: Brand & Bio */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-bold font-heading text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                {personalInfo.name}
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            {bio.short}
                        </p>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">Available for new projects</span>
                        </div>
                    </div>

                    {/* Column 2: Sitemap */}
                    <div className="space-y-6">
                        <h3 className="font-bold font-heading text-foreground">Sitemap</h3>
                        <ul className="space-y-3">
                            {mainLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors hover:pl-2 inline-block duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="space-y-6">
                        <h3 className="font-bold font-heading text-foreground">Connect</h3>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            <div className="p-2 rounded-full bg-card border border-border/50 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <span>{link.name}</span>
                                            <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Contact */}
                    <div className="space-y-6">
                        <h3 className="font-bold font-heading text-foreground">Let's Chat</h3>
                        <p className="text-sm text-muted-foreground">
                            Punya ide proyek menarik atau sekadar ingin menyapa? Kirimkan email kepadaku!
                        </p>
                        <a href={`mailto:${socials.email}`}>
                            <Button className="w-full rounded-full group">
                                <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                {socials.email}
                            </Button>
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground text-center md:text-left">
                        &copy; {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground order-first md:order-last">
                        <span>Made with</span>
                        <Heart className="h-3 w-3 text-red-500 fill-red-500 animate-pulse" />
                        <span>using Next.js & Tailwind</span>
                    </div>
                </div>
            </Container>
        </footer >
    );
}
