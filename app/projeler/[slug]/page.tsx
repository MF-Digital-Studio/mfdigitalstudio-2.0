"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import {
    AnimatePresence,
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { PROJECTS_DATA, type LighthouseScores } from "@/lib/projects-data";

const syne = Syne({
    subsets: ["latin"],
    weight: ["700", "800"],
});

function CounterValue({ value, suffix }: { value: number; suffix: string }) {
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const stopListener = rounded.on("change", (latest) => {
            setDisplay(latest);
        });

        const controls = animate(motionValue, value, {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        });

        return () => {
            stopListener();
            controls.stop();
        };
    }, [motionValue, rounded, value]);

    return (
        <span className="text-2xl font-black tracking-tight text-black md:text-3xl">
            +{display}
            {suffix}
        </span>
    );
}

const LIGHTHOUSE_METRICS: Array<{ key: keyof LighthouseScores; label: string }> = [
    { key: "performance", label: "Performance" },
    { key: "accessibility", label: "Accessibility" },
    { key: "bestPractices", label: "Best Practices" },
    { key: "seo", label: "SEO" },
];

function getLighthouseTone(score: number) {
    if (score >= 90) return { text: "text-emerald-600", stroke: "stroke-emerald-500" };
    if (score >= 50) return { text: "text-amber-600", stroke: "stroke-amber-500" };
    return { text: "text-red-600", stroke: "stroke-red-500" };
}

const LighthouseScoreBadge = memo(function LighthouseScoreBadge({
    label,
    score,
}: {
    label: string;
    score: number;
}) {
    const tone = getLighthouseTone(score);
    const progress = useMotionValue(0);
    const rounded = useTransform(progress, (latest) => Math.round(latest));
    const [display, setDisplay] = useState(0);
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = useTransform(
        progress,
        (latest) => circumference * (1 - Math.max(0, Math.min(100, latest)) / 100),
    );

    useEffect(() => {
        const stopListener = rounded.on("change", (latest) => {
            setDisplay(latest);
        });

        const controls = animate(progress, score, {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        });

        return () => {
            stopListener();
            controls.stop();
        };
    }, [progress, rounded, score]);

    return (
        <div className="flex flex-col items-center gap-1.5">
            <div className="relative h-16 w-16">
                <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
                    <circle
                        cx="32"
                        cy="32"
                        r={radius}
                        fill="none"
                        strokeWidth="4"
                        className="stroke-black/10"
                    />
                    <motion.circle
                        cx="32"
                        cy="32"
                        r={radius}
                        fill="none"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className={tone.stroke}
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset,
                            transformOrigin: "50% 50%",
                            transform: "rotate(-90deg)",
                        }}
                    />
                </svg>
                <span className={`absolute inset-0 flex items-center justify-center text-xl font-semibold ${tone.text}`}>
                    {display}
                </span>
            </div>
            <p className="text-center text-sm font-semibold leading-tight text-black/80">{label}</p>
        </div>
    );
});

function SpotlightCTA() {
    const rawX = useMotionValue(50);
    const rawY = useMotionValue(50);
    const x = useSpring(rawX, { stiffness: 240, damping: 30, mass: 0.6 });
    const y = useSpring(rawY, { stiffness: 240, damping: 30, mass: 0.6 });

    const flare = useMotionTemplate`radial-gradient(220px circle at ${x}% ${y}%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.28) 42%, rgba(255, 255, 255, 0) 74%)`;

    return (
        <motion.div style={{ backgroundImage: flare }} className="relative rounded-full p-px">
            <Link
                href="/iletisim"
                className="block overflow-hidden rounded-full border border-black/15 bg-black"
                onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    const nextX = ((event.clientX - rect.left) / rect.width) * 100;
                    const nextY = ((event.clientY - rect.top) / rect.height) * 100;
                    rawX.set(Math.max(0, Math.min(100, nextX)));
                    rawY.set(Math.max(0, Math.min(100, nextY)));
                }}
                onMouseLeave={() => {
                    rawX.set(50);
                    rawY.set(50);
                }}
            >
                <span className="flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white md:px-10 md:py-5">
                    PROJENİZİ BAŞLATALIM
                </span>
            </Link>
        </motion.div>
    );
}

export default function ProjeDetayPage() {
    const params = useParams<{ slug: string }>();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const project = useMemo(
        () => PROJECTS_DATA.find((item) => item.slug === slug),
        [slug],
    );
    const previewUrl = project?.previewUrl;
    const hasPreview = Boolean(previewUrl);

    useEffect(() => {
        if (!isPreviewOpen) {
            return;
        }

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsPreviewOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEsc);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isPreviewOpen]);

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-white px-6 text-black">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Proje bulunamadı</h1>
                    <p className="mt-3 text-black/65">Aradığınız proje mevcut değil.</p>
                    <Link
                        href="/projeler"
                        className="mt-8 inline-flex rounded-full border border-black/20 px-6 py-3 text-sm font-semibold transition hover:bg-black/5"
                    >
                        Projelere Dön
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white text-black">
            <motion.div layoutId={project.slug} className="min-h-screen bg-white">
                <section className="relative mx-auto w-full max-w-384 px-6 pb-24 pt-12 md:px-10 md:pt-16">
                    {/* Back link + header */}
                    <Link
                        href="/projeler"
                        className="inline-flex text-lg uppercase tracking-[0.16em] pt-5 text-black/70 transition hover:text-black"
                    >
                        ← TÜM PROJELER
                    </Link>

                    <div className="mt-8 max-w-6xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
                            {project.category} — {project.client}
                        </p>
                        <motion.h1
                            className={`${syne.className} text-2xl font-extrabold uppercase leading-[0.9] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-6xl`}
                        >
                            {project.title}
                        </motion.h1>
                        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-lg">{project.summary}</p>

                        {hasPreview && (
                            <motion.button
                                type="button"
                                onClick={() => setIsPreviewOpen(true)}
                                animate={{
                                    boxShadow: [
                                        "0 0 0 rgba(16, 185, 129, 0)",
                                        "0 0 0.9rem rgba(16, 185, 129, 0.38)",
                                        "0 0 0 rgba(16, 185, 129, 0)",
                                    ],
                                }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                                className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/45 bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:border-black hover:bg-black hover:text-white"
                            >
                                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                                </span>
                                CANLI ONIZLEME
                            </motion.button>
                        )}
                    </div>

                    {/* Hero image — full bleed, single border, sharp corners */}
                    <div className="mt-10 overflow-hidden rounded-2xl border border-black/10">
                        <img src={project.image} alt={project.title} className="h-[70vh] w-full object-cover" />
                    </div>

                    {/* Info cards — editorial grid, no shadow, sharp borders */}
                    <div className="mt-px grid border-x border-b border-black/10 md:grid-cols-3">
                        {[
                            {
                                num: "01",
                                label: "PROJE AMACI",
                                body: "Müşteri yolculuğunu sadeleştirip etkileşim kalitesini yükselterek net performans artışı sağlamak.",
                            },
                            {
                                num: "02",
                                label: "SÜREÇ",
                                body: "Araştırma, bilgi mimarisi, tipografi kararları ve mikro etkileşimler paralel iterasyonlarla geliştirildi.",
                            },
                            {
                                num: "03",
                                label: "HİKAYEMİZ",
                                body: "Güçlü görsel anlatı ile teknik doğruluğu birleştirerek markayı sıradanlıktan ayıran bir deneyim tasarladık.",
                            },
                        ].map((item, i) => (
                            <article
                                key={item.label}
                                className={`p-6 md:p-7 ${i < 2 ? "border-b border-black/10 md:border-b-0 md:border-r" : ""}`}
                            >
                                <span className={`${syne.className} text-4xl font-extrabold text-black leading-none`}>
                                    {item.num}
                                </span>
                                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">{item.label}</p>
                                <p className="mt-2 text-sm leading-relaxed text-black/70 md:text-[15px]">{item.body}</p>
                            </article>
                        ))}
                    </div>

                    {/* Performance section */}
                    <section className="mt-20 md:mt-24">
                        {project.category === "QR MENÜ" && project.innerImage && project.innerImage2 ? (
                            /* QR Menu — two portrait mobile screenshots */
                            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center sm:gap-10">
                                {[
                                    { src: project.innerImage, label: "ANA EKRAN" },
                                    { src: project.innerImage2, label: "MENÜ PANELİ" },
                                ].map(({ src, label }, index) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: index * 0.12 }}
                                        className="flex flex-col items-center gap-3"
                                    >
                                        <div className="w-full max-w-95 overflow-hidden rounded-3xl border border-black/10 bg-neutral-100 shadow-sm lg:max-w-180">
                                            <img
                                                src={src}
                                                alt={`${project.title} — ${label}`}
                                                className="w-full"
                                            />
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">{label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            /* Web / Panel — wide screenshot + unified lighthouse metrics */
                            <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5 }}
                                    className="overflow-hidden rounded-2xl border border-black/10"
                                >
                                    <img
                                        src={project.innerImage ?? project.image}
                                        alt={`${project.title} ekran görüntüsü`}
                                        className="aspect-video w-full object-cover"
                                    />
                                </motion.div>

                                <motion.article
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.45, delay: 0.1 }}
                                    className="rounded-xl"
                                >
                                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">LIGHTHOUSE SONUÇLARI</p>

                                    {project.lighthouse ? (
                                        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                            {LIGHTHOUSE_METRICS.map(({ key, label }) => (
                                                <LighthouseScoreBadge
                                                    key={key}
                                                    label={label}
                                                    score={project.lighthouse![key]}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="mt-4 grid grid-cols-3 divide-x divide-black/8">
                                            {project.stats.map((stat) => (
                                                <div key={stat.label} className="px-3 first:pl-0 last:pr-0">
                                                    <CounterValue value={stat.value} suffix={stat.suffix} />
                                                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-black/45">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </motion.article>
                            </div>
                        )}
                    </section>

                    <section className="mt-20 flex justify-start pb-8">
                        <Link
                            href="/iletisim"
                            className="group relative w-64 px-6 py-3 cursor-pointer rounded-lg bg-black text-white font-display font-bold text-base tracking-tight transition-colors duration-200 ease-out border border-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black active:scale-95 flex items-center justify-center"
                        >
                            <span>Projeye Başlayalım</span>
                        </Link>
                    </section>
                </section>
            </motion.div>

            <AnimatePresence>
                {hasPreview && isPreviewOpen && previewUrl && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="fixed inset-0 z-50 bg-black/45 backdrop-blur-md"
                        onClick={() => setIsPreviewOpen(false)}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Canli Onizleme"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 24, scale: 0.985 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 12, scale: 0.99 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 h-screen w-screen overflow-hidden rounded-none border-0 bg-[#0f1014] shadow-2xl md:inset-1/2 md:h-[85vh] md:w-[90vw] md:max-w-400 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:border md:border-white/10"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#111319] px-4 md:h-11 md:px-5">
                                <a
                                    href={previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="truncate text-[11px] font-medium tracking-[0.14em] text-white/65 underline-offset-4 transition hover:text-white hover:underline"
                                >
                                    {previewUrl}
                                </a>

                                <button
                                    type="button"
                                    onClick={() => setIsPreviewOpen(false)}
                                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-sm text-white/80 transition hover:border-white hover:text-white"
                                    aria-label="Kapat"
                                >
                                    X
                                </button>
                            </div>

                            <iframe
                                src={previewUrl}
                                title="Canli Onizleme"
                                className="h-[calc(100%-3rem)] w-full bg-white md:h-[calc(100%-2.75rem)]"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
}
