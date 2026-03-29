import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "@/components/pages/project-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { createBreadcrumbSchema, createCreativeWorkSchema, createPageMetadata } from "@/lib/seo";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return PROJECTS_DATA.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = PROJECTS_DATA.find((item) => item.slug === slug);

    if (!project) {
        return createPageMetadata({
            title: "Proje bulunamadı",
            description: "Aradığınız proje bulunamadı.",
            path: `/projeler/${slug}`,
            noIndex: true,
        });
    }

    return createPageMetadata({
        title: project.title,
        description: project.summary,
        path: `/projeler/${project.slug}`,
        image: project.image,
    });
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = PROJECTS_DATA.find((item) => item.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <JsonLd
                id="project-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Projeler", path: "/projeler" },
                    { name: project.title, path: `/projeler/${project.slug}` },
                ])}
            />
            <JsonLd
                id="project-creative-work"
                data={createCreativeWorkSchema({
                    title: project.title,
                    description: project.summary,
                    path: `/projeler/${project.slug}`,
                    image: project.image,
                    category: project.category,
                    client: project.client,
                })}
            />
            <ProjectDetailPage project={project} />
        </>
    );
}
