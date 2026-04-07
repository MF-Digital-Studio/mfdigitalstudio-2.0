import { HomePage } from "@/components/pages/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata, createProfessionalServiceSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "MF Digital Studio | Web Tasarım, SEO ve Dijital Çözümler",
  description:
    "MF Digital Studio; web tasarım, teknik SEO, QR menü ve özel dijital çözümlerle markaların dijitalde daha güçlü görünmesine yardımcı olur.",
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
