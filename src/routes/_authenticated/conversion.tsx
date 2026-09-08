import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet05 } from "@/components/blueprint/sheets/Sheet05";
import { Sheet08 } from "@/components/blueprint/sheets/Sheet08";
import { Sheet10 } from "@/components/blueprint/sheets/Sheet10";
import { Sheet12 } from "@/components/blueprint/sheets/Sheet12";

const SECTION = SECTIONS.find((s) => s.slug === "/conversion")!;

export const Route = createFileRoute("/_authenticated/conversion")({
  component: ConversionPage,
  head: () => ({
    meta: [
      { title: "التحويل والبيع — من المشاهدة إلى الكاش | مخطط الهندسة الفيروسية" },
      {
        name: "description",
        content:
          "قمع البيع والأتمتة، مصفوفة الزوايا النفسية، محرك الإعلانات المدفوعة، ونظام الرافعة لمضاعفة المبيعات.",
      },
      { property: "og:title", content: "التحويل والبيع — من المشاهدة إلى الكاش" },
      {
        property: "og:description",
        content: "TOFU → MOFU → BOFU، زوايا نفسية، اختبار خطافات مدفوعة، ورافعة بلا ميزانية.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/conversion" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/conversion" }],
  }),
});

function ConversionPage() {
  return (
    <BlueprintLayout currentSlug="/conversion" section={SECTION}>
      <SectionHead section={SECTION} index={2} />
      <Sheet05 />
      <Sheet08 />
      <Sheet10 />
      <Sheet12 />
    </BlueprintLayout>
  );
}
