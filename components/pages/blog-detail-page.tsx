"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import type { BlogPost } from "@/lib/blog-data";

const syne = Syne({ subsets: ["latin", "latin-ext"], weight: ["700", "800"] });

function SpotlightCTA() {
    const rawX = useMotionValue(50);
    const rawY = useMotionValue(50);
    const x = useSpring(rawX, { stiffness: 240, damping: 30, mass: 0.6 });
    const y = useSpring(rawY, { stiffness: 240, damping: 30, mass: 0.6 });
    const flare = useMotionTemplate`radial-gradient(220px circle at ${x}% ${y}%, rgba(255,255,255,0.9), rgba(255,255,255,0.28) 42%, rgba(255,255,255,0) 74%)`;

    return (
        <motion.div style={{ backgroundImage: flare }} className="relative rounded-full p-px">
            <Link
                href="/iletisim"
                className="block overflow-hidden rounded-full border border-black/15 bg-black"
                onMouseMove={(event) => {
                    const rect = event.currentTarget.getBoundingClientRect();
                    rawX.set(Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100)));
                    rawY.set(Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100)));
                }}
                onMouseLeave={() => {
                    rawX.set(50);
                    rawY.set(50);
                }}
            >
                <span className="flex items-center justify-center rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white md:px-10 md:py-5">
                    BİZE ULAŞIN
                </span>
            </Link>
        </motion.div>
    );
}

export function BlogDetailPage({ post }: { post: BlogPost }) {
    return (
        <main className="min-h-screen bg-white text-black">
            <motion.div layoutId={post.slug} className="min-h-screen bg-white">
                <article className="mx-auto w-full max-w-384 px-6 pb-32 pt-24 md:px-10 md:pt-28">
                    <Link
                        href="/blog"
                        className="inline-flex text-lg uppercase tracking-[0.16em] text-black/40 transition hover:text-black"
                    >
                        &larr; TÜM YAZILAR
                    </Link>

                    <header className="mt-10">
                        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-black/40">
                            {post.category} &mdash; {post.date} &mdash; {post.readTime} DK OKUMA
                        </p>
                        <h1 className={`${syne.className} text-2xl font-extrabold uppercase leading-[0.92] tracking-[-0.025em] sm:text-3xl md:text-4xl lg:text-6xl`}>
                            {post.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-black/55">{post.intro}</p>
                    </header>

                    <div className="mt-12 overflow-hidden rounded-2xl border border-black/8">
                        <img src={post.image} alt={post.title} className="aspect-video w-full object-cover" />
                    </div>

                    <div className="mt-16 border-t border-black/10" />

                    <div className="mx-auto mt-14 max-w-[72ch]">
                        <div className="prose prose-lg prose-neutral prose-headings:font-extrabold prose-headings:tracking-tight prose-p:leading-[1.85] prose-p:text-black/75 prose-strong:text-black">
                            {post.body.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        <div className="mt-12 flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-black/12 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/45"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mx-auto mt-20 flex max-w-[72ch] justify-start">
                        <Link
                            href="/iletisim"
                            className="group relative flex w-64 items-center justify-center rounded-lg border border-black bg-black px-6 py-3 font-display text-base font-bold tracking-tight text-white transition-colors duration-200 ease-out hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black active:scale-95"
                        >
                            <span>Projeye Başlayalım</span>
                        </Link>
                    </div>

                </article>
            </motion.div>
        </main>
    );
}