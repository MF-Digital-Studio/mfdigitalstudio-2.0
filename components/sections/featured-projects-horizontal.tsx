"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FEATURED_PROJECTS, type Project } from "@/lib/projects-data";

const Card = ({ project }: { project: Project }) => {
    return (
        <Link href={`/projeler/${project.slug}`} className="block">
            <article className="group relative h-100 w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-112.5 sm:w-150">
                <div
                    style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 z-20 rounded-2xl border border-white/10" />

                <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                    <p className="mb-2 font-display text-xs font-semibold uppercase tracking-widest text-white/60 sm:text-sm">
                        {project.category}
                    </p>
                    <h3 className="font-display text-xl font-black uppercase leading-none text-white sm:text-2xl lg:text-3xl">
                        {project.title}
                    </h3>
                </div>
            </article>
        </Link>
    );
};

function DesktopHorizontalScrollCarousel() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [sectionHeight, setSectionHeight] = useState("220vh");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const rawX = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
    const x = useSpring(rawX, {
        stiffness: 130,
        damping: 32,
        mass: 0.22,
    });

    const updateMeasurements = useCallback(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) {
            return;
        }

        const viewportWidth = viewport.clientWidth;
        const trackWidth = track.scrollWidth;
        const nextMaxTranslate = Math.max(trackWidth - viewportWidth, 0);

        setMaxTranslate(nextMaxTranslate);

        const viewportHeight = Math.max(window.innerHeight, 1);
        const scrollDistance = Math.max(nextMaxTranslate + viewportHeight, viewportHeight * 1.6);
        setSectionHeight(`${scrollDistance}px`);
    }, []);

    useEffect(() => {
        updateMeasurements();

        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) {
            return;
        }

        const observer = new ResizeObserver(() => {
            window.requestAnimationFrame(updateMeasurements);
        });

        observer.observe(viewport);
        observer.observe(track);
        window.addEventListener("resize", updateMeasurements);
        window.addEventListener("orientationchange", updateMeasurements);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateMeasurements);
            window.removeEventListener("orientationchange", updateMeasurements);
        };
    }, [updateMeasurements]);

    return (
        <section ref={sectionRef} className="relative hidden bg-black md:block" style={{ height: sectionHeight }}>
            <div ref={viewportRef} className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    ref={trackRef}
                    style={{
                        x,
                        willChange: "transform",
                        transform: "translate3d(0,0,0)",
                        backfaceVisibility: "hidden",
                    }}
                    className="flex gap-8 pl-6 pr-16 lg:pl-10"
                >
                    {FEATURED_PROJECTS.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function MobileHorizontalScrollCarousel() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const viewportRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [maxTranslate, setMaxTranslate] = useState(0);
    const [sectionHeight, setSectionHeight] = useState("180svh");

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const rawX = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
    const x = useTransform(rawX, (value) => Math.round(value));

    const updateMeasurements = useCallback(() => {
        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) {
            return;
        }

        const viewportWidth = viewport.clientWidth;
        const trackWidth = track.scrollWidth;
        const nextMaxTranslate = Math.max(trackWidth - viewportWidth, 0);

        setMaxTranslate(nextMaxTranslate);

        const layoutViewportHeight = Math.max(document.documentElement.clientHeight, 1);
        const scrollDistance = Math.max(nextMaxTranslate + layoutViewportHeight * 0.8, layoutViewportHeight * 1.35);
        setSectionHeight(`${Math.round(scrollDistance)}px`);
    }, []);

    useEffect(() => {
        updateMeasurements();

        const viewport = viewportRef.current;
        const track = trackRef.current;
        if (!viewport || !track) {
            return;
        }

        const observer = new ResizeObserver(() => {
            window.requestAnimationFrame(updateMeasurements);
        });

        observer.observe(viewport);
        observer.observe(track);
        window.addEventListener("resize", updateMeasurements);
        window.addEventListener("orientationchange", updateMeasurements);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", updateMeasurements);
            window.removeEventListener("orientationchange", updateMeasurements);
        };
    }, [updateMeasurements]);

    return (
        <section ref={sectionRef} className="relative bg-black md:hidden" style={{ height: sectionHeight }}>
            <div ref={viewportRef} className="sticky top-0 flex h-svh items-center overflow-hidden">
                <motion.div
                    ref={trackRef}
                    style={{
                        x,
                        willChange: "transform",
                        transform: "translate3d(0,0,0)",
                        backfaceVisibility: "hidden",
                    }}
                    className="flex gap-4 px-4"
                >
                    {FEATURED_PROJECTS.map((project) => (
                        <div key={project.id} className="w-[86vw] min-w-[86vw]">
                            <Card project={project} />
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-6 flex items-center justify-end px-4">
                <div className="h-px w-14 bg-linear-to-r from-transparent via-white/45 to-transparent" />
            </div>
        </section>
    );
}

export function FeaturedProjectsHorizontal() {
    if (FEATURED_PROJECTS.length === 0) {
        return null;
    }

    return (
        <section className="relative overflow-x-clip bg-black">
            <MobileHorizontalScrollCarousel />
            <DesktopHorizontalScrollCarousel />
        </section>
    );
}
