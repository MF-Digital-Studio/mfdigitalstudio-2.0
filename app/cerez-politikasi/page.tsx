import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Çerez Politikası",
    description:
        "MF Digital Studio çerez politikası. Hangi çerezleri kullandığımızı ve çerez tercihlerinizi nasıl yönetebileceğinizi açıklar.",
};

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-white pt-28 pb-20 text-black">
            <article className="mx-auto w-full max-w-3xl px-6">
                <header className="mb-12 border-b border-black/10 pb-8">
                    <p className="mb-3 text-sm font-medium tracking-wide text-black/50">MF Digital Studio</p>
                    <h1 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                        Çerez Politikası
                    </h1>
                    <p className="mt-4 text-base leading-relaxed text-black/65">
                        Bu politika, web sitemizi ziyaret ettiğinizde hangi çerezleri kullandığımızı,
                        bu çerezlerin ne işe yaradığını ve tercihlerinizi nasıl yönetebileceğinizi
                        açıklamak amacıyla hazırlanmıştır.
                    </p>
                    <p className="mt-4 text-sm text-black/45">Son güncelleme: 29 Mart 2026</p>
                </header>

                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">Çerez Nedir?</h2>
                    <p className="text-base leading-8 text-black/80">
                        Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız aracılığıyla
                        cihazınıza kaydedilen küçük metin dosyalarıdır. Bu dosyalar; siteyi daha
                        verimli çalıştırmak, tercihlerinizi hatırlamak ve kullanıcı deneyimini
                        geliştirmek gibi amaçlarla kullanılır. Çerezler, tek başına genellikle sizi
                        doğrudan tanımlamaz; ancak bazı durumlarda diğer verilerle birlikte
                        değerlendirildiğinde kişisel veri niteliği taşıyabilir.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        Hangi Çerezleri Kullanıyoruz?
                    </h2>
                    <div className="space-y-6 text-base leading-8 text-black/80">
                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Zorunlu Çerezler</h3>
                            <p>
                                Sitenin temel işlevlerini yerine getirebilmesi için gereklidir. Güvenlik,
                                oturum yönetimi ve sayfa gezinmesi gibi işlemler bu çerezler sayesinde
                                sorunsuz çalışır. Bu çerezler kapatıldığında sitenin bazı bölümleri doğru
                                şekilde çalışmayabilir.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Tercih Çerezleri</h3>
                            <p>
                                Dil, bölge veya daha önce verdiğiniz onay gibi seçimlerinizi hatırlayarak
                                size daha kişiselleştirilmiş bir deneyim sunar.
                            </p>
                        </div>

                        <div>
                            <h3 className="mb-2 text-xl font-semibold">Analitik ve Performans Çerezleri</h3>
                            <p>
                                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olur.
                                Örneğin hangi sayfaların daha çok görüntülendiği, kullanıcıların sitede
                                ne kadar süre kaldığı gibi veriler bu kapsamdadır. Söz konusu veriler
                                toplu ve anonim şekilde değerlendirilir. Bu çerezlerin kullanımına itiraz
                                etme hakkınız mevcuttur.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        Çerezleri Nasıl Yönetebilirsiniz?
                    </h2>
                    <div className="space-y-4 text-base leading-8 text-black/80">
                        <p>
                            Çerez tercihlerinizi tarayıcı ayarlarınız üzerinden dilediğiniz zaman
                            değiştirebilir, mevcut çerezleri silebilir veya yeni çerezlerin
                            kaydedilmesini engelleyebilirsiniz.
                        </p>
                        <p>
                            Tarayıcınızda çerezleri tamamen devre dışı bırakmanız durumunda web
                            sitemizin bazı özellikleri beklendiği gibi çalışmayabilir.
                        </p>
                        <p>
                            Sitemizin alt kısmındaki çerez onay çubuğunda{" "}
                            <strong>Reddet</strong> seçeneğini seçerek zorunlu olmayan çerezleri
                            reddedebilirsiniz.
                        </p>
                        <p>
                            Çerezlerle ilgili sorularınız için{" "}
                            <a
                                className="font-semibold underline underline-offset-4"
                                href="mailto:info@mfdigitalstudio.com"
                            >
                                info@mfdigitalstudio.com
                            </a>{" "}
                            adresi üzerinden bizimle iletişime geçebilirsiniz.
                        </p>
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
                        İlgili Sayfalar
                    </h2>
                    <ul className="list-none space-y-3 text-base leading-8 text-black/80">
                        <li className="flex items-center gap-2">
                            <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
                            <a href="/gizlilik-politikasi" className="font-semibold underline underline-offset-4">
                                Gizlilik Politikası
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="block h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
                            <a href="/kullanim-sartlari" className="font-semibold underline underline-offset-4">
                                Kullanım Şartları
                            </a>
                        </li>
                    </ul>
                </section>
            </article>
        </div>
    );
}
