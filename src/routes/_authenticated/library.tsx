import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BlueprintLayout } from "@/components/blueprint/BlueprintLayout";
import { supabase } from "@/integrations/supabase/client";
import { BOOKS, bookLessonId, type BookPage } from "@/lib/books";
import { fetchProgress, saveProgress, type ProgressRow } from "@/lib/progress";

type Search = { book?: string; page?: number };

export const Route = createFileRoute("/_authenticated/library")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    ...(typeof s["book"] === "string" ? { book: s["book"] } : {}),
    ...(Number(s["page"]) > 0 ? { page: Number(s["page"]) } : {}),
  }),
  component: LibraryPage,
  head: () => ({
    meta: [
      { title: "المكتبة التعليمية — كتب المحتوى والفانل والبيع | Roadmap of Content" },
      { name: "description", content: "اقرأ الكتب الأربعة كاملة: المحتوى الفيروسي، أول عميل، أنظمة التحويل، ونظام البيع في 90 يومًا مع تتبع التقدم." },
      { property: "og:title", content: "المكتبة التعليمية — Roadmap of Content" },
      { property: "og:description", content: "أربعة كتب كاملة لتعلم المحتوى والفانل والبيع والعلامة الشخصية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
});

function LibraryPage() {
  const { book, page } = Route.useSearch();
  const { user } = Route.useRouteContext();
  const [rows, setRows] = useState<ProgressRow[]>([]);
  useEffect(() => { fetchProgress(user.id).then(setRows).catch(() => setRows([])); }, [user.id]);
  const done = new Set(rows.filter((r) => r.completed).map((r) => r.lesson_id));
  const current = BOOKS.find((b) => b.id === book);

  return (
    <BlueprintLayout currentSlug="/library">
      {current ? (
        <Reader book={current} page={Math.min(page ?? 1, current.pages)} userId={user.id} done={done}
          onToggle={async (id, v) => { await saveProgress(user.id, id, v); setRows(await fetchProgress(user.id)); }} />
      ) : (
        <section className="sheet">
          <div className="sheet-head"><div className="sheet-title-wrap">
            <span className="sheet-num">LIBRARY / المكتبة</span>
            <h1>المكتبة التعليمية</h1>
            <p className="sheet-sub">أربعة كتب كاملة من الفكرة إلى الكاش. كل صفحة تعلّمها كمكتملة لتتابع تقدمك.</p>
          </div></div>
          <div className="lib-grid">
            {BOOKS.map((b) => {
              const n = Array.from({ length: b.pages }, (_, i) => bookLessonId(b.id, i + 1)).filter((id) => done.has(id)).length;
              return (
                <Link key={b.id} to="/library" search={{ book: b.id, page: 1 }} className="paper lib-card">
                  <span className="mono">{b.original}</span>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                  <div className="lib-bar"><i style={{ width: `${(n / b.pages) * 100}%` }} /></div>
                  <small>{n} / {b.pages} صفحة مكتملة</small>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </BlueprintLayout>
  );
}

function Reader({ book, page, done, onToggle }: {
  book: (typeof BOOKS)[number]; page: number; userId: string; done: Set<string>;
  onToggle: (id: string, v: boolean) => Promise<void>;
}) {
  const [pages, setPages] = useState<BookPage[] | null>(null);
  const [pdf, setPdf] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  useEffect(() => {
    setPages(null); setErr(null);
    const store = supabase.storage.from("learning-books");
    store.download(`${book.id}.json`).then(async ({ data, error }) => {
      if (error || !data) return setErr("تعذر تحميل نص الكتاب.");
      const json = JSON.parse(await data.text());
      setPages(Array.isArray(json) ? json : json.pages ?? []);
    });
    store.createSignedUrl(`${book.id}.pdf`, 3600).then(({ data }) => setPdf(data?.signedUrl ?? null));
  }, [book.id]);
  const text = (pages?.find((p) => p.page === page)?.text ?? "").replace(/\*\*/g, "").replace(/\$\\rightarrow\$/g, "←").replace(/^#+\s*/gm, "");
  const id = bookLessonId(book.id, page);
  const isDone = done.has(id);

  return (
    <section className="sheet reader">
      <div className="reader-top">
        <Link to="/library" search={{}} className="btn ghost">← المكتبة</Link>
        {pdf && <a href={pdf} target="_blank" rel="noreferrer" className="btn ghost"><i className="fas fa-file-pdf" /> النسخة الأصلية PDF</a>}
      </div>
      <span className="sheet-num">{book.original}</span>
      <h1>{book.title}</h1>
      <div className="reader-chapters">
        {book.chapters.map((c) => (
          <Link key={c.page} to="/library" search={{ book: book.id, page: c.page }} className={page >= c.page ? "on" : ""}>{c.title}</Link>
        ))}
      </div>
      <article className="paper reader-page">
        <span className="mono">صفحة {page} من {book.pages}</span>
        {err ? <p>{err}</p> : pages === null ? <p>جارٍ التحميل…</p> :
          text.trim() ? text.split(/\n{2,}/).map((para, i) => <p key={i}>{para}</p>) :
          <p>هذه الصفحة تصميمية/مصورة — افتح نسخة PDF لمشاهدتها.</p>}
      </article>
      <label className="reader-done">
        <input type="checkbox" checked={isDone} onChange={(e) => onToggle(id, e.target.checked)} /> تم إكمال هذه الصفحة
      </label>
      <nav className="pager">
        {page > 1 ? <Link to="/library" search={{ book: book.id, page: page - 1 }} className="pager-link"><b>الصفحة السابقة</b></Link> : <span />}
        {page < book.pages && <Link to="/library" search={{ book: book.id, page: page + 1 }} className="pager-link next"><b>الصفحة التالية</b></Link>}
      </nav>
    </section>
  );
}
