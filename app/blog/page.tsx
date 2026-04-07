import { BlogPage } from "@/components/pages/blog-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Blog | Web Tasarım, SEO ve Dijital Büyüme",
    description: "Web tasarım, teknik SEO ve dijital büyüme üzerine güncel içerikleri MF Digital Studio blogunda okuyun.",
    path: "/blog",
});

export default function BlogIndexPage() {
    return (
        <>
            <JsonLd
                id="blog-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Blog", path: "/blog" },
                ])}
            />
            <BlogPage />
        </>
    );
}