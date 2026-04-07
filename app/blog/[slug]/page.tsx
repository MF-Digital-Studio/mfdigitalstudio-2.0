import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/pages/blog-detail-page";
import { JsonLd } from "@/components/seo/json-ld";
import { BLOG_DATA, getBlogPostBySlug } from "@/lib/blog-data";
import { createArticleSchema, createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

type PageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return BLOG_DATA.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return createPageMetadata({
            title: "Yazı bulunamadı",
            description: "Aradığınız blog yazısı bulunamadı.",
            path: `/blog/${slug}`,
            noIndex: true,
        });
    }

    return createPageMetadata({
        title: `${post.title} | MF Digital Studio Blog`,
        description: `${post.title} hakkında özet bilgiler ve uygulanabilir içgörüler. Web tasarım, SEO ve dijital büyüme odağında içerik.`,
        path: `/blog/${post.slug}`,
        image: post.image,
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <>
            <JsonLd
                id="blog-post-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Blog", path: "/blog" },
                    { name: post.title, path: `/blog/${post.slug}` },
                ])}
            />
            <JsonLd
                id="blog-post-article"
                data={createArticleSchema({
                    title: post.title,
                    description: post.snippet,
                    path: `/blog/${post.slug}`,
                    image: post.image,
                    publishedAt: post.publishedAt,
                    tags: post.tags,
                })}
            />
            <BlogDetailPage post={post} />
        </>
    );
}
