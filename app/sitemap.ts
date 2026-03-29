import type { MetadataRoute } from "next";
import { BLOG_DATA } from "@/lib/blog-data";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { getAbsoluteUrl } from "@/lib/seo";

const staticRoutes = [
    "/",
    "/cozumler",
    "/projeler",
    "/blog",
    "/hakkimizda",
    "/iletisim",
    "/gizlilik-politikasi",
    "/kullanim-sartlari",
    "/cerez-politikasi",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
        url: getAbsoluteUrl(route),
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : route === "/iletisim" || route === "/cozumler" ? 0.9 : 0.8,
    }));

    const blogEntries: MetadataRoute.Sitemap = BLOG_DATA.map((post) => ({
        url: getAbsoluteUrl(`/blog/${post.slug}`),
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly",
        priority: 0.7,
    }));

    const projectEntries: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
        url: getAbsoluteUrl(`/projeler/${project.slug}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticEntries, ...blogEntries, ...projectEntries];
}