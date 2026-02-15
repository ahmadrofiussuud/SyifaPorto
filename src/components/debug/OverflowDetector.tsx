"use client";

import { useEffect, useState } from "react";

export function OverflowDetector() {
    const [offenders, setOffenders] = useState<{ selector: string; width: number; overflow: number }[]>([]);

    useEffect(() => {
        if (process.env.NODE_ENV !== "development") return;

        const checkOverflow = () => {
            const docWidth = document.documentElement.clientWidth;
            const elements = document.querySelectorAll("*");
            const newOffenders: { selector: string; width: number; overflow: number }[] = [];

            elements.forEach((el) => {
                if (el.scrollWidth > docWidth) {
                    // Exclude strictly contained elements if they don't actually cause scroll on body
                    // But scrollWidth > clientWidth is the definition of overflow. 
                    // However, we care about elements that are wider than the VIEWPORT.

                    const rect = el.getBoundingClientRect();
                    // If the element's width is larger than viewport and it is visible
                    if (rect.width > docWidth && el.tagName !== 'HTML' && el.tagName !== 'BODY') {
                        // Generate a crude selector
                        let selector = el.tagName.toLowerCase();
                        if (el.id) selector += `#${el.id}`;
                        if (el.className && typeof el.className === 'string') {
                            selector += `.${el.className.split(' ').join('.').substring(0, 50)}...`;
                        }

                        newOffenders.push({
                            selector,
                            width: rect.width,
                            overflow: rect.width - docWidth
                        });

                        // Highlight visually
                        (el as HTMLElement).style.outline = "2px solid red";
                    }
                }
            });

            if (newOffenders.length > 0) {
                console.warn("⚠️ Overflow Offenders Detect:", newOffenders);
                setOffenders(newOffenders);
            }
        };

        // Check after a short delay to allow for rendering/animations
        const timeout = setTimeout(checkOverflow, 2000);

        window.addEventListener("resize", checkOverflow);
        return () => {
            clearTimeout(timeout);
            window.removeEventListener("resize", checkOverflow);
        };
    }, []);

    if (offenders.length === 0) return null;

    return (
        <div className="fixed bottom-4 left-4 z-[9999] bg-red-900/90 text-white p-4 rounded-lg shadow-xl text-xs max-w-md overflow-auto border border-red-500 font-mono">
            <h3 className="font-bold mb-2 text-red-200">⚠️ OVERFLOW DETECTED</h3>
            <ul className="space-y-2">
                {offenders.map((o, i) => (
                    <li key={i} className="break-all border-b border-red-800 pb-1">
                        <div className="font-semibold text-red-100">{o.selector}</div>
                        <div className="flex justify-between mt-1 text-[10px] text-red-300">
                            <span>Width: {Math.round(o.width)}px</span>
                            <span>Overflow: +{Math.round(o.overflow)}px</span>
                        </div>
                    </li>
                ))}
            </ul>
            <button
                onClick={() => setOffenders([])}
                className="mt-3 w-full bg-red-800 hover:bg-red-700 py-1 rounded text-center transition-colors"
            >
                Dismiss
            </button>
        </div>
    );
}
