# Personal Website Revamp Plan

## Top-Level Overview

**Goal**: Complete overhaul of the personal portfolio website for Jessa Ardithya Chriswantoro.

**Scope**:
- Build a proper dual-identity design system (polished light + strong dark mode) with custom Tailwind tokens
- Re-integrate the two commented-out components: `TechStackVisualizer` (after Hero) and `ProjectTimeline` (replacing Experience as the main career section)
- Add `framer-motion` for subtle, professional scroll-triggered section entrance animations
- Improve mobile layout throughout all components
- Update navigation and footer to reflect all active sections
- Keep `Experience.tsx` in the codebase but commented out as a backup

**New Section Order**:
1. Hero
2. TechStackVisualizer (Tech Stack)
3. ProjectTimeline (Career Journey — replaces Experience)
4. Education
5. Skills
6. Projects
7. Blog
8. Certifications
9. Contact

**Tech Stack Additions**: `framer-motion`

**Non-Goals**:
- No new data features (no contact form, no CMS, no downloadable CV)
- No new data content (existing hardcoded data stays)
- No heavy animations (no typing effects, no animated skill bars, no parallax)
- Do not delete `Experience.tsx` — leave it commented out

---

## Sub-Tasks

---

### Sub-Task 1 — Design System & Tailwind Token Setup

**Status**: [ ] pending

**Intent**
Establish the visual foundation for the entire revamp. Define custom Tailwind design tokens (colors, typography, border radius, box shadows, transitions) so every subsequent component can reference consistent values rather than arbitrary defaults. This single source of truth ensures both light and dark modes are equally polished.

**Expected Outcomes**
- `tailwind.config.js` has a full custom theme extension with named color palette, typography scale, shadow definitions, and border radius values
- `src/index.css` has any necessary global styles and font imports cleaned up (remove legacy `App.css` styles from `App.tsx` import)
- `App.css` legacy styles removed from imports (the file can stay but its import in `main.tsx` / `App.tsx` should be removed since it contains unused styles)
- Both light and dark mode visual identities are defined at the token level

**Todo List**
1. Install `framer-motion` via package.json dependency
2. Update `tailwind.config.js` to add:
   - Custom color palette: primary (blue family), neutral (slate family), surface colors for light/dark cards, background layers
   - Custom font family (add `Inter` or keep system font but define the token explicitly)
   - Custom box-shadow tokens (e.g., `shadow-card`, `shadow-card-hover`) for light mode
   - Custom border-radius tokens if needed
3. Update `src/index.css`:
   - Add CSS custom properties for any values not covered by Tailwind
   - Keep the `fadeInUp` keyframe but mark it as legacy (framer-motion will replace usage)
   - Add smooth color transition on `:root` / `html` for theme changes
4. Remove the `import './App.css'` from `App.tsx` (the file itself stays, just unused)

**Relevant Context**
- `tailwind.config.js` — currently minimal, uses all defaults
- `src/index.css` — contains only `fadeInUp` animation and scroll-behavior
- `src/App.css` — contains unused legacy styles (`#root`, `.logo`, `.card`)
- `src/App.tsx` line 1 area — currently imports `App.css`

---

### Sub-Task 2 — Header & Navigation Revamp

**Status**: [ ] pending

**Intent**
Update the Header to reflect the new section order, re-enable all commented-out nav items, and improve the visual quality of the navbar for both light and dark mode. Mobile menu should also be visually improved.

**Expected Outcomes**
- All nav items active: About, Tech Stack, Timeline, Education, Skills, Projects, Blog, Certifications, Contact
- Header visual uses new design tokens (backdrop blur on scroll, refined typography, improved dark mode contrast)
- Mobile menu has clean styling consistent with the new design system
- Theme toggle button visually improved

**Todo List**
1. In `Header.tsx`, uncomment all nav items (Tech Stack → `#tech-stack`, Timeline → `#timeline`, Education → `#education`, Certifications → `#certifications`)
2. Update the header background, blur, and shadow classes to use new design tokens
3. Improve mobile navigation layout (full-screen overlay or improved slide-down panel)
4. Improve the theme toggle button styling to match new design
5. Ensure active link highlighting is consistent

**Relevant Context**
- `src/components/Header.tsx` — 4 nav items commented out (lines 20-28)
- Uses `useTheme()` from `ThemeContext` — no changes to context needed
- Currently uses `isScrolled` state for backdrop blur — keep this behavior

---

### Sub-Task 3 — Hero Section Revamp

**Status**: [ ] pending

**Intent**
Redesign the Hero section as a strong first impression. Improve the layout, typography, visual hierarchy, and add a subtle scroll-triggered entrance animation via framer-motion. The hero should feel premium for both light and dark mode.

**Expected Outcomes**
- Hero uses a visually stronger layout with better type hierarchy
- Profile image has an improved presentation (better ring/frame treatment)
- Expertise chips are visually polished
- Contact info row is cleaner
- `framer-motion` `motion.div` entrance animation replaces the CSS `animate-fadeInUp` class
- Fully responsive on mobile

**Todo List**
1. Replace CSS `animate-fadeInUp` classes with `framer-motion` `motion.div` with `initial`, `animate`, `transition` props
2. Improve Hero typography: larger headline, better subtitle sizing, improved line heights
3. Redesign the expertise chips to use the new design token colors
4. Improve profile image treatment — adjust ring, shadow, and gradient border
5. Improve the contact info row spacing and styling
6. Ensure the LinkedIn button matches the new design system
7. Clean up the background gradient and glow decorations to align with new palette

**Relevant Context**
- `src/components/Hero.tsx` — uses `animate-fadeInUp` CSS class (lines 14, 29)
- Profile image imported from `../assets/latest_profile.jpg`
- Background glows via two aria-hidden decorative divs — can keep but update colors

---

### Sub-Task 4 — Re-integrate TechStackVisualizer

**Status**: [ ] pending

**Intent**
Uncomment and integrate `TechStackVisualizer` into the page as the second section (after Hero). Redesign its visual layout to match the new design system and add a scroll-triggered entrance animation.

**Expected Outcomes**
- `TechStackVisualizer` is imported, uncommented, and rendered in `App.tsx` after `Hero`
- The section `id="tech-stack"` is navigable from the Header nav
- Visual style matches new design tokens (node colors, card backgrounds, text)
- `framer-motion` entrance animation on scroll
- Fully responsive on mobile (SVG diagram should degrade gracefully on small screens)

**Todo List**
1. Uncomment `TechStackVisualizer` import and usage in `App.tsx`
2. Wrap the section in a `framer-motion` scroll-triggered `motion.div`
3. Update node colors, card backgrounds, and typography to use new design tokens
4. Improve the SVG connection lines (consider making them use the design palette)
5. Improve the details panel card styling (right panel when a node is selected)
6. Improve the legend at the bottom to match new design
7. Test mobile layout — the SVG grid may need a responsive fallback

**Relevant Context**
- `src/components/TechStackVisualizer.tsx` — currently commented out in `App.tsx` lines 4, 22
- Uses absolute-positioned SVG with percentage-based coordinates — be careful with mobile
- Has a `selectedTech` state for the details panel — preserve this interactivity

---

### Sub-Task 5 — Re-integrate ProjectTimeline (Career Journey Section)

**Status**: [ ] pending

**Intent**
Uncomment and integrate `ProjectTimeline` as the career journey section, replacing the visible `Experience` section. Comment out `Experience` in `App.tsx`. Redesign the timeline visually and add scroll-triggered animation.

**Expected Outcomes**
- `ProjectTimeline` is imported and rendered in `App.tsx` at position 3 (after TechStackVisualizer)
- `Experience` component is commented out in `App.tsx` (not deleted)
- The section `id="timeline"` is navigable from Header nav
- Timeline visual design matches new design tokens
- Expand/collapse interaction is smooth and polished
- `framer-motion` scroll entrance animation applied
- Mobile layout is clean (the current `ml-20` offset should work but verify)

**Todo List**
1. Uncomment `ProjectTimeline` import and usage in `App.tsx`; comment out `Experience` import and usage
2. Wrap the section in a `framer-motion` scroll-triggered `motion.div`
3. Update timeline dot colors, card border-left accents, and badge styles to new design tokens
4. Improve the expand/collapse animation (can use framer-motion `AnimatePresence` for the expanded content)
5. Improve the summary stats grid at the bottom
6. Verify mobile layout renders cleanly (timeline line and card indentation)

**Relevant Context**
- `src/components/ProjectTimeline.tsx` — 7 timeline events, 3 event types (career/project/education)
- `src/components/Experience.tsx` — to be commented out, NOT deleted
- `App.tsx` lines 4-5, 22-23 — the commented sections to swap

---

### Sub-Task 6 — Education, Skills & Projects Section Redesign

**Status**: [ ] pending

**Intent**
Redesign these three static sections (no hook changes needed) to match the new design system. Add scroll-triggered entrance animations. Improve card designs, typography, and mobile layout.

**Expected Outcomes**
- All three sections use new design tokens for backgrounds, card surfaces, shadows, and typography
- `framer-motion` scroll entrance animation on each section
- Card hover states are polished and consistent
- Mobile layouts are clean

**Todo List**
1. **Education**: Update card backgrounds and icon container styles; improve status badge design; add scroll entrance animation
2. **Skills**: Update 4-category cards with new shadow/border treatment; improve icon containers; add staggered card entrance animation
3. **Projects**: Update project cards (background, shadow, tech badge colors, impact sidebar card); add scroll entrance animation; improve the border-left accent on the impact card

**Relevant Context**
- `src/components/Education.tsx` — 2 entries, status badge, static
- `src/components/Skills.tsx` — 4 categories, grid of 2 columns, static
- `src/components/Projects.tsx` — 3 projects, 2/3 + 1/3 layout, static

---

### Sub-Task 7 — Blog & Certifications Section Redesign

**Status**: [ ] pending

**Intent**
Redesign Blog and Certifications sections to match the new design system. Both have filter + pagination state — preserve all logic, only update visual presentation and add scroll entrance animations.

**Expected Outcomes**
- Blog article cards have polished styling with new design tokens
- Category filter buttons use new design token pill styles
- Pagination is visually consistent
- Certifications grid cards use new design tokens and category color system
- Both sections have scroll entrance animations
- Both sections look equally good in light and dark mode

**Todo List**
1. **Blog**: Update article card backgrounds, tag badge styles, filter button styles; improve the Read More/Less button; improve the category sidebar panel; add scroll entrance animation
2. **Certifications**: Update cert card design (icon container, category badge colors aligned with design tokens); improve filter pills; improve pagination; add scroll entrance animation

**Relevant Context**
- `src/components/Blog.tsx` — 3 useState hooks; `getCategoryColor` inline object in Certifications
- `src/components/Certifications.tsx` — `getCategoryColor()` function with inline color map; 2 useState hooks

---

### Sub-Task 8 — Contact Section & Footer Revamp

**Status**: [ ] pending

**Intent**
Redesign Contact and Footer to match the new design system. Fix Footer quick links to reflect the correct active sections (Timeline, Tech Stack should be active; Education and Certifications should also be active now). Add scroll entrance animation to Contact.

**Expected Outcomes**
- Contact section has polished card layout matching new design tokens
- Footer quick links are fully correct and up to date with all active sections
- Footer brand section and contact column are visually improved
- Footer dark background integrates well with the dark mode design

**Todo List**
1. **Contact**: Update contact method card icons, backgrounds, and typography; update Professional Details box styling; add framer-motion scroll entrance animation
2. **Footer**: Uncomment the Tech Stack quick link; verify all active sections have links (About, Tech Stack, Timeline, Education, Skills, Projects, Blog, Certifications, Contact); update visual styling to match new design; improve the social link button

**Relevant Context**
- `src/components/Contact.tsx` — static, no hooks
- `src/components/Footer.tsx` — Tech Stack link commented out (line 29-32); Timeline link exists but was linking to a previously disabled section

---

### Sub-Task 9 — Final Integration, Polish & Responsive QA

**Status**: [ ] pending

**Intent**
Final pass to ensure everything works together as a cohesive whole. Verify the full page renders correctly, all navigation anchor links work, animations are not jarring, and mobile layout is clean end-to-end.

**Expected Outcomes**
- All 9 sections render in the correct order
- All nav links scroll to the correct section anchors
- No console errors or TypeScript errors
- Light mode and dark mode both look polished end-to-end
- Mobile layout tested at all key breakpoints (360px, 768px, 1024px+)
- `npm run build` passes with no errors
- `npm run lint` passes with no new warnings

**Todo List**
1. Do a full page visual pass in both light and dark mode
2. Test all nav link anchors in Header and Footer
3. Test the TechStackVisualizer interactive node clicks
4. Test ProjectTimeline expand/collapse for all 7 events
5. Test Blog category filter + pagination + expand/collapse
6. Test Certifications category filter + pagination
7. Test mobile menu open/close in Header
8. Run `npm run build` and resolve any TypeScript/lint errors
9. Run `npm run lint` and fix any new lint issues

**Relevant Context**
- All components and `App.tsx`
- `vite.config.ts` for build
- `tsconfig.app.json` for TypeScript strictness — `noUnusedLocals` and `noUnusedParameters` are enabled, so any newly introduced unused variables will fail the build
