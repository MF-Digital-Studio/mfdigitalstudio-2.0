import atelierWallpaper from "@/assets/atelier-wallpaper.png";
import atelierInner from "@/assets/atelier-inner.png";
import coffeeWallpaper from "@/assets/coffee-wallpaper.png";
import coffeeInner from "@/assets/coffee-inner.png";
import emlakWallpaper from "@/assets/emlak-wallpaper.png";
import emlakInner from "@/assets/emlak-inner.png";
import gayrimenkulWallpaper from "@/assets/gayrimenkul-wallpaper.png";
import gayrimenkulInner from "@/assets/gayrimenkul-inner.png";
import norteWallpaper from "@/assets/norte-wallpaper.png";
import norteInner from "@/assets/norte-inner.png";
import qrWallpaper from "@/assets/qr-wallpaper.png";
import qrInner from "@/assets/qr-inner.png";
import qrPanelInner from "@/assets/qr-panel-inner.png";

export type ProjectStat = {
    label: string;
    value: number;
    suffix: string;
};

export type LighthouseScores = {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
};

export type ProjectCategory = "WEB SİTELERİ" | "PANELLER" | "QR MENÜ";

export type Project = {
    id: number;
    slug: string;
    title: string;
    category: ProjectCategory;
    client: string;
    summary: string;
    image: string;
    innerImage?: string;
    innerImage2?: string;
    lighthouse?: LighthouseScores;
    previewUrl?: string;
    gradient: string;
    stats: ProjectStat[];
};

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        slug: "atelier-collective",
        title: "ATELIER COLLECTIVE WEB DENEYİMİ",
        category: "WEB SİTELERİ",
        client: "Atelier Collective",
        summary: "Mimari ve iç mekân projelerini güçlü görsel anlatı ve rafine bir arayüz diliyle dijitale taşıdık.",
        image: atelierWallpaper.src,
        innerImage: atelierInner.src,
        lighthouse: { performance: 95, accessibility: 100, bestPractices: 100, seo: 100 },
        previewUrl: "https://mf-fine-dining.vercel.app/",
        gradient: "from-stone-500/45 via-zinc-400/30 to-amber-200/30",
        stats: [
            { label: "SEO", value: 184, suffix: "%" },
            { label: "Performans", value: 139, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
    },
    {
        id: 2,
        slug: "coffee-lab-web",
        title: "COFFEE LAB WEB SİTESİ",
        category: "WEB SİTELERİ",
        client: "Coffee Lab",
        summary: "Mekân atmosferini dijital vitrine taşıyan, rezervasyon ve menü erişimini tek akışta birleştiren bir web deneyimi tasarladık.",
        image: coffeeWallpaper.src,
        innerImage: coffeeInner.src,
        lighthouse: { performance: 99, accessibility: 95, bestPractices: 100, seo: 91 },
        previewUrl: "https://mf-cafe-landing.vercel.app/",
        gradient: "from-amber-700/45 via-orange-500/30 to-neutral-200/30",
        stats: [
            { label: "SEO", value: 161, suffix: "%" },
            { label: "Performans", value: 126, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },
    {
        id: 3,
        slug: "emlak-portfoy-vitrini",
        title: "EMLAK PORTFÖY VİTRİNİ",
        category: "WEB SİTELERİ",
        client: "Emlak Portföy",
        summary: "Portföyleri daha hızlı keşfedilir hale getiren, güven duygusunu artıran bir kurumsal emlak vitrini oluşturduk.",
        image: emlakWallpaper.src,
        innerImage: emlakInner.src,
        lighthouse: { performance: 100, accessibility: 90, bestPractices: 100, seo: 91 },
        previewUrl: "https://gayrimenkul-demo.vercel.app/",
        gradient: "from-sky-600/40 via-cyan-300/30 to-slate-200/30",
        stats: [
            { label: "SEO", value: 176, suffix: "%" },
            { label: "Performans", value: 132, suffix: "%" },
            { label: "Memnuniyet", value: 96, suffix: "%" },
        ],
    },
    {
        id: 4,
        slug: "gayrimenkul-kurumsal-site",
        title: "GAYRİMENKUL KURUMSAL SİTESİ",
        category: "WEB SİTELERİ",
        client: "Prime Gayrimenkul",
        summary: "Portföy sunumunu hızlandıran ve danışman iletişimini öne çıkaran güven odaklı bir kurumsal site geliştirdik.",
        image: gayrimenkulWallpaper.src,
        innerImage: gayrimenkulInner.src,
        lighthouse: { performance: 99, accessibility: 90, bestPractices: 100, seo: 91 },
        previewUrl: "https://yusufalisoykan-gayrimenkul.vercel.app/",
        gradient: "from-emerald-600/40 via-teal-300/30 to-lime-200/30",
        stats: [
            { label: "SEO", value: 143, suffix: "%" },
            { label: "Performans", value: 118, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
    },
    {
        id: 5,
        slug: "norte-residence",
        title: "NORTE RESIDENCE LANSMAN SİTESİ",
        category: "WEB SİTELERİ",
        client: "Norte Residence",
        summary: "Lansman dönemine uygun güçlü bir ilk izlenim oluşturan, premium konut projesi web sitesi kurguladık.",
        image: norteWallpaper.src,
        innerImage: norteInner.src,
        lighthouse: { performance: 100, accessibility: 96, bestPractices: 100, seo: 100 },
        previewUrl: "https://atolye-norte.vercel.app/",
        gradient: "from-zinc-700/45 via-slate-400/30 to-stone-200/30",
        stats: [
            { label: "SEO", value: 169, suffix: "%" },
            { label: "Performans", value: 128, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },
    {
        id: 10,
        slug: "restoran-qr",
        title: "RESTORAN QR MENÜ",
        category: "QR MENÜ",
        client: "Lezzet Durağı",
        summary: "Müşteri deneyimini hızlandıran, sipariş süresini kısaltan görsel odaklı QR menü tasarladık.",
        image: qrWallpaper.src,
        innerImage: qrInner.src,
        innerImage2: qrPanelInner.src,
        gradient: "from-violet-500/40 via-fuchsia-300/30 to-amber-300/35",
        stats: [
            { label: "SEO", value: 164, suffix: "%" },
            { label: "Performans", value: 121, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },

];

export const CATEGORIES: ProjectCategory[] = ["WEB SİTELERİ", "QR MENÜ"];

export const FEATURED_PROJECTS = PROJECTS_DATA.slice(0, 5);