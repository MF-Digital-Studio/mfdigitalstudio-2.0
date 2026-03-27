"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import {
    animate,
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

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

    const project = useMemo(
        () => PROJECTS_DATA.find((item) => item.slug === slug),
        [slug],
    );

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
                        <h2 className={`${syne.className} text-4xl font-bold uppercase tracking-[-0.03em] md:text-6xl`}>
                            PERFORMANS GALERİSİ
                        </h2>

                        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
                            {/* Single project image */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden rounded-2xl border border-black/10"
                            >
                                <img src={project.image} alt={project.title} className="aspect-video w-full object-cover" />
                            </motion.div>

                            {/* Stat cards */}
                            <div className="space-y-4 lg:pt-6">
                                {(["DESKTOP GÖRÜNÜMÜ", "MOBİL GÖRÜNÜM"] as const).map((label, index) => (
                                    <motion.article
                                        key={label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.45, delay: index * 0.1 }}
                                        className="rounded-xl border border-black/10 p-5"
                                    >
                                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40">{label}</p>

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
                                    </motion.article>
                                ))}
                            </div>
                        </div>
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
        </main>
    );
}
