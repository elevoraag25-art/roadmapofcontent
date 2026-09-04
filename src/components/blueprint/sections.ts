export type SheetMeta = { id: string; code: string; label: string; icon: string };

export type SectionMeta = {
  slug: string;
  title: string;
  short: string;
  emoji: string;
  icon: string;
  desc: string;
  sheets: SheetMeta[];
};

export const SECTIONS: SectionMeta[] = [
  {
    slug: "/production",
    title: "الإنتاج — هندسة الفيديو",
    short: "الإنتاج",
    emoji: "🎬",
    icon: "fa-clapperboard",
    desc: "من قراءة الخوارزمية إلى السكريبت والمونتاج: كيف يُصنع فيديو يستحق الانتشار.",
    sheets: [
      { id: "s01", code: "01", label: "علم الخوارزمية", icon: "fa-chart-simple" },
      { id: "s02", code: "02", label: "ثالوث الهندسة الفيروسية", icon: "fa-bullseye" },
      { id: "s03", code: "03", label: "معادلة العرض الماسي", icon: "fa-crown" },
      { id: "s04", code: "04", label: "السكريبت والمونتاج", icon: "fa-pen-nib" },
    ],
  },
  {
    slug: "/conversion",
    title: "التحويل والبيع",
    short: "التحويل والبيع",
    emoji: "💰",
    icon: "fa-sack-dollar",
    desc: "تحويل المشاهدة إلى ليد ثم إلى كاش: القمع، الزوايا، الإعلانات، والرافعة.",
    sheets: [
      { id: "s05", code: "05", label: "قمع البيع والأتمتة", icon: "fa-filter" },
      { id: "s08", code: "08", label: "مصفوفة الزوايا", icon: "fa-compass-drafting" },
      { id: "s10", code: "10", label: "محرك الإعلانات", icon: "fa-bullhorn" },
      { id: "s12", code: "12", label: "نظام الرافعة", icon: "fa-people-group" },
    ],
  },
  {
    slug: "/ideas",
    title: "الأفكار والتنفيذ",
    short: "الأفكار والتنفيذ",
    emoji: "🧪",
    icon: "fa-lightbulb",
    desc: "مصنع أفكار لا ينضب، بروتوكول تنفيذ أسبوعي، قياس علمي، وبنك خطافات جاهز.",
    sheets: [
      { id: "s06", code: "06", label: "مصنع الأفكار", icon: "fa-lightbulb" },
      { id: "s07", code: "07", label: "بروتوكول التنفيذ", icon: "fa-list-check" },
      { id: "s09", code: "09", label: "علم الفيروسية", icon: "fa-chart-line" },
      { id: "s11", code: "11", label: "بنك الخطافات", icon: "fa-fish" },
    ],
  },
  {
    slug: "/strategy",
    title: "الاستراتيجية والعلامة",
    short: "الاستراتيجية",
    emoji: "🧭",
    icon: "fa-compass",
    desc: "التموضع، قوالب الفيديو، كتابة المحتوى الإعلاني، أنماط القمع والعروض، وخريطة القنوات.",
    sheets: [
      { id: "s22", code: "22", label: "العلامة والتموضع", icon: "fa-fingerprint" },
      { id: "s23", code: "23", label: "كتالوج أشكال الفيديوهات", icon: "fa-film" },
      { id: "s24", code: "24", label: "محرك كتابة الإعلان", icon: "fa-pen-fancy" },
      { id: "s25", code: "25", label: "أنماط القمع والعروض", icon: "fa-filter-circle-dollar" },
      { id: "s26", code: "26", label: "خريطة قنوات التسويق", icon: "fa-diagram-project" },
    ],
  },
  {
    slug: "/organic",
    title: "الترافيك العضوي",
    short: "الترافيك العضوي",
    emoji: "📈",
    icon: "fa-seedling",
    desc: "نظام كامل عبر 3 قنوات: السوشيال، يوتيوب، وSEO الموقع — تدفق مستمر بلا حظ.",
    sheets: [
      { id: "s15", code: "15", label: "خارطة الترافيك", icon: "fa-map" },
      { id: "s16", code: "16", label: "البروفايل والهاشتاغات", icon: "fa-id-card" },
      { id: "s17", code: "17", label: "التوزيع والترندات", icon: "fa-share-nodes" },
      { id: "s18", code: "18", label: "النمو بالتفاعل", icon: "fa-comments" },
      { id: "s19", code: "19", label: "محرك يوتيوب", icon: "fa-youtube" },
      { id: "s20", code: "20", label: "SEO الموقع", icon: "fa-magnifying-glass" },
    ],
  },
  {
    slug: "/reference",
    title: "المرجع السريع",
    short: "المرجع",
    emoji: "📎",
    icon: "fa-book",
    desc: "الورقة المرجعية قبل كل تصوير، لوحة القياس الأسبوعية، صندوق الأدوات والمسرد.",
    sheets: [
      { id: "s13", code: "13", label: "الورقة المرجعية", icon: "fa-flag-checkered" },
      { id: "s21", code: "21", label: "الملحق والمسرد", icon: "fa-book" },
    ],
  },
];

export const ALL_SHEETS = SECTIONS.flatMap((s) => s.sheets);
