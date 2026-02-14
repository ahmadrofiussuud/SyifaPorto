import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    align?: 'left' | 'center';
}

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
    ({ className, align = 'center', children, ...props }, ref) => {
        return (
            <div className={cn("flex flex-col mb-12", align === 'center' ? 'items-center text-center' : 'items-start text-left')}>
                <h2
                    ref={ref}
                    className={cn("text-3xl md:text-4xl font-bold font-heading tracking-tight mb-4", className)}
                    {...props}
                >
                    {children}
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-primary/40 via-primary to-secondary/40 rounded-full mt-2" />
            </div>
        );
    }
);
SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };
