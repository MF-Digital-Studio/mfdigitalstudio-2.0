"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { useMemo, useRef, useState } from "react";

type ProjectStat = {
    label: string;
    value: number;
    suffix: string;
};

type Project = {
    id: number;
    slug: string;
    title: string;
    category: "WEB SİTELERİ" | "PANELLER" | "QR MENÜ";
    client: string;
    summary: string;
    image: string;
    gradient: string;
    stats: ProjectStat[];
};

const syne = Syne({
    subsets: ["latin"],
    weight: ["700", "800"],
});

const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        slug: "moda-house",
        title: "MODA HOUSE E-TİCARET",
        category: "WEB SİTELERİ",
        client: "Moda House",
        summary: "Markanın dijital vitrinini hız, estetik ve dönüşüm odaklı bir deneyime dönüştürdük.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-fuchsia-500/45 via-rose-400/35 to-orange-300/35",
        stats: [
            { label: "SEO", value: 200, suffix: "%" },
            { label: "Performans", value: 145, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
    },
    {
        id: 2,
        slug: "seyahat-ajansi",
        title: "SEYAHAT AJANSI REZERVASYON",
        category: "WEB SİTELERİ",
        client: "Rota Plus",
        summary: "Sıradanlığı kıran tipografi ve hikâye kurgusuyla rezervasyon akışını sadeleştirdik.",
        image:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-orange-400/45 via-amber-300/35 to-pink-400/35",
        stats: [
            { label: "SEO", value: 172, suffix: "%" },
            { label: "Performans", value: 133, suffix: "%" },
            { label: "Memnuniyet", value: 96, suffix: "%" },
        ],
    },
    {
        id: 3,
        slug: "finans-yonetim",
        title: "FİNANS YÖNETİM PANELİ",
        category: "PANELLER",
        client: "Pulse Fintek",
        summary: "Kritik karar ekranlarını veri yoğun ama berrak bir panel sistemine taşıdık.",
        image:
            "https://images.unsplash.com/photo-1551281044-8b0a65a2d5c3?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-lime-400/40 via-emerald-300/35 to-cyan-300/35",
        stats: [
            { label: "SEO", value: 148, suffix: "%" },
            { label: "Performans", value: 119, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },
    {
        id: 4,
        slug: "hastane-operasyon",
        title: "HASTANE OPERASYON PANELİ",
        category: "PANELLER",
        client: "MediCore",
        summary: "Klinik ve operasyon ekiplerini tek bir gerçek zamanlı karar merkezinde buluşturduk.",
        image:
            "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-pink-500/45 via-fuchsia-300/35 to-yellow-300/35",
        stats: [
            { label: "SEO", value: 131, suffix: "%" },
            { label: "Performans", value: 112, suffix: "%" },
            { label: "Memnuniyet", value: 99, suffix: "%" },
        ],
    },
    {
        id: 5,
        slug: "restoran-qr",
        title: "RESTORAN QR MENÜ",
        category: "QR MENÜ",
        client: "Lezzet Durağı",
        summary: "Müşteri deneyimini hızlandıran, sipariş süresini kısaltan görsel odaklı QR menü tasarladık.",
        image:
            "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-violet-500/40 via-fuchsia-300/30 to-amber-300/35",
        stats: [
            { label: "SEO", value: 164, suffix: "%" },
            { label: "Performans", value: 121, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },
    {
        id: 6,
        slug: "otel-qr",
        title: "OTEL ODA SERVİS QR",
        category: "QR MENÜ",
        client: "Mavi Kıyı Otel",
        summary: "Misafirlerin odadan çıkmadan sipariş verebildiği premium bir dijital menü deneyimi kurguladık.",
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-cyan-400/40 via-sky-300/30 to-fuchsia-300/35",
        stats: [
            { label: "SEO", value: 156, suffix: "%" },
            { label: "Performans", value: 117, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
    },
];

const CATEGORIES: Array<Project["category"]> = ["WEB SİTELERİ", "PANELLER", "QR MENÜ"];
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