import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    align?: 'left' | 'center';
}

const SectionHeading = forwardRef<HTMLHeadingElement, SectionHeadingProps>(
    ({ className, align = 'center', children, ...props }, ref) => {
        return (
            <div className={cn("flex flex-col mb-10 md:mb-12", align === 'center' ? 'items-center text-center' : 'items-start text-left')}>
                <h2
                    ref={ref}
                    className={cn("text-2xl md:text-3xl font-bold font-heading tracking-tight mb-3", className)}
                    {...props}
                >
                    {children}
                </h2>
                <div className="h-0.5 w-16 bg-gradient-to-r from-primary/40 via-primary to-secondary/40 rounded-full mt-1" />
            </div>
        );
    }
);
SectionHeading.displayName = 'SectionHeading';

export { SectionHeading };
