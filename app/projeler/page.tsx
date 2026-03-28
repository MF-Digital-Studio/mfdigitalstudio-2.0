"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { CATEGORIES, PROJECTS_DATA, type Project } from "@/lib/projects-data";

const syne = Syne({
    subsets: ["latin"],
    weight: ["700", "800"],
});

const CATEGORY_META: Record<Project["category"], string> = {
    "WEB SİTELERİ": "Kurumsal ve e-ticaret yüzlerinde marka kimliğini premium bir anlatıyla birleştiren projeler.",
    PANELLER: "Karmaşık operasyonları sadeleştiren, karar hızını artıran yönetim ekranları.",
    "QR MENÜ": "Temassız sipariş deneyimini estetik ve performans odaklı akışlarla güçlendiren çözümler.",
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <Link href={`/projeler/${project.slug}`} className="block">
            <motion.article
                layoutId={project.slug}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="overflow-hidden rounded-4xl border border-black/10 bg-white">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="aspect-8/5 h-auto w-full object-cover"
                    />
                </div>

                <div className="mt-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-black/55">{project.client}</p>

                    <div className="mt-3">
                        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/45">
                            PERFORMANS VERİLERİ
                        </p>
                        <div className="grid grid-cols-3 gap-2">
                            {project.stats.map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-lg font-black tracking-tight text-black md:text-xl">
                                        +{stat.value}{stat.suffix}
                                    </p>
                                    <p className="text-[10px] uppercase tracking-[0.12em] text-black/50">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const maxIndex = Math.max(projects.length - 1, 0);

    const syncCurrentIndex = () => {
        const node = sliderRef.current;
        if (!node || projects.length === 0) {
            return;
        }

        const firstCard = node.firstElementChild as HTMLElement | null;
        const cardWidth = firstCard?.offsetWidth ?? node.clientWidth;
        const gap = window.innerWidth >= 768 ? 32 : 16;
        const next = Math.round(node.scrollLeft / (cardWidth + gap));
        const bounded = Math.max(0, Math.min(maxIndex, next));

        setCurrentIndex(bounded);
    };

    const scrollToIndex = (index: number) => {
        const node = sliderRef.current;
        if (!node) {
            return;
        }

        const bounded = Math.max(0, Math.min(maxIndex, index));
        const target = node.children[bounded] as HTMLElement | undefined;

        if (!target) {
            return;
        }

        node.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
        setCurrentIndex(bounded);
    };

    const nextSlide = () => {
        scrollToIndex(currentIndex + 1);
    };

    const prevSlide = () => {
        scrollToIndex(currentIndex - 1);
    };

    return (
        <section className="space-y-6 md:space-y-8">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2
                        className={`${syne.className} relative z-0 text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-4xl md:text-5xl lg:text-6xl`}
                    >
                        {category}
                    </h2>
                    <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base">
                        {CATEGORY_META[category]}
                    </p>
                </div>

                <div className="hidden items-center gap-2 md:flex">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white disabled:opacity-30"
                        disabled={currentIndex <= 0}
                        aria-label="Önceki"
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white disabled:opacity-30"
                        disabled={currentIndex >= maxIndex}
                        aria-label="Sonraki"
                    >
                        →
                    </button>
                </div>
            </div>

            <div
                ref={sliderRef}
                onScroll={syncCurrentIndex}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] md:gap-8 [&::-webkit-scrollbar]:hidden"
            >
                {projects.map((project) => (
                    <div key={project.id} className="w-[84vw] min-w-[84vw] snap-start md:w-[48vw] md:min-w-[48vw] lg:w-[calc((100%-4rem)/3)] lg:min-w-[calc((100%-4rem)/3)]">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            <p className="text-right text-xs font-medium tracking-[0.2em] text-black/55">
                {currentIndex + 1} / {projects.length}
            </p>
        </section>
    );
}

function QRGridSection({ category, projects }: { category: Project["category"]; projects: Project[] }) {
    return (
        <section className="space-y-6 md:space-y-8">
            <div>
                <h2
                    className={`${syne.className} relative z-0 text-3xl font-extrabold uppercase tracking-[-0.03em] text-black sm:text-4xl md:text-5xl lg:text-6xl`}
                >
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

export default function ProjelerPage() {
    const groupedProjects = useMemo(() => {
        return CATEGORIES.map((category) => ({
            category,
            projects: PROJECTS_DATA.filter((project) => project.category === category),
        }));
    }, []);

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
                        )
                    )}
                </div>
            </section>
        </main>
    );
}