import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet06 } from "@/components/blueprint/sheets/Sheet06";
import { Sheet07 } from "@/components/blueprint/sheets/Sheet07";
import { Sheet09 } from "@/components/blueprint/sheets/Sheet09";
import { Sheet11 } from "@/components/blueprint/sheets/Sheet11";

const SECTION = SECTIONS.find((s) => s.slug === "/ideas")!;

export const Route = createFileRoute("/ideas")({
  component: IdeasPage,
  head: () => ({
    meta: [
      { title: "الأفكار والتنفيذ — مصنع محتوى لا ينضب | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "مصفوفة توليد الأفكار، بروتوكول التنفيذ الأسبوعي بالدفعات، قياس الفيروسية علمياً، وبنك خطافات جاهز.",
      },
      { property: "og:title", content: "الأفكار والتنفيذ — مصنع محتوى لا ينضب" },
      {
        property: "og:description",
        content: "توليد أفكار بلا انتظار الإلهام، نشر بنظام الدفعات، وقياس الأداء النسبي.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/ideas" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/ideas" }],
  }),
});

function IdeasPage() {
  return (
    <BlueprintLayout currentSlug="/ideas" section={SECTION}>
      <SectionHead section={SECTION} index={3} />
      <Sheet06 />
      <Sheet07 />
      <Sheet09 />
      <Sheet11 />
    </BlueprintLayout>
  );
}
