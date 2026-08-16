# 🎨 Portfolio Design System & UI Specification (`DESIGN.md`)

This document defines the visual design system, color tokens, layout architecture, typography hierarchy, component specifications, and accessibility guidelines for **Ubaid ur Rehman's AI Engineering Portfolio**.

---

## 🎯 Design Philosophy

The portfolio architecture follows three core principles:
1. **Card-First Bento Grid Architecture**: Every section and content chunk is encapsulated inside elevated, glassmorphism card panels with clear visual boundaries.
2. **Cyan & White Minimalist Palette**: Replaced multi-color linear gradients with a high-contrast Cyan (`#0891B2` / `#22D3EE`) & White color system for a crisp, professional aesthetic.
3. **Engineering-First Technical Detail**: Highlighting AI/ML metrics (1.1B GLM-OCR model, 69% accuracy, 1.2s inference) with distinct metric cards and technology pills.

---

## 🎨 Color Palette & Design Tokens

### Light Theme (Default)
| Element | Color Hex / Value | Description |
| :--- | :--- | :--- |
| **Page Background** | `#FAFAFC` | Crisp off-white background |
| **Dotted Background Grid** | `radial-gradient(rgba(8, 145, 178, 0.22) 1.2px, transparent 1.2px)` | `28px x 28px` cyan dot grid pattern |
| **Card Surface** | `rgba(255, 255, 255, 0.92)` | Glass card panel with `backdrop-filter: blur(16px)` |
| **Primary Text** | `#0F172A` (Slate 900) | Ultra-sharp text for 100% contrast |
| **Secondary Text** | `#334155` (Slate 700) | Readable body and description text |
| **Primary Accent** | `#0891B2` (Cyan 600) | Brand accent for buttons, badges, and highlights |
| **Dark Accent** | `#0E7490` (Cyan 700) | Hover state & subheadings |
| **Card Borders** | `rgba(226, 232, 240, 0.9)` | Subtle slate border line |
| **Card Shadow** | `0 4px 20px -2px rgba(8, 145, 178, 0.06)` | Soft cyan-tinted ambient shadow |

### Dark Theme
| Element | Color Hex / Value | Description |
| :--- | :--- | :--- |
| **Page Background** | `#080E18` | Deep cyan-tinted dark navy |
| **Dotted Background Grid** | `radial-gradient(rgba(34, 211, 238, 0.18) 1.2px, transparent 1.2px)` | `28px x 28px` cyan dot grid pattern |
| **Card Surface** | `rgba(15, 23, 42, 0.75)` | Dark glass surface with `backdrop-filter: blur(12px)` |
| **Primary Text** | `#F8FAFC` (Slate 50) | High-contrast light text |
| **Secondary Text** | `#CBD5E1` (Slate 300) | Subdued body text |
| **Primary Accent** | `#22D3EE` (Cyan 400) | Glowing cyan accent for dark mode |
| **Card Borders** | `rgba(51, 65, 85, 0.6)` | Dark slate card outline |

---

## 📐 Bento Card Architecture

Every section uses rounded, elevated card panels:

```
+-----------------------------------------------------------------------+
|  [Availability Badge: Available for AI/ML Roles & Projects]          |
|                                                                       |
|  Hi, I'm Ubaid ur Rehman                                             |
|  AI Engineer & ML Specialist                                          |
|                                                                       |
|  Specializing in Computer Vision, Document Intelligence, & LLMs.       |
|                                                                       |
|  [ Explore Projects Button ]   [ Get in Touch Button ]                |
+-----------------------------------------------------------------------+
|  [ 1.1B Metric Card ]  |  [ 69% Accuracy Card ]  | [ 1.2s Latency ]   |
+-----------------------------------------------------------------------+
|  Tech Stack: [PyTorch] [YOLOv11] [Azure Document AI] [GLM-OCR] [...]  |
+-----------------------------------------------------------------------+
```

### Card Corner Radius Tokens
- **Hero Main Card**: `rounded-3xl` (`24px` radius)
- **Feature & Section Cards**: `rounded-2xl` (`16px` radius)
- **Pills & Buttons**: `rounded-xl` (`12px` radius) or `rounded-full`

---

## 🔤 Typography Scale

| Style | Size (Desktop / Mobile) | Weight | Line Height | Application |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `72px` / `36px` | ExtraBold (`800`) | `1.1` | Hero H1 Headline |
| **Section Heading** | `48px` / `30px` | ExtraBold (`800`) | `1.2` | H2 Section Titles |
| **Card Title** | `24px` / `20px` | Bold (`700`) | `1.3` | H3 Project & Job Titles |
| **Body Large** | `20px` / `16px` | Medium (`500`) | `1.6` | Subtitles & Hero Bio |
| **Body Standard** | `16px` / `14px` | Regular (`400`) | `1.6` | Paragraph descriptions |
| **Badges & Micro** | `12px` / `10px` | ExtraBold (`800`) | `1.0` | Tech stack pills, counters |

---

## 🧩 Component Specifications

### 1. Navigation Bar ([Navigation.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/Navigation.tsx))
- **Scrolled State**: `bg-white/90` blur backdrop with bottom border `#E2E8F0`.
- **Brand Logo**: `UR` badge icon + `Ubaid.ai` wordmark.
- **Active Link**: Cyan pill container (`bg-cyan-50 text-cyan-600 border border-cyan-200`).

### 2. Hero Section ([Hero.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/sections/Hero.tsx))
- **Hero Main Card**: Large Bento card container wrapping status indicator, headline, description, and primary/secondary CTA action buttons.
- **Metrics Grid**: 3 individual cards displaying key engineering metrics.
- **Tech Stack Card**: Full-width card panel with tech chips, social icon buttons, and location indicator.

### 3. About Section ([About.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/sections/About.tsx))
- **Bio Card**: 2-column layout with detailed engineering background & Download Resume button.
- **Skill Bento Grid**: 4 category cards (*AI & Machine Learning*, *Vision & Document AI*, *Web & Systems*, *Data & Infrastructure*).

### 4. Experience Section ([Experience.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/sections/Experience.tsx))
- **Timeline Cards**: Each job experience (10Pearls, FormMate, Arch Tech, FAST-NUCES) is wrapped in a glass card with period badge and highlight bullet points.

### 5. Projects Section ([Projects.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/sections/Projects.tsx))
- **Filter Panel Card**: Glass card container holding active category pill buttons (*All*, *AI/ML*, *Automation*, *Web App*, *Systems*).
- **Project Cards**: 6 Bento Project Cards with image / SVG banner, tags, repository link, and live demo link.

### 6. Contact Section ([Contact.tsx](file:///home/devcareer/Desktop/Porfolio/portfolio/src/components/sections/Contact.tsx))
- **Direct Contact Card**: Email, LinkedIn, GitHub, Location.
- **Message Form Card**: Input fields with Cyan focus ring (`focus:border-cyan-600 focus:ring-cyan-500/20`) and submit button.

---

## ♿ Accessibility & Micro-Interactions

- **Contrast ratio**: Body text contrast exceeds `7:1` (WCAG AAA compliant).
- **Hover effects**: Micro-elevations (`hover:-translate-y-1`) with soft cyan glow shadows.
- **Reduced motion**: Full support via `@media (prefers-reduced-motion: reduce)`.
