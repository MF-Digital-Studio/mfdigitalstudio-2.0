import { ProjectsPage } from "@/components/pages/projects-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Projelerimiz | Web Tasarım ve QR Menü Referansları",
    description: "MF Digital Studio tarafından geliştirilen web tasarım ve QR menü projelerini inceleyin, farklı sektörlerden referansları keşfedin.",
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