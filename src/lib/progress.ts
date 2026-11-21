import { supabase } from "@/integrations/supabase/client";
import { ALL_SHEETS } from "@/components/blueprint/sections";
import { BOOKS, bookLessonId } from "./books";

export const LESSON_IDS = [...ALL_SHEETS.map(s => s.id), ...BOOKS.flatMap(b => Array.from({ length: b.pages }, (_, i) => bookLessonId(b.id, i + 1)))];
export type ProgressRow = {user_id:string;lesson_id:string;completed:boolean;updated_at:string};
export async function fetchProgress(userId?: string): Promise<ProgressRow[]> {
  let query = supabase.from("lesson_progress").select("*");
  if (userId) query = query.eq("user_id", userId);
  const {data,error} = await query;
  if (error) throw error;
  return data ?? [];
}
export async function saveProgress(userId:string, lessonId:string, completed:boolean) {
  if (!LESSON_IDS.includes(lessonId)) throw new Error("درس غير معروف");
  const {error} = await supabase.from("lesson_progress").upsert({user_id:userId,lesson_id:lessonId,completed});
  if (error) throw error;
}
export function progressCount(rows: ProgressRow[], userId: string) {
  return new Set(rows.filter(r => r.user_id === userId && r.completed && LESSON_IDS.includes(r.lesson_id)).map(r=>r.lesson_id)).size;
}