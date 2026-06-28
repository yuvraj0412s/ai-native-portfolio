# UI analysis — AI portfolio (this repository)

This document describes the **visual system, layout, and interaction patterns** used in this project so you can recreate a matching experience in another app (e.g. React Native, another web stack, or a design handoff).

**Scope note:** This workspace is a **Next.js 15** web app (AI chat + landing). It is **not** the Expo “Tinder-style swipe cards” prototype described in some notes—there is no swipe deck or `expo-router` here. If you need a spec for that separate mobile demo, use its codebase; this file reflects **only** what exists in `portfolio-main`.

---

## 1. Product surface & information architecture

| Route / area | Purpose |
|--------------|---------|
| `/` (home) | Hero: name, “AI Portfolio” title, memoji image, primary “Ask me anything” field, quick-question grid, GitHub star button, theme toggle, “Looking for a talent?” CTA, optional fluid cursor background |
| `/chat` | Full-screen chat: animated memoji/video avatar header, AI responses (tools + markdown), suggested prompts, bottom composer, helper quick-questions + bottom sheet drawer |

**Navigation pattern:** Home submits free text or preset questions via `router.push('/chat?query=…')`. Chat can link back to home by tapping the avatar (full navigation).

---

## 2. Visual language

### 2.1 Theme & color

- **Theming:** `next-themes` with `class` strategy on `<html>`, default **light**. Body uses explicit `bg-white` / `dark:bg-black` with **500ms** color transitions.
- **Semantic tokens:** CSS variables in `src/app/globals.css` (OKLCH) for `background`, `foreground`, `primary`, `secondary`, `muted`, `accent`, `border`, `destructive`, charts, etc. Components often combine tokens with **literal** brand colors for key actions.
- **Brand / accent blues (hard-coded in UI):**
  - Primary action buttons and submit controls: **`#0171E3`** (hover: `blue-600` / `blue-700` in dark).
  - iMessage-style **user bubble**: **`#007AFF`** (Apple blue), **rounded-3xl**, light text via `text-primary-foreground`.
- **Quick-question category colors (icons):**
  - Me: `#329696`
  - Projects: `#3E9858`
  - Skills: `#856ED9`
  - Fun: `#B95F9D`
  - Contact: `#C19433`
- **Chat composer bar (light):** Border `#E5E5E9`, fill `#ECECF0`; **dark:** `neutral-700` / `neutral-800`.
- **Status / attention:** Green **ping dot** on “Looking for a talent?” (tailwind `green-400` ping + `green-500` core).

### 2.2 Typography

- **Font:** **Inter** via `next/font` (`--font-inter` on `body`). `@theme` also references Geist sans/mono variables for Tailwind v4 theme wiring.
- **Hierarchy (home):**
  - Subtitle: `text-secondary-foreground`, `text-xl` → `md:text-2xl`, `font-semibold`
  - Main title: `text-4xl` → up to `lg:text-7xl`, `font-bold`
- **Chat landing:** `text-2xl font-semibold` headline; supporting `text-muted-foreground`, `max-w-md`.
- **Welcome modal:** `text-4xl font-bold tracking-tight` title; section headings `text-xl font-semibold`.

### 2.3 Shape, depth, and materials

- **Radius:** Global `--radius: 0.625rem` (~10px). UI uses **full pills** for search bars (`rounded-full`), **2xl** for cards/modal shells (`rounded-2xl`), **lg/xl** for smaller controls.
- **Glass / blur:** Frosted surfaces use `bg-white/30` or `bg-neutral-800` variants with **`backdrop-blur-lg`** (and `shadow-md` on some chips).
- **Borders:** Neutral-200/700 dividers; outline buttons use `border-border`.
- **Footer watermark (home):** Large background name “Yuvraj” with `bg-gradient-to-b from-neutral-500/10 to-transparent`, `bg-clip-text`, **hidden below `sm`**.

### 2.4 Custom scrollbar

- Class **`custom-scrollbar`**: thin track, ~4px thumb, semi-transparent gray (`rgba(155,155,155,0.5)`), used in scrollable chat/tool areas.

---

## 3. Home page (`/`) — layout & components

### 3.1 Structure (top → bottom)

1. **Absolute top-right:** `ThemeToggle` + `GithubButton` (`sm`, animated star count, repo link).
2. **Absolute top-left:** Pill button “Looking for a talent?” — `rounded-full`, `border`, `bg-white/30`, `backdrop-blur-lg`, green pulse dot, hover lightens background; dark mode inverts text/border.
3. **Header block (motion):** `WelcomeModal` trigger (logo in frosted ghost button) → “Hey, I'm Yuvraj Singh 👋” → “AI Portfolio” title. Entry animation: opacity + vertical slide (`y: -60` / `80`, duration `0.8s`, ease).
4. **Hero image:** Container `h-52 w-48` → `sm:h-72 sm:w-72`, memoji PNG scaled (`scale-[1.2]`, slight `translate-y-1`).
5. **Primary input:** Max width `max-w-lg`, **pill** row: left padding `pl-6`, `border-neutral-200`, `bg-white/30`, `backdrop-blur`; input transparent; **right** circular submit `bg-[#0171E3]`, `ArrowRight` icon, disabled when empty.
6. **Quick grid:** `max-w-2xl`, `grid-cols-1` → `sm:grid-cols-3` → `md:grid-cols-5`, gap `3`. Each cell: `Button` `outline`, **square aspect**, `rounded-2xl`, frosted background, **no** default shadow, `active:scale-95`, icon + label.
7. **FluidCursor:** Full-screen fixed canvas `z-0` behind content (WebGL/fluid simulation via `use-FluidCursor` hook).

### 3.2 Motion (Framer Motion)

- Top block: `hidden` → `visible` with ease, `0.8s`.
- Bottom block: same with `delay: 0.2`.

---

## 4. Chat page (`/chat`) — layout & components

### 4.1 Shell

- **Root:** `h-screen overflow-hidden`.
- **Top-right:** `WelcomeModal` with **Info** icon trigger (rounded hover area) + `GithubButton`.
- **Fixed header band:** Full-width **gradient fade** from solid white/black to transparent (`from-white via-white/95` … `dark:from-black`). Contains:
  - Centered **avatar**: circle container `h-28 w-28` (shrinks to `h-20 w-20` when a tool result is active). Non-iOS: looping **muted** video memoji; iOS/Safari: static PNG fallback.
  - When the latest message is user-only (waiting for assistant): inline **`ChatBubble` `sent`** with user text under the avatar.

### 4.2 Main column

- `container mx-auto max-w-3xl`, flex column, full height.
- **Scroll region:** `flex-1 overflow-y-auto`, horizontal padding `px-2`, **dynamic `paddingTop`** tied to header height (~`100px` vs `180px` depending on tool state).

### 4.3 States

| State | UI |
|-------|-----|
| Empty (no messages) | Centered **`ChatLanding`**: title “I'm Yuvraj's digital twin”, subtitle, list of **suggested questions** as full-width rows |
| Loading user submit | Assistant **`ChatBubble` `received`** with **`MessageLoading`** (three bouncing dots SVG) |
| Assistant reply | **`SimplifiedChatView`**: optional **tool** UI on top, then received bubble with markdown content; `custom-scrollbar` on inner scroll |

### 4.4 ChatLanding

- Staggered list: `containerVariants` + `itemVariants` (`y: 20` → `0`, `0.4s`, cubic-bezier `[0.25, 0.1, 0.25, 1]`).
- Each suggestion: `bg-accent`, `rounded-lg`, `px-4 py-3`, icon in `bg-background` circle, hover darkens accent; **hover scale 1.02**, **tap 0.98**.

### 4.5 Composer (`ChatBottombar`)

- Bottom **sticky** area: `bg-white` / `dark:bg-black`, `pt-3`, `md:pb-4`.
- Form: **pill** `rounded-full`, border `#E5E5E9`, fill `#ECECF0` (dark: neutral-800/700).
- Placeholder: “Ask me anything” or disabled “Tool is in progress…”.
- Submit: **`#0171E3`** circle, **`ArrowUp`** icon (note: home uses `ArrowRight` for the same semantic action).
- Framer entry: `opacity` + `y: 20` → settled.

### 4.6 HelperBoost (quick questions + drawer)

- Toggle text: “Hide / Show quick questions” with small gray chevrons.
- **Row of chips:** Same five categories as home (colors + Lucide icons), `rounded-xl`, `min-w-[100px]`, frosted white/dark gray, `active:scale-95`.
- **“More”** control opens **Vaul** bottom sheet: overlay `bg-black/60` + `backdrop-blur-xs`, sheet `rounded-t-[10px]`, height ~80% mobile / 60% large screens, drag handle bar (`muted` pill), categorized question lists with separators.
- **Question rows:** Default gray background; **“special”** questions use **black** background, white text, sparkle icon; chevron animates on hover.

### 4.7 Bubbles

- **Sent:** Centered row, bubble `bg-[#007AFF]`, `rounded-3xl`, `px-5`, `p-2`.
- **Received:** `text-secondary-foreground`, `rounded-lg`, `py-2`, full width for AI layout.

### 4.8 Ancillary

- Fixed **LinkedIn** link bottom-right (hidden on small screens, `md:block`), subtle hover underline.

---

## 5. Welcome modal

- **Radix Dialog** content: `rounded-2xl`, `max-h-[85vh]`, wide responsive max-widths up to `1000px`, `border-none`, heavy shadow.
- Close: **black** circular ghost icon button (white X).
- Inner **accent** panel `rounded-2xl p-8` for explainer sections.
- Footer: primary `Button` “Start Chatting” (`rounded-full`); muted text + blue “Contact me” link (navigates to chat with contact query).

---

## 6. Motion & interaction summary

| Library | Usage |
|---------|--------|
| **framer-motion** | Page sections, chat transitions, `AnimatePresence` for landing/loading/answer, HelperBoost buttons, drawer micro-interactions |
| **motion/react** | `GithubButton` star fill animation, in-view triggers |

**Common motion preset (chat):** `opacity 0→1`, `y: 20→0`, `0.3s`, `easeOut`.

**Micro-interactions:** `active:scale-95` on grid buttons; hover scale on suggestions; spring chevron on drawer rows.

---

## 7. Assets & media

| Asset | Role |
|-------|------|
| `/landing-memojis.png` | Hero + iOS avatar fallback |
| `/final_memojis.webm`, `/final_memojis_ios.mp4` | Desktop/video memoji loop in chat |
| `/logo-yuvi.svg` | Brand mark, favicon, welcome trigger |
| Fluid canvas | `#fluid` canvas (full viewport, `z-0`) |

Home **preloads** memoji PNG and prefetches video assets for faster chat.

---

## 8. Component & dependency map (UI-relevant)

- **Styling:** Tailwind CSS v4, `tw-animate-css`, `class-variance-authority`, `clsx`, `tailwind-merge`.
- **Primitives:** Radix (Dialog, Tooltip, Scroll Area, Separator, Avatar, Collapsible), **shadcn-style** `Button`, `Sonner` toasts.
- **Icons:** `lucide-react` (primary), some `@tabler/icons-react` in HelperBoost imports (GraduationCapIcon paths—verify usage).
- **Drawer:** `vaul` for mobile sheet.
- **Chat UI:** Custom `ChatBubble` / `ChatBubbleMessage` variants.

---

## 9. Accessibility & UX details

- Submit buttons disabled when input empty or tool busy.
- `sr-only` labels on icon-only controls (theme, GitHub, close).
- Welcome modal title/description structure for screen readers.
- Viewport meta: `maximum-scale=1.0, user-scalable=no` (locks zoom—be aware for a11y if porting).

---

## 10. Recreation checklist (another platform)

Use this as a punch list when rebuilding the same **look and behavior**:

1. **Theme:** Light default, dark via class; 500ms cross-fade; semantic grays + OKLCH-like neutrals if possible.
2. **Typography:** Single clean sans (Inter or system equivalent); strong weight contrast on hero.
3. **Home:** Centered column, giant optional name watermark, frosted pill search + blue circular send, five square category tiles with **fixed icon colors**, fluid or subtle animated background optional.
4. **Chat:** Gradient header under avatar; memoji video vs static image by platform; iMessage-blue user bubbles; gray system composer bar; three-dot loader; markdown rendering for assistant.
5. **Navigation:** Preserve “open chat with query string” deep link behavior if you want parity.
6. **Helper UI:** Horizontal category chips + expandable **more** panel with grouped questions; special styling for featured prompts.
7. **Motion:** Short fade/slide for screen changes; stagger on suggestion lists; avoid excessive duration (>0.5s) except hero entrance.
8. **Polish:** `backdrop-blur` on glass surfaces; `active:scale-95` on tappable tiles; GitHub button with animated star count (optional).

---

## 11. File reference (primary UI sources)

| Area | Files |
|------|--------|
| Home | `src/app/page.tsx` |
| Global styles / tokens | `src/app/globals.css`, `src/app/layout.tsx` |
| Chat shell | `src/components/chat/chat.tsx` |
| Composer | `src/components/chat/chat-bottombar.tsx` |
| Empty state | `src/components/chat/chat-landing.tsx` |
| Quick questions / drawer | `src/components/chat/HelperBoost.tsx` |
| Bubbles | `src/components/ui/chat/chat-bubble.tsx` |
| Welcome | `src/components/welcome-modal.tsx` |
| Cursor | `src/components/FluidCursor.tsx`, `src/hooks/use-FluidCursor.tsx` |
| GitHub CTA | `src/components/ui/github-button.tsx` |
| Theme toggle | `src/components/ui/ThemeToggle.tsx` |

---

*Generated from the `portfolio-main` codebase for reuse as a UI specification.*
