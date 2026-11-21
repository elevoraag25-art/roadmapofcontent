import trial from "@/assets/creator-plan.png.asset.json";
import monthly from "@/assets/funnel-plan.png.asset.json";
import lifetime from "@/assets/lifetime-plan.png.asset.json";
import type { Plan } from "./membership";
export function planImage(plan: Plan) {
  return plan.image_url || (plan.is_trial ? trial.url : plan.duration_days === null ? lifetime.url : monthly.url);
}
export function priceDescription(plan: Plan) {
  return plan.price_description || (plan.is_trial ? "تجربة مجانية تبدأ عند موافقة الإدارة؛ دون دفع تلقائي." : plan.duration_days === null ? "دفعة واحدة مقابل وصول دائم؛ التفعيل بعد مراجعة الإدارة." : "اشتراك لمدة 30 يومًا يبدأ عند التفعيل؛ دون تجديد أو اقتطاع تلقائي.");
}