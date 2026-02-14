import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'secondary' | 'outline' | 'destructive';
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'border-transparent bg-primary/10 text-primary hover:bg-primary/20',
            secondary: 'border-transparent bg-secondary/10 text-secondary-foreground hover:bg-secondary/20', // Soft Blue
            outline: 'text-foreground border-border',
            destructive: 'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);
Badge.displayName = 'Badge';

export { Badge };
