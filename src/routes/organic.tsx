import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet15 } from "@/components/blueprint/sheets/Sheet15";
import { Sheet16 } from "@/components/blueprint/sheets/Sheet16";
import { Sheet17 } from "@/components/blueprint/sheets/Sheet17";
import { Sheet18 } from "@/components/blueprint/sheets/Sheet18";
import { Sheet19 } from "@/components/blueprint/sheets/Sheet19";
import { Sheet20 } from "@/components/blueprint/sheets/Sheet20";

const SECTION = SECTIONS.find((s) => s.slug === "/organic")!;

export const Route = createFileRoute("/organic")({
  component: OrganicPage,
  head: () => ({
    meta: [
      { title: "الترافيك العضوي — سوشيال ويوتيوب وSEO | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "نظام ترافيك عضوي كامل: خارطة القنوات الثلاث، تحسين البروفايل، التوزيع والترندات، النمو بالتفاعل، محرك يوتيوب، وأساسيات SEO.",
      },
      { property: "og:title", content: "الترافيك العضوي — سوشيال ويوتيوب وSEO" },
      {
        property: "og:description",
        content: "ست لوحات لبناء تدفق زوار مستمر بلا اعتماد على الحظ ولا على ميزانية إعلانية.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/organic" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/organic" }],
  }),
});

function OrganicPage() {
  return (
    <BlueprintLayout currentSlug="/organic" section={SECTION}>
      <SectionHead section={SECTION} index={6} />
      <Sheet15 />
      <Sheet16 />
      <Sheet17 />
      <Sheet18 />
      <Sheet19 />
      <Sheet20 />
    </BlueprintLayout>
  );
}
