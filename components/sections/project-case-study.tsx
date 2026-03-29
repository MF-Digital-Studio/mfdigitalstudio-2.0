import { Syne } from "next/font/google";
import type { Project, ProjectDetailSection, ProjectDetailSectionTitle } from "@/lib/projects-data";

const syne = Syne({
    subsets: ["latin"],
    weight: ["700", "800"],
});

const SECTION_ORDER: ProjectDetailSectionTitle[] = [
    "Proje Özeti",
    "Hedef",
    "Yaklaşımımız",
    "Ortaya Çıkan Değer",
];

function defaultCaseStudySections(project: Project): ProjectDetailSection[] {
    return [
        {
            title: "Proje Özeti",
            content: [
                `${project.client} için ${project.category.toLowerCase()} kapsamında markayı dijitalde daha güçlü sunan bir proje geliştirildi.`,
                project.summary,
            ],
        },
        {
            title: "Hedef",
            content: [
                "Kullanıcı deneyimini sadeleştirip ihtiyaç duyulan içeriklere daha hızlı erişim sağlamak hedeflendi.",
                "Marka sunumunu güven veren bir yapıyla güçlendirirken dönüşüm adımlarını daha görünür hale getirmek amaçlandı.",
            ],
        },
        {
            title: "Yaklaşımımız",
            content: [
                "Bilgi mimarisi, görsel hiyerarşi ve tipografi kararları birlikte ele alınarak net bir akış oluşturuldu.",
                "Mobil uyumluluk ve performans odağında, sade ama premium bir arayüz dili benimsendi.",
            ],
        },
        {
            title: "Ortaya Çıkan Değer",
            content: [
                "Marka, daha güçlü dijital görünürlük ve daha tutarlı bir premium algı kazandı.",
                "Kullanıcılar için daha akıcı, güven veren ve hızlı bir deneyim ortaya çıktı.",
            ],
        },
    ];
}

function normalizeCaseStudySections(project: Project): ProjectDetailSection[] {
    const fromData = project.detailSections ?? [];

    const byTitle = new Map<ProjectDetailSectionTitle, ProjectDetailSection>();
    for (const section of fromData) {
        if (!byTitle.has(section.title)) {
            byTitle.set(section.title, section);
        }
    }

    const fallback = defaultCaseStudySections(project);

    return SECTION_ORDER.map((title) => {
        const candidate = byTitle.get(title);
        const safeContent = (candidate?.content ?? [])
            .map((item) => item.trim())
            .filter(Boolean)
            .slice(0, 4);

        if (safeContent.length > 0) {
            return {
                title,
                content: safeContent,
            };
        }

        return fallback.find((section) => section.title === title)!;
    });
}

export function ProjectCaseStudySection({ project }: { project: Project }) {
    const sections = normalizeCaseStudySections(project);

    return (
        <section className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:mt-14 md:grid-cols-2">
            {sections.map((item) => (
                <article key={item.title} className="bg-white p-6 md:p-8">
                    <h2
                        className={`${syne.className} text-xl font-extrabold uppercase tracking-[-0.02em] text-black sm:text-2xl`}
                    >
                        {item.title}
                    </h2>
                    <div className="mt-3 space-y-2.5">
                        {item.content.map((line, index) => (
                            <p key={`${item.title}-${index}`} className="text-sm leading-relaxed text-black/70 md:text-[15px]">
                                {line}
                            </p>
                        ))}
                    </div>
                </article>
            ))}
        </section>
    );
}
