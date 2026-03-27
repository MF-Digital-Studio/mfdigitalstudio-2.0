"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

interface Project {
    id: number;
    url: string;
    title: string;
    category: string;
}

const projects: Project[] = [
    {
        id: 1,
        url: "https://images.unsplash.com/photo-1460925895917-adf4e566b72b?w=1200&h=800&fit=crop",
        title: "E-TİCARET DEVRİMİ",
        category: "E-Commerce",
    },
    {
        id: 2,
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
        title: "AKILLI QR MENÜ",
        category: "Mobile Solutions",
    },
    {
        id: 3,
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
        title: "KURUMSAL KİMLİK",
        category: "Brand Design",
    },
    {
        id: 4,
        url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop",
        title: "DİJİTAL PAZARLAMA",
        category: "Marketing",
    },
    {
        id: 5,
        url: "https://images.unsplash.com/photo-1522869635100-ce0846a34923?w=1200&h=800&fit=crop",
        title: "HARITA ÇÖZÜMÜ",
        category: "Web Development",
    },
];

const Card = ({ project }: { project: Project }) => {
    return (
        <motion.div
            className="group relative h-[400px] sm:h-[450px] w-[80vw] sm:w-[600px] flex-shrink-0 overflow-hidden rounded-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url(${project.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Border Accent */}
            <div className="absolute inset-0 z-20 border border-white/10 rounded-2xl" />

            {/* Content - Bottom Left */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8">
                <p className="text-xs sm:text-sm uppercase tracking-widest text-white/60 mb-2 font-display font-semibold">
                    {project.category}
                </p>
                <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-none">
                    {project.title}
                </h3>
            </div>
        </motion.div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Fixed x transform: slides left from 0% to -85% as user scrolls
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black overflow-x-clip">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen bg-black flex items-center overflow-x-clip">
                <motion.div style={{ x }} className="flex gap-8">
                    {projects.map((project) => (
                        <Card key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export function FeaturedProjectsHorizontal() {
    return (
        <section className="relative bg-black overflow-x-clip">
            {/* Section Header */}
            {/* <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
                <div className="absolute inset-0 overflow-hidden -z-10">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-vibrant-purple/10 via-transparent to-transparent rounded-full blur-3xl" />
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-electric-blue/10 via-transparent to-transparent rounded-full blur-3xl" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase text-white mb-4 tracking-tight leading-none">
                        ÖNE ÇIKAN
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-vibrant-purple to-neon-green">
                            PROJELERİMİZ
                        </span>
                    </h2>

                    <p className="text-base sm:text-lg text-white/60 max-w-2xl mt-6 leading-relaxed">
                        Sektörde standartları yeniden tanımlayan, sıradanlığı unutturan dijital çalışmalarımız. Her proje bir hikaye, her hikaye bir başarı.
                    </p>

                    <p className="text-xs sm:text-sm uppercase tracking-widest text-white/40 mt-8 font-display">
                        Sağa kaydırarak keşfedin ↻
                    </p>
                </motion.div>
            </div> */}

            {/* Horizontal Scroll Carousel */}
            <HorizontalScrollCarousel />
        </section>
    );
}
