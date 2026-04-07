import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Kullanım Şartları | MF Digital Studio",
    description: "MF Digital Studio kullanım şartları: web sitesinin kullanımına ilişkin kurallar, sorumluluklar ve yasal koşullar.",
    path: "/kullanim-sartlari",
});

export default function TermsOfUsePage() {
    return (
        <>
            <JsonLd
                id="terms-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Kullanım Şartları", path: "/kullanim-sartlari" },
                ])}
            />
            <main className="min-h-screen bg-white pt-28 pb-20 text-black">
                <article className="mx-auto w-full max-w-3xl px-6">
                    <header className="mb-12 border-b border-black/10 pb-8">
                        <p className="mb-3 text-sm font-medium tracking-wide text-black/50">
                            MF Digital Studio
                        </p>
                        <h1 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                            Kullanım Şartları
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-black/65">
                            Bu sayfa, <strong>mfdigital.studio</strong> adresindeki web sitemizi
                            kullanım koşullarını belirtmektedir. Sitemizi ziyaret ederek aşağıdaki
                            şartları kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız lütfen
                            sitemizi kullanmayınız.
                        </p>
                        <p className="mt-4 text-sm text-black/45">Son güncelleme: 29 Mart 2026</p>
                    </header>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            1. Hizmetin Tanımı
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            MF Digital Studio; web tasarım, dijital pazarlama, QR menü sistemleri,
                            yönetim panelleri ve yazılım geliştirme alanlarında hizmet sunan bir dijital
                            ajandır. Bu web sitesi, söz konusu hizmetler hakkında bilgi vermek ve
                            potansiyel müşterilerle iletişim kurmak amacıyla işletilmektedir.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            2. Fikri Mülkiyet
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Bu web sitesinde yayımlanan tüm içerikler — metinler, görseller, logolar,
                            tasarımlar ve yazılım kodları dahil olmak üzere — MF Digital Studio'nun
                            münhasır mülkiyetindedir ve Türk Fikir ve Sanat Eserleri Kanunu ile ilgili
                            uluslararası antlaşmalar kapsamında korunmaktadır. Önceden yazılı izin
                            almaksızın bu içeriklerin kopyalanması, çoğaltılması, dağıtılması veya
                            türev eserler oluşturulması kesinlikle yasaktır.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            3. Kullanıcı Yükümlülükleri
                        </h2>
                        <p className="mb-4 text-base leading-8 text-black/80">
                            Sitemizi kullanan ziyaretçiler aşağıdaki kurallara uymayı kabul eder:
                        </p>
                        <ul className="list-none space-y-3 text-base leading-8 text-black/80">
                            {[
                                "Siteyi yalnızca hukuka uygun amaçlarla kullanmak",
                                "Siteye zarar verecek, işleyişini bozacak veya yetkisiz erişim sağlayacak herhangi bir eylemde bulunmamak",
                                "Diğer kullanıcıların veya üçüncü kişilerin haklarını ihlal etmemek",
                                "Yanıltıcı, iftira niteliğinde veya hakaret içeren bilgi ve içerik paylaşmamak",
                                "Kötü amaçlı yazılım, virüs veya zararlı kod dağıtmamak",
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-2">
                                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            4. Sorumluluk Reddi
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            MF Digital Studio, web sitesindeki bilgilerin doğruluğunu ve güncelliğini
                            sağlamak için her türlü çabayı göstermektedir; ancak bu bilgilerin
                            tamlığını veya hatasızlığını garanti etmemektedir. Site içeriği önceden
                            haber verilmeksizin değiştirilebilir. Siteye erişim sağlanamamasından veya
                            site içeriğinde yer alan hatalardan kaynaklanan doğrudan ya da dolaylı
                            zararlardan MF Digital Studio sorumlu tutulamaz.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            5. Üçüncü Taraf Bağlantılar
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Sitemiz, üçüncü taraflara ait web sitelerine bağlantılar içerebilir.
                            Bu bağlantılar yalnızca kullanıcı kolaylığı amacıyla sunulmaktadır; bağlantı
                            verilen sitelerin içeriği, güvenilirliği veya gizlilik uygulamaları
                            üzerinde herhangi bir denetim ya da sorumluluk kabul edilmemektedir.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            6. Kişisel Verilerin Korunması
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Kişisel verilerinizin nasıl işlendiği hakkında ayrıntılı bilgi için{" "}
                            <Link
                                href="/gizlilik-politikasi"
                                className="font-semibold underline underline-offset-4"
                            >
                                Gizlilik Politikası
                            </Link>{" "}
                            sayfamızı inceleyebilirsiniz.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            7. Uygulanacak Hukuk ve Yetki
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Bu kullanım şartları Türk hukukuna tabidir. Bu şartlardan kaynaklanabilecek
                            her türlü uyuşmazlığın çözümünde Türkiye Cumhuriyeti mahkemeleri yetkilidir.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            8. Şartlarda Değişiklik
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            MF Digital Studio bu şartları önceden haber vermeksizin değiştirme hakkını
                            saklı tutar. Değişiklikler bu sayfada yayımlandığı anda yürürlüğe girer.
                            Siteyi kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz
                            anlamına gelir.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            9. İletişim
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Bu kullanım şartlarına ilişkin sorularınız için{" "}
                            <a
                                href="mailto:info@mfdigitalstudio.com"
                                className="font-semibold underline underline-offset-4"
                            >
                                info@mfdigitalstudio.com
                            </a>{" "}
                            adresi üzerinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}
