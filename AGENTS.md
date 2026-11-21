<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Administrative authorization must use the existing database role function restricted to the designated immutable owner ID; this protects every RLS-managed surface rather than only hiding navigation.
- Store licensed books and extracted reading text in the private learning-books bucket with active-membership SELECT policies; signed short-lived URLs prevent anonymous access.
- Persist lesson completion in lesson_progress and use the shared lesson catalog for member and administrator counts; this keeps reports consistent across devices.
