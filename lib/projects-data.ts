import atelierWallpaper from "@/assets/atelier-wallpaper.png";
import atelierInner from "@/assets/atelier-inner.png";
import coffeeWallpaper from "@/assets/coffee-wallpaper.png";
import coffeeInner from "@/assets/coffee-inner.png";
import emlakWallpaper from "@/assets/emlak-wallpaper.png";
import emlakInner from "@/assets/emlak-inner.png";
import gayrimenkulWallpaper from "@/assets/gayrimenkul-wallpaper.png";
import gayrimenkulInner from "@/assets/gayrimenkul-inner.png";
import lumiereMobile from "@/assets/lumiere-mobile.png";
import lumiereWallpaper from "@/assets/lumiere-wallpaper.png";
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

export type ProjectDetailSectionTitle =
    | "Proje Özeti"
    | "Hedef"
    | "Yaklaşımımız"
    | "Ortaya Çıkan Değer";

export type ProjectDetailSection = {
    title: ProjectDetailSectionTitle;
    content: string[];
};

export type LighthouseScores = {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
};

export type ProjectCategory = "WEB SİTELERİ" | "QR MENÜ";

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
    detailSections?: ProjectDetailSection[];
    demoLabel?: string;
};

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        slug: "atolye-norte",
        title: "Atölye Norte",
        category: "WEB SİTELERİ",
        client: "Atölye Norte",
        summary: "Atölye Norte’nin butik ve rafine atmosferini dijitale taşıyan; menü, şube bilgileri ve marka deneyimini bütüncül bir akışta buluşturan bir web sitesi tasarladık.",
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
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Atölye Norte için, markanın butik ve lüks kafe kimliğini dijitalde güçlü biçimde yansıtan bir web deneyimi tasarladık. ",
                    "Menü sunumu, iki şubeye ait bilgi akışı ve marka anlatısını tek bir yapıda bir araya getirerek daha bütünlüklü bir dijital vitrin oluşturduk.",
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, ziyaretçilerin Atölye Norte’nin atmosferini ilk anda hissedebilmesini; menüye, şube bilgilerine ve iletişim detaylarına zahmetsizce ulaşabilmesini sağlamaktı.",
                    "Aynı zamanda markanın premium konumlanmasını dijitalde daha güçlü ve tutarlı biçimde yansıtmayı hedefledik.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarım dilini; sıcak görsel tonlar, rafine tipografi ve sade içerik akışı üzerine kurduk.",
                    "İki şubeli yapıyı anlaşılır biçimde sunarken, kullanıcıyı yormayan bir deneyimle marka algısını ve kullanılabilirliği dengeli biçimde ele aldık.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, Atölye Norte’nin karakterini dijitalde güçlü biçimde yansıtan, menü ve şube deneyimini akıcı hale getiren premium bir web sitesi çıktı.",
                    "Marka artık ziyaretçilerine hem estetik hem de işlevsel açıdan daha tutarlı bir dijital deneyim sunuyor.",
                ],
            },
        ],
    },
    {
        id: 2,
        slug: "yusuf-ali-soykan-gayrimenkul",
        title: "GAYRİMENKUL PORTFÖY VİTRİNİ",
        category: "WEB SİTELERİ",
        client: "Yusuf Ali Soykan",
        summary: "Yusuf Ali Soykan’ın uzmanlığını, güven veren marka kimliğini ve danışmanlık yaklaşımını dijitale taşıyan; başarılar, sertifikalar ve içeriklerle desteklenen profesyonel bir web sitesi tasarladık.",
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
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Yusuf Ali Soykan için, kişisel marka algısını güçlendiren ve danışmanlık hizmetlerini profesyonel biçimde sunan kurumsal bir web sitesi tasarladık.",
                    "Hakkında bilgileri, ödüller, sertifikalar ve blog içeriklerini tek bir yapıda bir araya getirerek daha güçlü bir dijital vitrin oluşturduk.",
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, ziyaretçilerin danışman hakkında güven verici ve bütünlüklü bir izlenim edinmesini; deneyim, başarılar ve içerikler üzerinden uzmanlığı net biçimde görebilmesini sağlamaktı. ",
                    "Aynı zamanda iletişime geçişi kolaylaştıran sade ve profesyonel bir yapı oluşturmayı hedefledik.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarımı; güçlü tipografi, sade bilgi akışı ve güven odaklı içerik hiyerarşisi üzerine kurduk.",
                    " Kişisel marka anlatısını öne çıkarırken, ödül ve sertifikaları destekleyici güven unsurları; blog içeriklerini ise uzmanlığı pekiştiren bir yapı içinde konumlandırdık.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, Yusuf Ali Soykan’ın profesyonel kimliğini dijitalde daha güçlü yansıtan ve ziyaretçilerin güvenle iletişime geçmesini destekleyen bütüncül bir web deneyimi çıktı.",
                    "Kişisel marka algısı, uzmanlık sunumu ve içerik yapısı daha tutarlı hale geldi.",
                ],
            },
        ],
    },
    {
        id: 6,
        slug: "lumiere-estetik",
        title: "LUMIÈRE",
        category: "WEB SİTELERİ",
        client: "Lumière Estetik",
        summary: "Lumière Estetik için; premium klinik atmosferini, uzman kadroyu ve kişiye özel bakım protokollerini rafine bir dijital deneyimde buluşturan bir web sitesi tasarladık.",
        image: lumiereWallpaper.src,
        innerImage: lumiereMobile.src,
        lighthouse: { performance: 100, accessibility: 91, bestPractices: 100, seo: 100 },
        previewUrl: "https://lumiere-estetik-inky.vercel.app/",
        gradient: "from-rose-500/40 via-amber-200/35 to-stone-200/30",
        demoLabel: "Portföy Projesi",
        stats: [
            { label: "Deneyim", value: 10, suffix: "+" },
            { label: "Mutlu Danışan", value: 10000, suffix: "+" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Lumière Estetik için, kliniğin premium görünümünü ve güven veren uzmanlık yaklaşımını dijitalde güçlü biçimde yansıtan bir web deneyimi tasarladık.",
                    "Hizmetler, klinik yaklaşımı, uzman kadro ve iletişim akışını tek bir bütünlük içinde bir araya getirerek daha rafine bir dijital vitrin oluşturduk.",
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, ziyaretçilerin Lumière'in doğal güzellik anlayışını ilk temas anında hissedebilmesini; hizmetleri, teknolojik altyapıyı ve randevu adımlarını zahmetsizce keşfedebilmesini sağlamaktı.",
                    "Aynı zamanda premium klinik algısını destekleyen, güven veren ve dönüşüm odaklı bir yapı kurmayı hedefledik.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarım dilini; yumuşak görsel geçişler, seçkin tipografi ve sakin bir içerik akışı üzerine kurduk.",
                    "Lazer epilasyon, medikal cilt bakımı ve bölgesel incelme gibi hizmetleri öne çıkarırken, uzmanlık ve teknoloji vurgusunu dönüşüm noktalarıyla dengeli biçimde konumlandırdık.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, Lumière Estetik'in marka algısını dijitalde güçlendiren ve ziyaretçiyi bilgi alma ile randevu aksiyonuna akıcı biçimde taşıyan bütüncül bir web deneyimi çıktı.",
                    "Klinik artık premium hizmet anlayışını, uzmanlığını ve güven veren yapısını dijitalde daha tutarlı biçimde sunuyor.",
                ],
            },
        ],
    },

    {
        id: 3,
        slug: "atelier-29",
        title: "ATELIER 29",
        category: "WEB SİTELERİ",
        client: "Atelier 29",
        summary: "Atelier 29’un seçkin atmosferini dijitale taşıyan; menü, rezervasyon ve marka deneyimini rafine bir akışta buluşturan bir web sitesi tasarladık.",
        image: atelierWallpaper.src,
        innerImage: atelierInner.src,
        lighthouse: { performance: 95, accessibility: 100, bestPractices: 100, seo: 100 },
        previewUrl: "https://mf-fine-dining.vercel.app/",
        gradient: "from-stone-500/45 via-zinc-400/30 to-amber-200/30",
        demoLabel: "Portföy Projesi",
        stats: [
            { label: "SEO", value: 184, suffix: "%" },
            { label: "Performans", value: 139, suffix: "%" },
            { label: "Memnuniyet", value: 98, suffix: "%" },
        ],
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Atelier 29 için, restoranın lüks ve karakter sahibi atmosferini dijitalde güçlü biçimde yansıtan bir web deneyimi tasarladık.",
                    "Menü sunumu, rezervasyon erişimi ve marka anlatısını tek bir bütünlük içinde ele aldık."
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, ziyaretçilerin Atelier 29’un atmosferini ilk temas anında hissedebilmesini ve menü ile rezervasyon adımlarına zahmetsizce ulaşabilmesini sağlamaktı.",
                    "Aynı zamanda markanın seçkin konumlanmasını dijitalde daha güçlü ve tutarlı biçimde yansıtmayı hedefledik.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarım dilini; rafine tipografi, güçlü görsel vurgu ve sade içerik akışı üzerine kurduk.",
                    "Kullanıcıyı yormayan bir yapı oluşturarak restoranın premium algısını destekleyen, estetik ve işlevsel dengesi yüksek bir deneyim tasarladık.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, Atelier 29’un marka algısını güçlendiren ve kullanıcıyı menü ile rezervasyon deneyimine akıcı biçimde yönlendiren bütüncül bir dijital vitrin çıktı. ",
                    "Restoran artık dijitalde de fiziksel deneyimiyle uyumlu, seçkin ve güven veren bir görünüm sunuyor.",
                ],
            },
        ],
    },
    {
        id: 4,
        slug: "koro-coffee-web",
        title: "KORO COFFEE",
        category: "WEB SİTELERİ",
        client: "Koro Coffee",
        summary: "Koro Coffee’nin sıcak ve karakter sahibi atmosferini dijitale taşıyan; menü, rezervasyon ve marka deneyimini tek akışta buluşturan bir web sitesi tasarladık.",
        image: coffeeWallpaper.src,
        innerImage: coffeeInner.src,
        lighthouse: { performance: 99, accessibility: 95, bestPractices: 100, seo: 91 },
        previewUrl: "https://mf-cafe-landing.vercel.app/",
        gradient: "from-amber-700/45 via-orange-500/30 to-neutral-200/30",
        demoLabel: "Portföy Projesi",
        stats: [
            { label: "SEO", value: 161, suffix: "%" },
            { label: "Performans", value: 126, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Koro Coffee için, markanın atmosferini dijitalde güçlü biçimde yansıtan bütüncül bir web deneyimi tasarladık.",
                    "Menü erişimi, rezervasyon ve marka sunumunu tek bir akış içinde bir araya getirerek kullanıcı için daha akıcı bir deneyim oluşturduk."
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, ziyaretçilerin Koro Coffee’nin dünyasını ilk temas anında hissedebilmesini; menüye kolayca ulaşmasını ve rezervasyon sürecini minimum adımla tamamlayabilmesini sağlamaktı.",
                    "Mobil kullanımda ise hızlı, anlaşılır ve güven veren bir yapı hedefledik."
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarım dilini; güçlü tipografi, sıcak görsel tonlar ve sade bir içerik akışı üzerine kurduk.",
                    "Markanın karakterini öne çıkarırken, etkileşim noktalarını sadeleştirerek deneyimi hem estetik hem de işlevsel açıdan dengeli hale getirdik."
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, Koro Coffee’nin dijital görünümünü güçlendiren ve kullanıcıyı doğru aksiyonlara akıcı biçimde yönlendiren bir deneyim çıktı.",
                    "Menü inceleme, rezervasyon ve marka algısı artık tek bir yapıda daha güçlü ve tutarlı şekilde sunuluyor.",
                ],
            },
        ],
    },
    {
        id: 5,
        slug: "emlak-portfoy-vitrini",
        title: "EMLAK PORTFÖY VİTRİNİ",
        category: "WEB SİTELERİ",
        client: "Emlak Portföy",
        summary: "Nova Emlak için, portföylerin yayınlanmasını ve yönetilmesini kolaylaştıran deneyimi göstermek amacıyla; kullanıcı arayüzü ve admin panelini bir araya getiren konsept bir emlak platformu tasarladık.",
        image: emlakWallpaper.src,
        innerImage: emlakInner.src,
        lighthouse: { performance: 100, accessibility: 90, bestPractices: 100, seo: 91 },
        previewUrl: "https://gayrimenkul-demo.vercel.app/",
        gradient: "from-sky-600/40 via-cyan-300/30 to-slate-200/30",
        demoLabel: "Portföy Projesi",
        stats: [
            { label: "SEO", value: 176, suffix: "%" },
            { label: "Performans", value: 132, suffix: "%" },
            { label: "Memnuniyet", value: 96, suffix: "%" },
        ],
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Nova Emlak, emlak ilanlarının modern bir vitrin yapısında sunulmasını ve yönetim paneli üzerinden kolayca yönetilmesini göstermek için kurgulanmış konsept bir demo projedir. ",
                    "Kullanıcı tarafında portföy keşfini, yönetim tarafında ise ilan kontrolünü sadeleştiren bütüncül bir yapı üzerine tasarlanmıştır.",
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Bu projede amaç, modern bir emlak platformunda kullanıcı deneyimi ile yönetim tarafının nasıl bir araya getirilebileceğini göstermekti.",
                    "İlanların keşfedilebilirliğini artıran, aynı zamanda yönetim paneliyle içerik kontrolünü kolaylaştıran bir yapı kurgulandı.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Tasarımı; sade bilgi mimarisi, güçlü filtreleme mantığı ve okunabilir içerik akışı üzerine kurduk.",
                    "Demo yapıya rağmen, hem ilan yayınlama deneyimini hem de yönetim paneli tarafındaki kontrol süreçlerini gerçek kullanım senaryolarına yakın olacak şekilde ele aldık.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, emlak sektörüne yönelik modern bir portföy vitrini ile yönetim paneli deneyimini bir arada sunan güçlü bir demo çıktı.",
                    "Bu çalışma, markalar için geliştirilebilecek ölçeklenebilir emlak çözümlerinin kullanıcı ve yönetim tarafında nasıl kurgulanabileceğini somut biçimde gösteriyor.",
                ],
            },
        ],
    },
    {
        id: 10,
        slug: "restoran-qr",
        title: "RESTORAN QR MENÜ",
        category: "QR MENÜ",
        client: "QR Menü",
        summary: "Restoranların menülerini hızlıca güncelleyebildiği, müşterilerin ise ürünlere kolayca ulaşabildiği; yönetilebilir ve mobil odaklı bir QR menü deneyimi tasarladık.",
        image: qrWallpaper.src,
        innerImage: qrInner.src,
        innerImage2: qrPanelInner.src,
        gradient: "from-violet-500/40 via-fuchsia-300/30 to-amber-300/35",
        stats: [
            { label: "SEO", value: 164, suffix: "%" },
            { label: "Performans", value: 121, suffix: "%" },
            { label: "Memnuniyet", value: 97, suffix: "%" },
        ],
        detailSections: [
            {
                title: "Proje Özeti",
                content: [
                    "Bu projede, restoranlar için hem kullanıcı deneyimini hem de içerik yönetimini kolaylaştıran editlenebilir bir QR menü sistemi tasarladık.",
                    "Müşteri tarafında hızlı ve anlaşılır bir menü akışı sunarken, yönetim tarafında ürünleri ve içerikleri pratik biçimde güncellenebilir hale getirdik.",
                ],
            },
            {
                title: "Hedef",
                content: [
                    "Amacımız, müşterilerin menüye zahmetsizce ulaşmasını ve ürünleri mobilde hızlıca inceleyebilmesini sağlarken; işletmeler için de menü yönetimini daha esnek ve sürdürülebilir hale getirmekti.",
                    "Aynı zamanda baskı maliyetini azaltan, güncel içerik sunmayı kolaylaştıran bir yapı hedefledik.",
                ],
            },
            {
                title: "Yaklaşımımız",
                content: [
                    "Deneyimi; sade kategori akışı, güçlü ürün kartları ve mobil kullanılabilirlik odağında kurguladık.",
                    "Yönetim paneli tarafında ise menü içeriklerinin kolayca düzenlenebildiği, restoran operasyonuna uyum sağlayan pratik bir yapı geliştirdik.",
                ],
            },
            {
                title: "Ortaya Çıkan Değer",
                content: [
                    "Ortaya, restoranların menülerini dijitalde daha hızlı, daha düzenli ve daha esnek biçimde yönetmesini sağlayan bütüncül bir QR menü çözümü çıktı.",
                    "Müşteri tarafında erişim kolaylaşırken, işletme tarafında güncelleme süreçleri daha pratik ve verimli hale geldi.",
                ],
            },
        ],
    },

];

export const CATEGORIES: ProjectCategory[] = ["WEB SİTELERİ", "QR MENÜ"];

export const FEATURED_PROJECTS = PROJECTS_DATA.slice(0, 5);