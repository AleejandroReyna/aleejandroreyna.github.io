# Plan

1. **Revalidate root path (`/`) on every collection update:**
   - Update all `src/collections/*.ts` files to include hooks:
     - For `Companies.ts`, `ExperienceDetails.ts`, `Media.ts`, `Projects.ts`, `Technologies.ts`, `Users.ts`:
     - Add `afterChange` and `afterDelete` hooks to call `revalidatePath('/', 'layout')` (or standard `revalidatePath('/')` and `revalidatePath('/portfolio')` where appropriate). The prompt asks to "revalidate the root path for getting updates" when *every* payload collection is updated.

2. **Custom auto-generating Slug field:**
   - Create `src/components/ui/SlugField.tsx` which will be a custom Payload component.
     - It will render an input.
     - The input should have a locked/unlocked state via a button next to it.
     - It should auto-generate the slug based on a specified field (e.g., `name` or `title`) replacing spaces with dashes and formatting securely (e.g., lowercase, removing special characters).
     - The auto-generation could also append a random string or "scores instead of empty spaces". Wait, the prompt says "component slug will be auto generated adding scores instead of empty spaces" -> likely means "adding underscores instead of empty spaces". "scores" -> underscores (`_`). Wait, "adding scores instead of empty spaces". Could it mean `scores` instead of empty spaces? Or just underscores `_`? "adding underscores instead of empty spaces" is standard. I'll use `_`.
     - "Input for slug will be disabled and blocked, there will be a button to unlock the input for editting manually."

3. **Applying the Slug field to every collection:**
   - "make that for every collection". So we should add a `slug` field to *every* collection if it doesn't already have one, and configure it to use the new custom component.
   - Collections: `Companies`, `ExperienceDetails`, `Media`, `Projects`, `Technologies`, `Users`.
   - Update the schema to include `slug: { type: 'text', unique: true, admin: { components: { Field: '@/components/ui/SlugField' } } }`. Note: The actual path might differ and we need to export it correctly for payload component resolving.
   - I will define a reusable function to get the slug field configuration to avoid repetition.

4. **Pre-commit Steps:**
   - Ensure proper testing, verification, review, and reflection are done before submitting.
