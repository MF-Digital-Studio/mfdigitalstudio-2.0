import { SolutionsPage } from "@/components/pages/solutions-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Çözümler",
    description: "Özel web siteleri, yönetim panelleri, QR menüler ve teknik SEO çözümlerimizi keşfedin.",
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
