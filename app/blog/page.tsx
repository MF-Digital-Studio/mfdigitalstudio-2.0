import { BlogPage } from "@/components/pages/blog-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
    title: "Blog",
    description: "Web sitesi, SEO, dijital görünürlük ve dönüşüm odaklı içerikleri MF Digital Studio blogunda keşfedin.",
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