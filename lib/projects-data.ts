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
        gradient: "from-zinc-700/45 via-slate-400/30 to-stone-200/30",
        stats: [
            { label: "SEO", value: 169, suffix: "%" },
            { label: "Performans", value: 128, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
    },
    {
        id: 6,
        slug: "moda-house",
        title: "MODA HOUSE E-TİCARET",
        category: "WEB SİTELERİ",
        client: "Moda House",
        summary: "Markanın dijital vitrinini hız, estetik ve dönüşüm odaklı bir deneyime dönüştürdük.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-fuchsia-500/45 via-rose-400/35 to-orange-300/35",
        stats: [
            { label: "SEO", value: 200, suffix: "%" },
            { label: "Performans", value: 145, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
    },
    {
        id: 7,
        slug: "seyahat-ajansi",
        title: "SEYAHAT AJANSI REZERVASYON",
        category: "WEB SİTELERİ",
        client: "Rota Plus",
        summary: "Sıradanlığı kıran tipografi ve hikâye kurgusuyla rezervasyon akışını sadeleştirdik.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80",
        gradient: "from-orange-400/45 via-amber-300/35 to-pink-400/35",
        stats: [
            { label: "SEO", value: 172, suffix: "%" },
            { label: "Performans", value: 133, suffix: "%" },
            { label: "Memnuniyet", value: 96, suffix: "%" },
        ],
    },
    // {
    //     id: 8,
    //     slug: "finans-yonetim",
    //     title: "FİNANS YÖNETİM PANELİ",
    //     category: "PANELLER",
    //     client: "Pulse Fintek",
    //     summary: "Kritik karar ekranlarını veri yoğun ama berrak bir panel sistemine taşıdık.",
    //     image: "https://images.unsplash.com/photo-1551281044-8b0a65a2d5c3?auto=format&fit=crop&w=1600&q=80",
    //     gradient: "from-lime-400/40 via-emerald-300/35 to-cyan-300/35",
    //     stats: [
    //         { label: "SEO", value: 148, suffix: "%" },
    //         { label: "Performans", value: 119, suffix: "%" },
    //         { label: "Memnuniyet", value: 97, suffix: "%" },
    //     ],
    // },
    // {
    //     id: 9,
    //     slug: "hastane-operasyon",
    //     title: "HASTANE OPERASYON PANELİ",
    //     category: "PANELLER",
    //     client: "MediCore",
    //     summary: "Klinik ve operasyon ekiplerini tek bir gerçek zamanlı karar merkezinde buluşturduk.",
    //     image: "https://images.unsplash.com/photo-1576089172869-4f5f6f315620?auto=format&fit=crop&w=1600&q=80",
    //     gradient: "from-pink-500/45 via-fuchsia-300/35 to-yellow-300/35",
    //     stats: [
    //         { label: "SEO", value: 131, suffix: "%" },
    //         { label: "Performans", value: 112, suffix: "%" },
    //         { label: "Memnuniyet", value: 99, suffix: "%" },
    //     ],
    // },
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