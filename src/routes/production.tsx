import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet01 } from "@/components/blueprint/sheets/Sheet01";
import { Sheet02 } from "@/components/blueprint/sheets/Sheet02";
import { Sheet03 } from "@/components/blueprint/sheets/Sheet03";
import { Sheet04 } from "@/components/blueprint/sheets/Sheet04";

const SECTION = SECTIONS.find((s) => s.slug === "/production")!;

export const Route = createFileRoute("/production")({
  component: ProductionPage,
  head: () => ({
    meta: [
      { title: "الإنتاج — هندسة الفيديو الفيروسي | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "أربع لوحات هندسية: علم الخوارزمية، ثالوث الفيرال، معادلة العرض الذي لا يقاوم، وتشريح السكريبت والمونتاج.",
      },
      { property: "og:title", content: "الإنتاج — هندسة الفيديو الفيروسي" },
      {
        property: "og:description",
        content: "كيف تُهندس فيديو يستحق الانتشار: الخوارزمية، الخطاف، الاحتفاظ، العاطفة، والسكريبت.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/production" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/production" }],
  }),
});

function ProductionPage() {
  return (
    <BlueprintLayout currentSlug="/production" section={SECTION}>
      <SectionHead section={SECTION} index={1} />
      <Sheet01 />
      <Sheet02 />
      <Sheet03 />
      <Sheet04 />
    </BlueprintLayout>
  );
}
