import { supabase } from "@/integrations/supabase/client";

export type Plan = {
  id: string;
  name: string;
  description: string | null;
  price: number;
  currency: string;
  duration_days: number | null;
  is_active: boolean;
  is_trial: boolean;
  sort_order: number;
};

export type FormField = {
  id: string;
  field_key: string;
  label: string;
  field_type: string;
  placeholder: string | null;
  options: string[];
  is_required: boolean;
  is_active: boolean;
  sort_order: number;
};

export type MemberStatus = "pending" | "approved" | "rejected" | "banned";

export type Profile = {
  id: string;
  email: string | null;
  full_name: string | null;
  phone: string | null;
  answers: Record<string, string>;
  status: MemberStatus;
  plan_id: string | null;
  access_expires_at: string | null;
  is_lifetime: boolean;
  admin_note: string | null;
  submitted_at: string | null;
  approved_at: string | null;
  created_at: string;
};

export const STATUS_LABEL: Record<MemberStatus, string> = {
  pending: "قيد المراجعة",
  approved: "مُفعّل",
  rejected: "مرفوض",
  banned: "محظور",
};

export async function fetchPlans(activeOnly = true): Promise<Plan[]> {
  let q = supabase.from("plans").select("*").order("sort_order");
  if (activeOnly) q = q.eq("is_active", true);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as Plan[];
}

export async function fetchFormFields(activeOnly = true): Promise<FormField[]> {
  let q = supabase.from("form_fields").select("*").order("sort_order");
  if (activeOnly) q = q.eq("is_active", true);
  const { data, error } = await q;
  if (error) throw error;
  return (data ?? []) as FormField[];
}

export async function fetchMyProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
  if (error) throw error;
  return (data as Profile) ?? null;
}

export function accessLabel(p: Pick<Profile, "is_lifetime" | "access_expires_at" | "status">) {
  if (p.status !== "approved") return "—";
  if (p.is_lifetime) return "مدى الحياة";
  if (!p.access_expires_at) return "غير محدد";
  const end = new Date(p.access_expires_at);
  const days = Math.ceil((end.getTime() - Date.now()) / 86400000);
  return days > 0
    ? `${end.toLocaleDateString("ar")} · باقٍ ${days} يوم`
    : `منتهٍ في ${end.toLocaleDateString("ar")}`;
}
