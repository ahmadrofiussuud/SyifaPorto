import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroBackgroundProps {
    className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
    return (
        <div className={cn("absolute inset-0 z-0 overflow-hidden bg-background", className)}>
            {/* 
        1. Base Grid Pattern (CSS Only - Instant Load)
        - Light: Subtle gray grid on white
        - Dark: Subtle white grid on dark
      */}
            <div className="absolute inset-0 opacity-[0.8] dark:opacity-[0.2]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, var(--muted-foreground) 1px, transparent 0)`,
                    backgroundSize: '32px 32px',
                }}
            />

            {/* 
        2. Theme-Aware Gradient Orbs (Soft Blobs)
        - Light Mode: Pink & Blue soft blobs
        - Dark Mode: Deep Purple & Navy blobs
      */}
            <div className="absolute top-[-20%] right-[-10%] w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[800px] lg:h-[800px] rounded-full bg-primary/30 blur-[60px] sm:blur-[100px] animate-pulse dark:bg-primary/10" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px] rounded-full bg-secondary/30 blur-[50px] sm:blur-[80px] animate-pulse delay-1000 dark:bg-secondary/10" />

            {/* 
        3. Gradient Overlay (Fade to bottom)
      */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
    );
}
