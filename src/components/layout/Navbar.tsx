"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/data/content';
import { useTheme } from '@/components/ThemeProvider';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Journey', href: '/journey' },
    { name: 'Projects', href: '/projects' },
    { name: 'Competitions', href: '/competitions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-sm transition-all duration-300">
            <div className="max-w-[1600px] h-16 px-6 md:px-10 mx-auto grid grid-cols-2 lg:grid-cols-3 items-center">
                <div className="flex items-center justify-start">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-bold text-lg hidden sm:inline-block">
                            {personalInfo.name}
                        </span>
                        <span className="font-bold text-lg sm:hidden">
                            {personalInfo.name.split(' ')[0]}
                        </span>
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center justify-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary relative py-1",
                                pathname === item.href
                                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                                    : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center justify-end space-x-2">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="inline-flex items-center justify-center rounded-full p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:rotate-12"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="h-5 w-5 text-yellow-400" />
                        ) : (
                            <Moon className="h-5 w-5" />
                        )}
                    </button>

                    <div className="hidden lg:flex">
                        <Link href="/contact">
                            <Button size="sm">Contact Me</Button>
                        </Link>
                    </div>
                    <button
                        className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden border-b border-border/40 bg-background">
                    <div className="container px-4 py-4 space-y-4">
                        <nav className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors hover:text-primary",
                                        pathname === item.href ? "text-foreground" : "text-foreground/60"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="pt-2">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button size="sm" className="w-full">Contact Me</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
