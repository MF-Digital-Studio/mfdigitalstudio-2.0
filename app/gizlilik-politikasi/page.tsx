import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { createBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
    title: "Gizlilik Politikası",
    description: "MF Digital Studio gizlilik politikası. Kişisel verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.",
    path: "/gizlilik-politikasi",
});

export default function PrivacyPolicyPage() {
    return (
        <>
            <JsonLd
                id="privacy-breadcrumb"
                data={createBreadcrumbSchema([
                    { name: "Ana Sayfa", path: "/" },
                    { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" },
                ])}
            />
            <main className="min-h-screen bg-white pt-28 pb-20 text-black">
                <article className="mx-auto w-full max-w-3xl px-6">
                    <header className="mb-12 border-b border-black/10 pb-8">
                        <p className="mb-3 text-sm font-medium tracking-wide text-black/50">
                            MF Digital Studio
                        </p>
                        <h1 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                            Gizlilik Politikası
                        </h1>
                        <p className="mt-4 text-base leading-relaxed text-black/65">
                            6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında
                            hazırlanan bu politika; web sitemizi ziyaret ettiğinizde ve iletişim
                            formlarını kullandığınızda hangi kişisel verilerin toplandığını, bu
                            verilerin nasıl işlendiğini ve haklarınızı açıklamaktadır.
                        </p>
                        <p className="mt-4 text-sm text-black/45">Son güncelleme: 29 Mart 2026</p>
                    </header>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            1. Veri Sorumlusu
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Kişisel verileriniz, veri sorumlusu sıfatıyla <strong>MF Digital Studio</strong>{" "}
                            tarafından işlenmektedir. Sorularınız için{" "}
                            <a
                                href="mailto:info@mfdigitalstudio.com"
                                className="font-semibold underline underline-offset-4"
                            >
                                info@mfdigitalstudio.com
                            </a>{" "}
                            adresinden bize ulaşabilirsiniz.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            2. Toplanan Veriler ve İşlenme Amaçları
                        </h2>
                        <div className="space-y-6 text-base leading-8 text-black/80">
                            <div>
                                <h3 className="mb-2 text-xl font-semibold">İletişim Formu Verileri</h3>
                                <p>
                                    İletişim formunu doldurduğunuzda adınız, e-posta adresiniz ve iletmek
                                    istediğiniz mesaj içeriği tarafımıza iletilmektedir. Bu veriler yalnızca
                                    talebinizi yanıtlamak, sizinle iletişim kurmak ve hizmet sunmak amacıyla
                                    kullanılır; üçüncü taraflarla paylaşılmaz.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-semibold">Otomatik Toplanan Veriler</h3>
                                <p>
                                    Sitemizi ziyaret ettiğinizde sunucumuz otomatik olarak IP adresinizi,
                                    tarayıcı türünüzü, ziyaret ettiğiniz sayfaları ve ziyaret sürenizi
                                    kayıt altına alabilir. Bu veriler sitenin güvenliğini sağlamak ve
                                    kullanıcı deneyimini iyileştirmek amacıyla anonim şekilde analiz edilir.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-xl font-semibold">Çerezler Aracılığıyla Toplanan Veriler</h3>
                                <p>
                                    Çerez kullanımı hakkında daha fazla bilgi almak için{" "}
                                    <Link
                                        href="/cerez-politikasi"
                                        className="font-semibold underline underline-offset-4"
                                    >
                                        Çerez Politikası
                                    </Link>{" "}
                                    sayfamızı inceleyebilirsiniz.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            3. Verilerin Güvenliği
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Kişisel verilerinizi yetkisiz erişime, değiştirmeye, ifşa edilmeye veya
                            imha edilmeye karşı korumak için teknik ve idari önlemler alıyoruz. Veriler
                            şifreli bağlantılar (HTTPS/TLS) üzerinden iletilir ve yalnızca yetkili
                            personel tarafından erişilebilir sistemlerde saklanır. Bununla birlikte,
                            internet üzerinden yapılan hiçbir iletimin veya elektronik depolamanın
                            yüzde yüz güvenli olmadığını hatırlatırız.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            4. Veri Saklama Süreleri
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Kişisel verileriniz, toplama amacının gerektirdiği süre boyunca saklanır.
                            İletişim formu aracılığıyla iletilen mesajlar, talep yanıtlandıktan sonra
                            yasal yükümlülükler çerçevesinde makul bir süre boyunca arşivde tutulabilir.
                            Yasal saklama süresi dolduğunda veriler güvenli biçimde imha edilir.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            5. Haklarınız (KVKK Madde 11)
                        </h2>
                        <p className="mb-4 text-base leading-8 text-black/80">
                            6698 sayılı KVKK kapsamında aşağıdaki haklara sahipsiniz:
                        </p>
                        <ul className="list-none space-y-3 text-base leading-8 text-black/80">
                            {[
                                "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
                                "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
                                "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
                                "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme",
                                "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
                                "Kişisel verilerinizin silinmesini veya yok edilmesini isteme",
                                "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
                                "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
                            ].map((right) => (
                                <li key={right} className="flex items-start gap-2">
                                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
                                    {right}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-6 text-base leading-8 text-black/80">
                            Bu haklarınızı kullanmak için{" "}
                            <a
                                href="mailto:info@mfdigitalstudio.com"
                                className="font-semibold underline underline-offset-4"
                            >
                                info@mfdigitalstudio.com
                            </a>{" "}
                            adresine yazılı başvuruda bulunabilirsiniz.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                            6. Politika Değişiklikleri
                        </h2>
                        <p className="text-base leading-8 text-black/80">
                            Bu politikayı zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada
                            yayımlandığı tarihten itibaren geçerli olur. Önemli değişiklikler söz konusu
                            olduğunda sizi bildirmek için makul çabayı göstereceğiz.
                        </p>
                    </section>
                </article>
            </main>
        </>
    );
}
