import { SolutionsPage } from "@/components/pages/solutions-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Dijital Çözümler | Web Tasarım, QR Menü ve SEO",
    description: "İşletmenize özel web tasarım, QR menü, yönetim paneli ve teknik SEO çözümlerimizi tek sayfada keşfedin.",
    path: "/cozumler",
});

export default function CozumlerPage() {
    return (
        <>
            <JsonLd
                id="solutions-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Çözümler", path: "/cozumler" },
                ])}
            />
            <SolutionsPage />
        </>
    );
}
