import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem", fontWeight: 900, color: "var(--redline)" }}>404</h1>
        <h2 style={{ marginTop: "0.6rem", fontSize: "1.2rem" }}>الصفحة غير موجودة</h2>
        <p style={{ marginTop: "0.6rem", color: "var(--text-muted)" }}>الرابط الذي طلبته غير متاح أو تم نقله.</p>
        <a href="/" className="btn" style={{ display: "inline-block", marginTop: "1.4rem", textDecoration: "none" }}>الرجوع للمخطط</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ fontSize: "1.4rem" }}>تعذّر تحميل هذه الصفحة</h1>
        <p style={{ marginTop: "0.6rem", color: "var(--text-muted)" }}>حصل خطأ غير متوقع. جرّب مرة أخرى أو ارجع للرئيسية.</p>
        <div style={{ marginTop: "1.4rem", display: "flex", gap: "0.6rem", justifyContent: "center" }}>
          <button className="btn" onClick={() => { router.invalidate(); reset(); }}>حاول من جديد</button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مخطط الهندسة الفيروسية | من المحتوى إلى الكاش" },
      { name: "description", content: "دليل هندسي متكامل لصنّاع المحتوى والمسوّقين: خوارزميات المنصات، ثالوث الفيرال، معادلة العرض، سكريبتات جاهزة، قمع البيع والأتمتة، مصنع الأفكار، مصفوفة الزوايا التسويقية، علم الفيروسية، محرك الإعلانات المدفوعة، بنك الخطافات، ونظام الرافعة — من الفكرة إلى الكاش، في مكان واحد." },
      { name: "author", content: "Content Engine" },
      { property: "og:title", content: "مخطط الهندسة الفيروسية | من المحتوى إلى الكاش" },
      { property: "og:description", content: "دليل هندسي متكامل لصنّاع المحتوى والمسوّقين: خوارزميات المنصات، ثالوث الفيرال، معادلة العرض، سكريبتات جاهزة، قمع البيع والأتمتة، مصنع الأفكار، مصفوفة الزوايا التسويقية، علم الفيروسية، محرك الإعلانات المدفوعة، بنك الخطافات، ونظام الرافعة — من الفكرة إلى الكاش، في مكان واحد." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "مخطط الهندسة الفيروسية | من المحتوى إلى الكاش" },
      { name: "twitter:description", content: "دليل هندسي متكامل لصنّاع المحتوى والمسوّقين: خوارزميات المنصات، ثالوث الفيرال، معادلة العرض، سكريبتات جاهزة، قمع البيع والأتمتة، مصنع الأفكار، مصفوفة الزوايا التسويقية، علم الفيروسية، محرك الإعلانات المدفوعة، بنك الخطافات، ونظام الرافعة — من الفكرة إلى الكاش، في مكان واحد." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/feb948ce-9c7a-4f28-ade4-b2d83fd7665e/id-preview-40bfb5bd--cbaa8aee-70c5-46a9-a2b7-98132d3bef8a.lovable.app-1784534262972.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/feb948ce-9c7a-4f28-ade4-b2d83fd7665e/id-preview-40bfb5bd--cbaa8aee-70c5-46a9-a2b7-98132d3bef8a.lovable.app-1784534262972.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
