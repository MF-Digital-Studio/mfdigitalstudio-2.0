import { ContactPage } from "@/components/pages/contact-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "İletişim",
    description: "MF Digital Studio ile iletişime geçin; web sitesi, QR menü, panel ve teknik SEO ihtiyaçlarınızı birlikte planlayalım.",
    path: "/iletisim",
});

export default function IletisimPage() {
    return (
        <>
            <JsonLd
                id="contact-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "İletişim", path: "/iletisim" },
                ])}
            />
            <ContactPage />
        </>
    );
}
