"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FEATURED_PROJECTS, type Project } from "@/lib/projects-data";

const Card = ({ project }: { project: Project }) => {
    return (
        <motion.div
            className="group relative h-100 w-[80vw] shrink-0 overflow-hidden rounded-2xl sm:h-112.5 sm:w-150"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            {/* Background Image */}
            <div
                style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

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
                    {FEATURED_PROJECTS.map((project) => (
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
