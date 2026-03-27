"use client";

import Link from "next/link";
import { Syne } from "next/font/google";
import { motion } from "framer-motion";

const syne = Syne({ subsets: ["latin"], weight: ["700", "800"] });

type BlogPost = {
    id: number;
    slug: string;
    title: string;
    category: string;
    snippet: string;
    date: string;
    readTime: number;
    image: string;
    gradient: string;
};

const BLOG_DATA: BlogPost[] = [
    {
        id: 1,
        slug: "web-sitesi-gerekli-mi",
        title: "BİR İŞLETME İÇİN WEB SİTESİ GERÇEKTEN GEREKLİ Mİ?",
        category: "WEB SİTESİ",
        snippet: "2026'da web sitesi olmayan işletme, adresi olmayan hayalet dükkân gibidir. Sosyal medyanın sunamadığı kontrol ve veri mülkiyeti.",
        date: "20 Mart 2026",
        readTime: 5,
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-blue-400/40 via-indigo-400/30 to-purple-300/25",
    },
    {
        id: 2,
        slug: "instagram-yeterli-mi",
        title: "SADECE INSTAGRAM İLE MÜŞTERİLERE ULAŞMAK MÜMKÜN MÜ?",
        category: "SOSYAL MEDYA",
        snippet: "Instagram harika bir vitrin — ama sürdürülebilir bir satış kanalı değil. 2026'da kiralık mülkün tuzakları ve kalıcı çözüm.",
        date: "17 Mart 2026",
        readTime: 6,
        image: "/instagram-blog.jpg",
        gradient: "from-pink-500/40 via-rose-400/30 to-orange-300/25",
    },
    {
        id: 3,
        slug: "google-ust-siralara-cikmak",
        title: "GOOGLE'DA ÜST SIRALARA ÇIKMAK İÇİN TEMEL ADIMLAR",
        category: "SEO",
        snippet: "2026 SEO standartları: E-E-A-T, sesli arama, yapılandırılmış veri. Anahtar kelime doldurmak artık işe yaramıyor, ceza getiriyor.",
        date: "14 Mart 2026",
        readTime: 7,
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-emerald-400/40 via-cyan-400/30 to-teal-300/25",
    },
    {
        id: 4,
        slug: "web-sitesi-satis-arttirir",
        title: "İYİ BİR WEB SİTESİ NEDEN SATIŞ ARTIRIR?",
        category: "DÖNÜŞÜM",
        snippet: "Dijital sürtünmeyi azaltmak, kişiselleştirme, 7/24 chatbot ve psikolojik tetikleyiciler — satışın arkasındaki gerçek formül.",
        date: "10 Mart 2026",
        readTime: 6,
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-violet-500/40 via-purple-400/30 to-pink-300/25",
    },
    {
        id: 5,
        slug: "kucuk-isletme-dijital-yatirim",
        title: "KÜÇÜK İŞLETMELER İÇİN EN MANTIKLI DİJİTAL YATIRIM NEDİR?",
        category: "STRATEJİ",
        snippet: "Her kuruşun ROI sağlaması gerektiğinde en akıllı seçim: yerel SEO, içerik pazarlaması ve e-posta — reklama mahkum olmadan büyümek.",
        date: "6 Mart 2026",
        readTime: 5,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-amber-400/40 via-orange-400/30 to-yellow-300/25",
    },
    {
        id: 6,
        slug: "yapay-zeka-web-sitesi",
        title: "YAPAY ZEKÂ ALGORİTMALARININ İŞLETMENİZİ TANIMASI İÇİN WEB SİTESİ ŞART MI?",
        category: "YAPAY ZEKÂ",
        snippet: "ChatGPT, Gemini ve Apple Intelligence artık satın alma asistanı. Yapay zekânın sizi önermesi için web sitenizde doğru veri şart.",
        date: "2 Mart 2026",
        readTime: 6,
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-sky-400/40 via-blue-400/30 to-indigo-300/25",
    },
];

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
                {/* Gradient halo on hover */}
                <div
                    className={`pointer-events-none absolute -inset-4 rounded-3xl bg-linear-to-br ${post.gradient} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                {/* Image */}
                <div className={`relative overflow-hidden ${aspectClass}`}>
                    <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                </div>

                {/* Text block */}
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

export default function BlogPage() {
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