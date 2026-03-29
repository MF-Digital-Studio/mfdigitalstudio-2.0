import { HomePage } from "@/components/pages/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, createProfessionalServiceSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Özel Web Sitesi, QR Menü ve Dijital Çözümler",
  description:
    "MF Digital Studio; özel web siteleri, yönetim panelleri, QR menüler ve teknik SEO altyapısıyla markaların dijitalde daha güçlü görünmesini sağlar.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd id="home-professional-service" data={createProfessionalServiceSchema()} />
      <HomePage />
    </>
  );
}
