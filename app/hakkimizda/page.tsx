import { AboutPage } from "@/components/pages/about-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Hakkımızda",
    description: "MF Digital Studio'nun yaklaşımını, çalışma prensiplerini ve markalara sunduğu dijital deneyim vizyonunu keşfedin.",
    path: "/hakkimizda",
});

export default function HakkimizPage() {
    return (
        <>
            <JsonLd
                id="about-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Hakkımızda", path: "/hakkimizda" },
                ])}
            />
            <AboutPage />
        </>
    );
}
