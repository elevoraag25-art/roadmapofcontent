import { createFileRoute } from "@tanstack/react-router";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { SECTIONS } from "@/components/blueprint/sections";
import { SectionHead } from "@/components/blueprint/SectionHead";
import { Sheet27 } from "@/components/blueprint/sheets/Sheet27";
import { Sheet28 } from "@/components/blueprint/sheets/Sheet28";
import { Sheet29 } from "@/components/blueprint/sheets/Sheet29";
import { Sheet30 } from "@/components/blueprint/sheets/Sheet30";
import { Sheet31 } from "@/components/blueprint/sheets/Sheet31";
import { Sheet32 } from "@/components/blueprint/sheets/Sheet32";
import { Sheet33 } from "@/components/blueprint/sheets/Sheet33";
import { Sheet34 } from "@/components/blueprint/sheets/Sheet34";

const SECTION = SECTIONS.find((s) => s.slug === "/brand")!;

export const Route = createFileRoute("/_authenticated/brand")({
  component: BrandPage,
  head: () => ({
    meta: [
      { title: "خارطة طريق العلامة الشخصية — 8 خطوات لبناء علامة صانع محتوى" },
      {
        name: "description",
        content:
          "ثماني خطوات متسلسلة لبناء علامة شخصية قوية: التعريف، الارتباطات، القصة، النطاق، الوسيط، التصوير، وتيرة النشر، والشلال والاستدامة.",
      },
      { property: "og:title", content: "خارطة طريق العلامة الشخصية — 8 خطوات" },
      {
        property: "og:description",
        content: "من تعريف علامتك إلى آلة محتوى مستدامة، خطوة بخطوة.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://roadmapofcontent.lovable.app/brand" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://roadmapofcontent.lovable.app/brand" }],
  }),
});

function BrandPage() {
  return (
    <BlueprintLayout currentSlug="/brand" section={SECTION}>
      <SectionHead section={SECTION} index={5} />
      <Sheet27 />
      <Sheet28 />
      <Sheet29 />
      <Sheet30 />
      <Sheet31 />
      <Sheet32 />
      <Sheet33 />
      <Sheet34 />
    </BlueprintLayout>
  );
}
