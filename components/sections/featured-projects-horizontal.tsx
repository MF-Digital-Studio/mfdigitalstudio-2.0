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
                <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-black uppercase text-white leading-none">
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
            <HorizontalScrollCarousel />
        </section>
    );
}
