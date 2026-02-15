"use client";

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
    fallbackClassName?: string;
}

export function ImageWithFallback({
    src,
    alt,
    fallbackClassName,
    className,
    ...props
}: ImageWithFallbackProps) {
    const [error, setError] = useState(false);

    if (error || !src) {
        return (
            <div className={fallbackClassName || "absolute inset-0 bg-gradient-to-br from-pink-100 to-blue-100 dark:from-pink-950/20 dark:to-blue-950/20 flex items-center justify-center overflow-hidden"}>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent" />
            </div>
        );
    }

    return (
        <Image
            {...props}
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
}
