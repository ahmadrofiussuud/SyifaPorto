import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Container({ className, children, ...props }: ContainerProps) {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1280px]",
                "px-4 sm:px-6 lg:px-8", // Strict horizontal padding
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
