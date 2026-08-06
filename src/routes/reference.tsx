import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet13 } from "@/components/blueprint/sheets/Sheet13";
import { Sheet21 } from "@/components/blueprint/sheets/Sheet21";

const SECTION = SECTIONS.find((s) => s.slug === "/reference")!;

export const Route = createFileRoute("/reference")({
  component: ReferencePage,
  head: () => ({
    meta: [
      { title: "المرجع السريع — قائمة تحقق ومسرد المصطلحات | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "الورقة المرجعية قبل كل تصوير، لوحة القياس الأسبوعية، صندوق أدوات صانع المحتوى، ومسرد المصطلحات التسويقية.",
      },
      { property: "og:title", content: "المرجع السريع — قائمة تحقق ومسرد المصطلحات" },
      {
        property: "og:description",
        content: "كل ما تحتاج مراجعته قبل التصوير وبعد النشر، في لوحتين مركّزتين.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/reference" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/reference" }],
  }),
});

function ReferencePage() {
  return (
    <BlueprintLayout currentSlug="/reference" section={SECTION}>
      <SectionHead section={SECTION} index={5} />
      <Sheet13 />
      <Sheet21 />
    </BlueprintLayout>
  );
}
