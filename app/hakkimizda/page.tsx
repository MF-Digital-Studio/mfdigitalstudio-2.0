import { AboutPage } from "@/components/pages/about-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Hakkımızda | MF Digital Studio",
    description: "MF Digital Studio’nun çalışma yaklaşımını, uzmanlık alanlarını ve dijital çözüm anlayışını keşfedin.",
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
