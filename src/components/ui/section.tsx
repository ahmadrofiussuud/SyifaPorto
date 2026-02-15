import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn('py-12 md:py-16', className)}
                {...props}
            >
                {container ? (
                    <Container>
                        {children}
                    </Container>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = 'Section';

export { Section };
