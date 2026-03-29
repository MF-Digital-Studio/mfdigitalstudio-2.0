"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";
import { BLOG_DATA, type BlogPost } from "@/lib/blog-data";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

function BlogCard({
    post,
    aspectClass = "aspect-video",
}: {
    post: BlogPost;
    aspectClass?: string;
}) {
    return (
        <Link href={`/blog/${post.slug}`} className="block h-full">
            <motion.article
                layoutId={post.slug}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white"
            >
                <div
                    className={`pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br ${post.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className={`relative overflow-hidden ${aspectClass}`}>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>

                <div className="relative flex flex-1 flex-col p-5 md:p-6">
                    <div className="flex items-center gap-3">
                        <span className="rounded-full border border-black/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-black/50">
                            {post.category}
                        </span>
                        <span className="text-[10px] text-black/30">{post.readTime} dk</span>
                    </div>

                    <h2 className={`${syne.className} mt-3 text-base font-extrabold uppercase leading-tight tracking-[-0.02em] text-black md:text-lg`}>
                        {post.title}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-black/55">
                        {post.snippet}
                    </p>

                    <p className="mt-4 text-[11px] text-black/30">{post.date}</p>
                </div>
            </motion.article>
        </Link>
    );
}

export function BlogPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <section className="mx-auto w-full max-w-384 px-6 pb-28 pt-24 md:px-10 md:pt-28">
                <header className="mb-14 md:mb-20">
                    <h1 className={`${syne.className} text-[2rem] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-8xl`}>
                        BLOG
                    </h1>
                </header>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {BLOG_DATA.map((post) => (
                        <BlogCard key={post.id} post={post} aspectClass="aspect-video" />
                    ))}
                </div>
            </section>
        </main>
    );
}