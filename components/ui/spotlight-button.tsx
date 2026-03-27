"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";

interface SpotlightButtonProps {
    onClick?: () => void;
    href?: string;
}

export function SpotlightButton({ onClick, href }: SpotlightButtonProps) {
    const btnRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let rafId: number;
        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const target = e.target as HTMLElement;
                const { width } = target.getBoundingClientRect();
                const offset = (e as any).offsetX;
                const left = `${(offset / width) * 100}%`;
                if (spanRef.current) {
                    spanRef.current.style.setProperty('--left', left);
                }
            });
        };

        const handleMouseLeave = () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (spanRef.current) {
                spanRef.current.style.setProperty('--left', "50%");
            }
        };

        btnRef.current?.addEventListener("mousemove", handleMouseMove);
        btnRef.current?.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            btnRef.current?.removeEventListener("mousemove", handleMouseMove);
            btnRef.current?.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const buttonContent = (
        <>
            {/* Moving Spotlight */}
            <span
                ref={spanRef}
                className="absolute bg-white rounded-full h-32 w-32 -translate-x-1/2 -translate-y-1/2 transition-none"
                style={{
                    left: "var(--left, 50%)",
                    top: "50%",
                    '--left': '50%'
                } as React.CSSProperties & { '--left': string }}
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
            className="relative overflow-hidden rounded-lg bg-black px-12 py-4 text-lg font-semibold transition-all duration-300"
        >
            {buttonContent}
        </button>
    );
}
