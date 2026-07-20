
# خطة: تحويل مخطط "الهندسة الفيروسية" إلى موقع/تطبيق ويب احترافي

## الهدف
تحويل ملف HTML الضخم (1007 سطر، 8 أوراق/Sheets + Hero + خاتمة) إلى موقع TanStack Start احترافي متعدد الصفحات، مخصّص لصنّاع المحتوى، مع الحفاظ الكامل على الهوية البصرية (Blueprint داكن، RTL، خطوط Tajawal + IBM Plex، ألوان cyan/redline/money، شبكة هندسية) والتفاعلات (المسطرة العلوية، القائمة الجانبية، الأكورديون، الرسوم البيانية).

## بنية الموقع (Routes)
```
src/routes/
  __root.tsx              → RTL, dir="rtl", lang="ar", خطوط Google, Font Awesome, Meta عربية
  index.tsx               → الصفحة الرئيسية (Hero + نظرة عامة + روابط للأوراق)
  blueprint.tsx           → صفحة المخطط الكامل (كل الأوراق مع المسطرة والتنقل الجانبي)
  sheets.$id.tsx          → صفحة مفردة لكل ورقة (s01..s08) — SEO مستقل
  toolkit.tsx             → عدة صانع المحتوى (Checklists + قوالب قابلة للتحميل)
  about.tsx               → عن المنهجية
```

## المكونات (src/components/blueprint/)
- `RulerBar` — المسطرة العلوية مع تتبع التمرير (scroll progress + sheet marker)
- `SidebarNav` / `MobileMenu` — قائمة الأوراق مع تمييز النشط
- `Sheet` — غلاف الورقة مع رقم/عنوان/زخرفة blueprint
- `StagesChart` / `RetentionChart` — عبر `react-chartjs-2` + `chart.js` (بديل حديث لـ CDN)
- `Accordion` — للأسئلة والأقسام القابلة للطي
- `RedlineCallout`, `MoneyBadge`, `CyanTag` — عناصر تصميم متكررة
- `AmbientGrid` — خلفية الشبكة الهندسية المتحركة

## نظام التصميم (src/styles.css)
- استبدال tokens الافتراضية بألوان المخطط:
  - `--blueprint`, `--paper`, `--redline`, `--cyan`, `--money`, `--ink` (بصيغة oklch)
- تسجيلها في `@theme inline` للحصول على utilities مثل `bg-blueprint`, `text-cyan`, `bg-redline`
- شبكة الخلفية عبر `@utility blueprint-grid`
- الخطوط عبر `<link>` في `__root.tsx` (Tajawal + IBM Plex Sans Arabic + IBM Plex Mono) — ممنوع `@import` لروابط خارجية في styles.css
- `html[dir="rtl"]` عام + مقاييس مسافات RTL

## التفاعلات
- تتبع التمرير للمسطرة: `useEffect` + `IntersectionObserver` للأوراق
- الأكورديون: state محلي `useState`
- الرسوم: `react-chartjs-2` مع نفس بيانات/ألوان الأصل
- قائمة الموبايل: `Sheet` من shadcn أو Drawer مخصص RTL
- احترام `prefers-reduced-motion`

## SEO والميتاداتا
- `__root.tsx`: عنوان "مخطط الهندسة الفيروسية | من المحتوى إلى الكاش"، وصف عربي، og/twitter
- كل صفحة ورقة `sheets/$id`: عنوان + وصف مستقل بالعربية
- `lang="ar"` و `dir="rtl"` في shell

## التبعيات المطلوبة
- `chart.js` + `react-chartjs-2` (بديل CDN)
- `@fortawesome/fontawesome-free` أو الاكتفاء بـ Lucide (سأستخدم Lucide + بعض الأيقونات SVG مخصصة للحفاظ على الطابع الهندسي)

## خطوات التنفيذ
1. تحديث `src/styles.css` بنظام ألوان blueprint + خطوط + شبكة
2. تحديث `src/routes/__root.tsx`: RTL, lang="ar", Meta عربية, روابط الخطوط
3. تثبيت `chart.js` و `react-chartjs-2`
4. إنشاء مكونات `src/components/blueprint/*`
5. استخراج محتوى كل ورقة من HTML الأصلي (نصوص، إحصائيات، أكورديون) إلى `src/content/sheets.ts`
6. بناء `index.tsx` (Hero + Overview)
7. بناء `blueprint.tsx` (تجربة الصفحة الواحدة الكاملة كما في الأصل)
8. بناء `sheets.$id.tsx` (صفحة مستقلة لكل ورقة)
9. بناء `toolkit.tsx` و `about.tsx`
10. التحقق البصري عبر Playwright + لقطات

## ملاحظات
- سأحافظ على كل النصوص العربية الأصلية حرفياً
- التصميم سيبقى Blueprint داكن (ليس Light/Dark toggle) لأن هذه هوية الملف
- الرسوم البيانية بنفس البيانات
- لن أضيف Backend/Auth إلا إذا طلبت لاحقاً (نماذج جمع بريد، حفظ تقدم، إلخ)

هل توافق على هذه الخطة لأبدأ التنفيذ؟
