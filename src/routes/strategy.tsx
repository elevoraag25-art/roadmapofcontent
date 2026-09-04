import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet22 } from "@/components/blueprint/sheets/Sheet22";
import { Sheet23 } from "@/components/blueprint/sheets/Sheet23";
import { Sheet24 } from "@/components/blueprint/sheets/Sheet24";
import { Sheet25 } from "@/components/blueprint/sheets/Sheet25";
import { Sheet26 } from "@/components/blueprint/sheets/Sheet26";

const SECTION = SECTIONS.find((s) => s.slug === "/strategy")!;

export const Route = createFileRoute("/strategy")({
  component: StrategyPage,
  head: () => ({
    meta: [
      { title: "الاستراتيجية والعلامة — التموضع والقوالب والعروض | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "التموضع في ذهن الجمهور، 12 قالب فيديو جاهز، محرك كتابة المحتوى الإعلاني، أنماط القمع والعروض، وخريطة قنوات التسويق.",
      },
      { property: "og:title", content: "الاستراتيجية والعلامة — التموضع والقوالب والعروض" },
      {
        property: "og:description",
        content: "من هوية واضحة إلى قوالب فيديو ونصوص إعلانية وعروض تبيع.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/strategy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/strategy" }],
  }),
});

function StrategyPage() {
  return (
    <BlueprintLayout currentSlug="/strategy" section={SECTION}>
      <SectionHead section={SECTION} index={4} />
      <Sheet22 />
      <Sheet23 />
      <Sheet24 />
      <Sheet25 />
      <Sheet26 />
    </BlueprintLayout>
  );
}
