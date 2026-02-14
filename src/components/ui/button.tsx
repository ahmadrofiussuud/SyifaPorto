import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', isLoading, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5 border-0',
            secondary: 'bg-white text-secondary-foreground border border-secondary/20 hover:bg-secondary/5 hover:border-secondary/40 shadow-sm',
            outline: 'border-2 border-primary/20 bg-transparent text-primary hover:bg-primary/5 hover:border-primary/40',
            ghost: 'hover:bg-primary/10 hover:text-primary',
            link: 'text-primary underline-offset-4 hover:underline',
        };

        const sizes = {
            sm: 'h-9 rounded-full px-4 text-xs',
            md: 'h-11 rounded-full px-6',
            lg: 'h-12 rounded-full px-8 text-base',
            icon: 'h-10 w-10 rounded-full',
        };

        return (
            <button
                ref={ref}
                disabled={isLoading || props.disabled}
                className={cn(
                    'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </button>
        );
    }
);
Button.displayName = 'Button';

export { Button };
