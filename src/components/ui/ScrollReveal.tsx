"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            className={cn("scroll-reveal", className)}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
