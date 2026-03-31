import type { Metadata } from "next";

type PageMetadataInput = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    noIndex?: boolean;
};

type BreadcrumbItem = {
    name: string;
    path: string;
};

export const siteConfig = {
    name: "MF Digital Studio",
    shortName: "MF Digital Studio",
    url: "https://www.mfdigitalstudio.com",
    description:
        "Özel web tasarımı, yönetim panelleri ve SEO çözümleriyle markanızı dijitalde profesyonel bir görünüme kavuşturuyoruz.",
    locale: "tr_TR",
    email: "info@mfdigitalstudio.com",
    phoneNumbers: ["+90 537 033 95 56", "+90 531 660 40 02"],
    socialLinks: [
        "https://www.instagram.com/mf.digitalstudio/",
        "https://www.linkedin.com/company/mfdigitalstudio",
    ],
    defaultOgImage: "/og-image.png",
    defaultTwitterImage: "/og-image.png",
} as const;

function ensureLeadingSlash(pathname: string) {
    if (!pathname || pathname === "/") {
        return "/";
    }

    return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getAbsoluteUrl(pathname = "/") {
    const normalizedPath = ensureLeadingSlash(pathname);
    return new URL(normalizedPath, siteConfig.url).toString();
}

function resolveMetadataImage(image?: string) {
    if (!image) {
        return siteConfig.defaultOgImage;
    }

    if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
    }

    return getAbsoluteUrl(image);
}

export function createPageMetadata({
    title,
    description,
    path = "/",
    image,
    noIndex = false,
}: PageMetadataInput): Metadata {
    const canonical = ensureLeadingSlash(path);
    const absoluteUrl = getAbsoluteUrl(canonical);
    const metadataImage = resolveMetadataImage(image);

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        robots: noIndex
            ? {
                index: false,
                follow: false,
                googleBot: {
                    index: false,
                    follow: false,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                    "max-video-preview": -1,
                },
            }
            : {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    "max-image-preview": "large",
                    "max-snippet": -1,
                    "max-video-preview": -1,
                },
            },
        openGraph: {
            type: "website",
            locale: siteConfig.locale,
            url: absoluteUrl,
            siteName: siteConfig.name,
            title,
            description,
            images: [
                {
                    url: metadataImage,
                    alt: `${title} | ${siteConfig.name}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [metadataImage],
        },
    };
}

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: getAbsoluteUrl(item.path),
        })),
    };
}

export function createOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: {
            "@type": "ImageObject",
            url: getAbsoluteUrl("/logo.png"),
        },
        email: siteConfig.email,
        sameAs: [...siteConfig.socialLinks],
        contactPoint: siteConfig.phoneNumbers.map((telephone) => ({
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone,
            areaServed: "TR",
            availableLanguage: ["tr"],
        })),
    };
}

export function createWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "tr",
        publisher: {
            "@id": `${siteConfig.url}/#organization`,
        },
    };
}

export function createProfessionalServiceSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#service`,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        image: getAbsoluteUrl("/logo.png"),
        areaServed: "TR",
        serviceType: [
            "Özel web sitesi geliştirme",
            "Yönetim paneli geliştirme",
            "QR menü çözümleri",
            "Teknik SEO altyapısı",
        ],
        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },
    };
}

export function createArticleSchema(input: {
    title: string;
    description: string;
    path: string;
    image?: string;
    publishedAt: string;
    tags?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "@id": `${getAbsoluteUrl(input.path)}#article`,
        headline: input.title,
        description: input.description,
        inLanguage: "tr",
        mainEntityOfPage: getAbsoluteUrl(input.path),
        url: getAbsoluteUrl(input.path),
        image: [resolveMetadataImage(input.image)],
        datePublished: input.publishedAt,
        dateModified: input.publishedAt,
        author: {
            "@type": "Organization",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.name,
        },
        publisher: {
            "@id": `${siteConfig.url}/#organization`,
        },
        keywords: input.tags?.join(", "),
    };
}

export function createCreativeWorkSchema(input: {
    title: string;
    description: string;
    path: string;
    image?: string;
    category?: string;
    client?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${getAbsoluteUrl(input.path)}#creative-work`,
        name: input.title,
        description: input.description,
        url: getAbsoluteUrl(input.path),
        image: resolveMetadataImage(input.image),
        creator: {
            "@id": `${siteConfig.url}/#organization`,
        },
        provider: {
            "@id": `${siteConfig.url}/#organization`,
        },
        genre: input.category,
        about: input.client,
        inLanguage: "tr",
    };
}