CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
 SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id=_user_id AND role=_role)
 AND (_role <> 'admin' OR _user_id='582d60fd-82f8-49cd-9aaa-9b799b9a5655'::uuid)
$$;
GRANT EXECUTE ON FUNCTION public.has_role(uuid,public.app_role) TO authenticated,service_role;
DROP POLICY "anyone reads active plans" ON public.plans;
CREATE POLICY "public active plans" ON public.plans FOR SELECT TO anon USING(is_active);
CREATE POLICY "member active plans" ON public.plans FOR SELECT TO authenticated USING(is_active OR public.has_role(auth.uid(),'admin'));
DROP POLICY "anyone reads active fields" ON public.form_fields;
CREATE POLICY "public active fields" ON public.form_fields FOR SELECT TO anon USING(is_active);
CREATE POLICY "member active fields" ON public.form_fields FOR SELECT TO authenticated USING(is_active OR public.has_role(auth.uid(),'admin'));
ALTER TABLE public.plans ADD COLUMN image_url text, ADD COLUMN price_description text;
ALTER TABLE public.profiles ADD COLUMN requested_plan_id uuid REFERENCES public.plans(id) ON DELETE SET NULL;
CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
 INSERT INTO public.profiles(id,email,full_name,phone,answers,requested_plan_id,submitted_at)
 VALUES(NEW.id,NEW.email,COALESCE(NEW.raw_user_meta_data->>'full_name',NEW.raw_user_meta_data->>'name'),NEW.raw_user_meta_data->>'phone',COALESCE(NEW.raw_user_meta_data->'application_answers','{}'::jsonb),(SELECT id FROM public.plans WHERE id::text=NEW.raw_user_meta_data->>'requested_plan_id' AND is_active),now()) ON CONFLICT(id) DO NOTHING;
 INSERT INTO public.user_roles(user_id,role) VALUES(NEW.id,'user') ON CONFLICT DO NOTHING;
 RETURN NEW;
END $$;
DROP POLICY "insert own" ON public.profiles;
CREATE POLICY "insert own pending" ON public.profiles FOR INSERT TO authenticated WITH CHECK(id=auth.uid() AND status='pending' AND NOT is_lifetime AND access_expires_at IS NULL AND approved_at IS NULL AND plan_id IS NULL AND admin_note IS NULL);
CREATE TABLE public.lesson_progress(user_id uuid NOT NULL,lesson_id text NOT NULL,completed boolean NOT NULL DEFAULT false,updated_at timestamptz NOT NULL DEFAULT now(),PRIMARY KEY(user_id,lesson_id));
GRANT SELECT,INSERT,UPDATE,DELETE ON public.lesson_progress TO authenticated;
GRANT ALL ON public.lesson_progress TO service_role;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "member reads own progress" ON public.lesson_progress FOR SELECT TO authenticated USING(user_id=auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "active member writes progress" ON public.lesson_progress FOR INSERT TO authenticated WITH CHECK(user_id=auth.uid() AND public.has_active_access(auth.uid()));
CREATE POLICY "active member updates progress" ON public.lesson_progress FOR UPDATE TO authenticated USING(user_id=auth.uid() AND public.has_active_access(auth.uid())) WITH CHECK(user_id=auth.uid() AND public.has_active_access(auth.uid()));
CREATE POLICY "member resets own progress" ON public.lesson_progress FOR DELETE TO authenticated USING(user_id=auth.uid());
CREATE TRIGGER progress_updated BEFORE UPDATE ON public.lesson_progress FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();