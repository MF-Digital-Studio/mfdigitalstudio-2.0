"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CATEGORIES, PROJECTS_DATA, type Project } from "@/lib/projects-data";
import { DemoBadge } from "@/components/ui/demo-badge";

const syne = Syne({
    subsets: ["latin", "latin-ext"],
    weight: ["700", "800"],
});

const CATEGORY_META: Record<Project["category"], string> = {
    "WEB SİTELERİ": "Kurumsal ve e-ticaret yüzlerinde marka kimliğini premium bir anlatıyla birleştiren projeler.",
    "QR MENÜ": "Temassız sipariş deneyimini estetik ve performans odaklı akışlarla güçlendiren çözümler.",
};

type SliderMetrics = {
    slidesPerView: number;
    totalSteps: number;
    maxStep: number;
    snapOffsets: number[];
    isMobile: boolean;
};

function clamp(value: number, min: number, max: number) {
    return Math.max(min, Math.min(max, value));
}

function getNearestStep(scrollLeft: number, snapOffsets: number[], maxStep: number) {
    if (snapOffsets.length === 0) {
        return 0;
    }

    let nearest = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index < snapOffsets.length; index += 1) {
        const distance = Math.abs(snapOffsets[index] - scrollLeft);
        if (distance < minDistance) {
            minDistance = distance;
            nearest = index;
        }
    }

    return clamp(nearest, 0, maxStep);
}

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projeler/${project.slug}`} className="block">
            <motion.article
                layoutId={project.slug}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="relative overflow-hidden rounded-4xl border border-black/10 bg-white">
                    {project.demoLabel && (
                        <div className="absolute left-4 top-4 z-10">
                            <DemoBadge label={project.demoLabel} className="bg-white/88" />
                        </div>
                    )}
                    <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-8/5 h-auto w-full object-cover"
                    />
                </div>

                <div className="mt-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-black/55">{project.client}</p>
                    <h3 className={`${syne.className} mt-4 text-2xl font-extrabold uppercase leading-tight tracking-[-0.02em] md:text-3xl`}>
                        {project.title}
                    </h3>
                    <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-black/65">{project.summary}</p>
                </div>
            </motion.article>
        </Link>
    );
}

function CategorySlider({ category, projects }: { category: Project["category"]; projects: Project[] }) {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const [activeStep, setActiveStep] = useState(0);
    const [metrics, setMetrics] = useState<SliderMetrics>({
        slidesPerView: 1,
        totalSteps: Math.max(projects.length, 1),
        maxStep: Math.max(projects.length - 1, 0),
        snapOffsets: [],
        isMobile: true,
    });

    const syncActiveStep = useCallback(
        (nextMetrics?: SliderMetrics) => {
            const node = sliderRef.current;
            const source = nextMetrics ?? metrics;

            if (!node || source.snapOffsets.length === 0) {
                return;
            }

            const step = getNearestStep(node.scrollLeft, source.snapOffsets, source.maxStep);
            setActiveStep(step);
        },
        [metrics],
    );

    const computeMetrics = useCallback(() => {
        const node = sliderRef.current;
        if (!node || projects.length === 0) {
            return;
        }

        const cards = Array.from(node.children) as HTMLElement[];
        if (cards.length === 0) {
            return;
        }

        const firstCardWidth = cards[0].offsetWidth;
        const computedGap = cards.length > 1
            ? cards[1].offsetLeft - cards[0].offsetLeft - cards[0].offsetWidth
            : 0;
        const safeGap = Math.max(0, computedGap);
        const trackUnit = Math.max(firstCardWidth + safeGap, 1);
        const estimatedSlidesPerView = Math.max(1, Math.floor((node.clientWidth + safeGap + 0.5) / trackUnit));
        const slidesPerView = Math.min(projects.length, estimatedSlidesPerView);
        const totalSteps = Math.max(projects.length - slidesPerView + 1, 1);
        const maxStep = totalSteps - 1;
        const snapOffsets = cards.slice(0, totalSteps).map((card) => card.offsetLeft);
        const nextMetrics: SliderMetrics = {
            slidesPerView,
            totalSteps,
            maxStep,
            snapOffsets,
            isMobile: window.innerWidth < 768,
        };

        setMetrics((previousMetrics) => {
            const same = previousMetrics.slidesPerView === nextMetrics.slidesPerView
                && previousMetrics.totalSteps === nextMetrics.totalSteps
                && previousMetrics.maxStep === nextMetrics.maxStep
                && previousMetrics.isMobile === nextMetrics.isMobile
                && previousMetrics.snapOffsets.length === nextMetrics.snapOffsets.length
                && previousMetrics.snapOffsets.every((offset, index) => offset === nextMetrics.snapOffsets[index]);

            return same ? previousMetrics : nextMetrics;
        });

        setActiveStep((previousStep) => clamp(getNearestStep(node.scrollLeft, snapOffsets, maxStep), 0, maxStep));
    }, [projects.length]);

    useEffect(() => {
        computeMetrics();

        const node = sliderRef.current;
        if (!node) {
            return;
        }

        const observer = new ResizeObserver(() => {
            computeMetrics();
        });

        observer.observe(node);
        window.addEventListener("resize", computeMetrics);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", computeMetrics);
        };
    }, [computeMetrics]);

    useEffect(() => {
        setActiveStep((previousStep) => clamp(previousStep, 0, metrics.maxStep));
    }, [metrics.maxStep]);

    const scrollToStep = (step: number) => {
        const node = sliderRef.current;
        if (!node) {
            return;
        }

        const boundedStep = clamp(step, 0, metrics.maxStep);
        const nextOffset = metrics.snapOffsets[boundedStep] ?? 0;
        node.scrollTo({ left: nextOffset, behavior: "smooth" });
        setActiveStep(boundedStep);
    };

    const canGoPrev = activeStep > 0;
    const canGoNext = activeStep < metrics.maxStep;
    const showMobileHint = metrics.isMobile && canGoNext;

    return (
        <section className="space-y-6 md:space-y-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className={`${syne.className} relative z-0 text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-3xl md:text-4xl lg:text-5xl`}>
                        {category}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base">
                        {CATEGORY_META[category]}
                    </p>
                </div>

                <div className="hidden items-center gap-2 md:flex">
                    <button
                        type="button"
                        onClick={() => scrollToStep(activeStep - 1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        disabled={!canGoPrev}
                        aria-label="Önceki"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={() => scrollToStep(activeStep + 1)}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
                        disabled={!canGoNext}
                        aria-label="Sonraki"
                    >
                        →
                    </button>
                </div>
            </div>

            <div className="relative">
                <div
                    ref={sliderRef}
                    onScroll={() => syncActiveStep()}
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [touch-action:pan-x] md:gap-8 [&::-webkit-scrollbar]:hidden"
                >
                    {projects.map((project) => (
                        <div key={project.id} className="w-[86vw] min-w-[86vw] snap-start sm:w-[78vw] sm:min-w-[78vw] md:w-[48vw] md:min-w-[48vw] lg:w-[calc((100%-4rem)/3)] lg:min-w-[calc((100%-4rem)/3)]">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-between gap-4">
                <div className="md:hidden">
                    {showMobileHint && (
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50">
                            Kaydırarak devam edin
                        </p>
                    )}
                </div>

                <div className="ml-auto flex items-center gap-3">
                    <div className="flex items-center gap-1.5 md:hidden" aria-hidden="true">
                        {Array.from({ length: metrics.totalSteps }).map((_, index) => (
                            <span
                                key={`${category}-step-${index}`}
                                className={`h-1.5 rounded-full transition-all ${index === activeStep ? "w-5 bg-black/65" : "w-1.5 bg-black/20"}`}
                            />
                        ))}
                    </div>
                    <p className="text-right text-xs font-medium tracking-[0.2em] text-black/55">
                        {activeStep + 1} / {metrics.totalSteps}
                    </p>
                </div>
            </div>
        </section>
    );
}

function QRGridSection({ category, projects }: { category: Project["category"]; projects: Project[] }) {
    return (
        <section className="space-y-6 md:space-y-8">
            <div>
                <h2 className={`${syne.className} relative z-0 text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-3xl md:text-4xl lg:text-5xl`}>
                    {category}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base">
                    {CATEGORY_META[category]}
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

export function ProjectsPage() {
    const groupedProjects = useMemo(
        () =>
            CATEGORIES.map((category) => ({
                category,
                projects: PROJECTS_DATA.filter((project) => project.category === category),
            })),
        [],
    );

    return (
        <main className="min-h-screen bg-white text-black">
            <section className="relative mx-auto w-full max-w-384 px-6 pb-28 pt-14 md:px-10 md:pt-20">
                <header className="mb-18 md:mb-24">
                    <h1 className={`${syne.className} pt-5 text-[1.5rem] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
                        ÖNE ÇIKAN <br />PROJELERİMİZ
                    </h1>
                </header>

                <div className="space-y-24 md:space-y-32">
                    {groupedProjects.map((group) =>
                        group.category === "QR MENÜ" ? (
                            <QRGridSection key={group.category} category={group.category} projects={group.projects} />
                        ) : (
                            <CategorySlider key={group.category} category={group.category} projects={group.projects} />
                        ),
                    )}
                </div>
            </section>
        </main>
    );
}