"use client";

import { useRef } from "react";
import type { CSSProperties, MouseEvent as ReactMouseEvent } from "react";
import Link from "next/link";

interface SpotlightButtonProps {
    onClick?: () => void;
    href?: string;
}

export function SpotlightButton({ onClick, href }: SpotlightButtonProps) {
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    const handleMouseMove = (e: ReactMouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const nextX = `${Math.max(0, Math.min(100, x))}%`;

        if (spanRef.current) {
            spanRef.current.style.setProperty("--left", nextX);
        }
    };

    const handleMouseLeave = () => {
        if (spanRef.current) {
            spanRef.current.style.setProperty("--left", "50%");
        }
    };

    const buttonContent = (
        <>
            {/* Moving Spotlight */}
            <span
                ref={spanRef}
                className="pointer-events-none absolute h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white transition-[left] duration-150 ease-out"
                style={{
                    left: "var(--left, 50%)",
                    top: "50%",
                    "--left": "50%",
                } as CSSProperties & { "--left": string }}
            />

            {/* Text with mix-blend-difference */}
            <span className="pointer-events-none relative z-10 mix-blend-difference text-white">
                Bize Ulaşın
            </span>
        </>
    );

    if (href) {
        return (
            <Link
                ref={btnRef as any}
                href={href}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative overflow-hidden rounded-lg bg-black px-12 py-4 text-lg font-semibold transition-all duration-300 inline-block"
            >
                {buttonContent}
            </Link>
        );
    }

    return (
        <button
            ref={btnRef}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden rounded-lg bg-black px-12 py-4 text-lg font-semibold transition-all duration-300"
        >
            {buttonContent}
        </button>
    );
}
