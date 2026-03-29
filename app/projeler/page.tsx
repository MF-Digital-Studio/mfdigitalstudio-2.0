import { ProjectsPage } from "@/components/pages/projects-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Projeler",
    description: "MF Digital Studio'nun web sitesi, QR menü ve özel dijital deneyim projelerini inceleyin.",
    path: "/projeler",
});

export default function ProjectsIndexPage() {
    return (
        <>
            <JsonLd
                id="projects-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Projeler", path: "/projeler" },
                ])}
            />
            <ProjectsPage />
        </>
    );
}