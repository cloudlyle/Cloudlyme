# 🌸 CLOUDLYME — Project Documentation
> Single source of truth for design, planning, prompts, and technical requirements.
> Last updated: 2025

---

## 📋 TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Design System](#2-design-system)
3. [Site Structure & Pages](#3-site-structure--pages)
4. [Section Specs](#4-section-specs)
5. [Animation & Interaction Spec](#5-animation--interaction-spec)
6. [Technical Requirements](#6-technical-requirements)
7. [Prompts Used](#7-prompts-used)
8. [Checklist](#8-checklist)

---

## 1. PROJECT OVERVIEW

| Field            | Detail                                              |
|------------------|-----------------------------------------------------|
| Project Name     | Cloudlyme                                           |
| Type             | Personal portfolio / profile website                |
| Owner            | [Your Name]                                         |
| Goal             | Showcase personal identity, skills, projects, and contact info |
| Target Audience  | Recruiters, collaborators, creative peers           |
| Mood             | Soft, dreamy, elegant — like cherry blossom meets a quiet studio |
| Launch Target    | [Date placeholder]                                  |
| Output Format    | Single HTML file (index.html) or multi-file project |
| Deployment       | GitHub Pages or Netlify                             |

---

## 2. DESIGN SYSTEM

### 🎨 Color Palette

| Role           | Hex       | Usage                              |
|----------------|-----------|------------------------------------|
| Background     | `#FFF8FA` | Page background                    |
| Primary Pink   | `#F2A7B5` | Buttons, highlights, borders       |
| Light Pink     | `#FDE8EE` | Cards, section backgrounds         |
| Deep Accent    | `#D4687A` | Hover states, active links, CTA    |
| Text           | `#3D1A22` | Body and heading text              |
| Muted Text     | `#9B6B75` | Captions, placeholders, subtitles  |
| White          | `#FFFFFF` | Card surfaces, overlays            |

### ✍️ Typography

| Role         | Font                | Source       |
|--------------|---------------------|--------------|
| Display      | Cormorant Garamond  | Google Fonts |
| Body / UI    | DM Sans             | Google Fonts |

**Google Fonts CDN link:**
```
https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@400;500;600&display=swap
```

### 📐 Type Scale

| Element       | Size      | Weight | Style   | Font               |
|---------------|-----------|--------|---------|--------------------|
| Hero Name     | 72–96px   | 300    | Italic  | Cormorant Garamond |
| H1            | 64px      | 400    | Normal  | Cormorant Garamond |
| H2 Section    | 40px      | 400    | Normal  | Cormorant Garamond |
| H3 Card Title | 24px      | 500    | Normal  | DM Sans            |
| Body Text     | 16px      | 400    | Normal  | DM Sans            |
| Caption       | 13px      | 400    | Normal  | DM Sans            |
| Button Label  | 14px      | 500    | Normal  | DM Sans            |
| Nav Link      | 14px      | 500    | Normal  | DM Sans            |

### 📏 Spacing System

| Token        | Value  | Usage                        |
|--------------|--------|------------------------------|
| Base unit    | 8px    | All spacing derived from this |
| Section Y    | 80px   | Top and bottom section padding |
| Section X    | 120px  | Left/right container padding (desktop) |
| Card padding | 32px   | Internal card spacing        |
| Grid gap     | 24px   | Gap between grid/card items  |
| Nav height   | 64px   | Fixed navbar height          |

### 🔲 Border Radius

| Element    | Value        |
|------------|--------------|
| Cards      | 20px         |
| Buttons    | 50px (pill)  |
| Avatar     | 50% (circle) |
| Tag pills  | 50px         |
| Images     | 16px         |
| Input fields | 12px       |

### 🌑 Shadows

| Element       | CSS Value                                          |
|---------------|----------------------------------------------------|
| Card default  | `0 4px 20px rgba(242, 167, 181, 0.15)`             |
| Card hover    | `0 8px 32px rgba(242, 167, 181, 0.30)`             |
| Button hover  | `0 4px 16px rgba(212, 104, 122, 0.35)`             |
| Avatar glow   | `0 0 32px rgba(242, 167, 181, 0.50)`               |
| Navbar        | `0 2px 12px rgba(61, 26, 34, 0.08)`                |

---

## 3. SITE STRUCTURE & PAGES

### Page Type
Single-page application (SPA) with smooth anchor scroll between sections.

### Sections Order
```
[ Navbar ]
    ↓
[ Hero ]
    ↓
[ About Me ]
    ↓
[ Skills ]
    ↓
[ Projects ]
    ↓
[ Contact / Footer ]
```

### Navigation
- Fixed top navbar, always visible on scroll
- Logo: "Cloudlyme" in Cormorant Garamond italic
- Nav links: About · Skills · Projects · Contact
- Active link: underline or dot in deep pink `#D4687A`
- Mobile: hamburger menu → full-screen overlay or slide-down drawer
- Navbar background: `#FFF8FA` with subtle bottom shadow on scroll

---

## 4. SECTION SPECS

### 4.1 — Hero

| Property       | Value                                              |
|----------------|----------------------------------------------------|
| Height         | 100vh (full viewport)                              |
| Layout         | Centered, vertical stack                           |
| Background     | `#FFF8FA` + floating cloud SVGs                    |
| Cloud opacity  | 0.08 (ultra-faint)                                 |

**Content order (top to bottom):**
1. Circular avatar — 160px, pink glow border, soft shadow
2. Site name — "Cloudlyme" in Cormorant Garamond italic, 72px
3. Tagline — "Dreamer. Builder. Creator." in DM Sans, 18px, muted
4. CTA button — "Get to know me ↓" pill shape, pink fill
5. Scroll indicator — small animated arrow or dot pulse at bottom

**Cloud animation:**
- 3–5 SVG cloud shapes floating slowly left to right
- Opacity: 0.08, color: `#F2A7B5`
- Duration: 25–30s per loop, staggered delays
- Position: absolute, scattered in background

---

### 4.2 — About Me

| Property  | Value                                        |
|-----------|----------------------------------------------|
| Layout    | Two-column (photo left | bio right) on desktop |
| Mobile    | Stacked (photo top, bio bottom)              |
| Background | `#FDE8EE` (light pink section)             |

**Content:**
- Left: rounded square photo placeholder (400×400px), soft shadow, 16px radius
- Right:
  - Section eyebrow label: "About Me" in small caps, deep pink
  - Heading: "Hi, I'm [Name] 🌸"
  - Bio: 3–4 warm, personal sentences (placeholder)
  - Small decorative blossom SVG divider below heading
  - Two stat badges: e.g. "3+ Years Experience" · "20+ Projects"

---

### 4.3 — Skills

| Property   | Value                                     |
|------------|-------------------------------------------|
| Layout     | 2×3 or 3×2 responsive grid               |
| Background | `#FFF8FA` (white base)                   |
| Card style | Frosted glass — `backdrop-filter: blur(10px)` |

**Card structure:**
```
[ emoji icon — large, 40px ]
[ Skill Title — H3, DM Sans 500 ]
[ 1-line description — body, muted ]
```

**Skills list:**

| Emoji | Skill Title          | Description                                 |
|-------|----------------------|---------------------------------------------|
| 🎨    | UI/UX Design         | Crafting beautiful, intuitive experiences   |
| 💻    | Frontend Development | Building responsive, performant interfaces  |
| ✍️    | Creative Writing     | Telling stories that connect and inspire    |
| 📷    | Photography          | Capturing moments with light and intention  |
| 🌐    | Web Performance      | Optimizing speed, SEO, and accessibility    |
| 💡    | Problem Solving      | Turning complex challenges into clean solutions |

---

### 4.4 — Projects

| Property   | Value                                     |
|------------|-------------------------------------------|
| Layout     | 3-column grid (desktop), 1-column (mobile)|
| Background | `#FDE8EE`                                |
| Card radius | 20px                                    |

**Card structure:**
```
[ Image placeholder — 100% width, 200px height, pink tinted ]
[ Tag pills row — e.g. "React" "Design" ]
[ Project Title — H3 ]
[ Short description — 2 lines max ]
[ "View Project →" link ]
```

**Hover effect:**
- Scale: `transform: scale(1.03)`
- Overlay: pink overlay `rgba(242, 167, 181, 0.85)` fades in
- Shows: "View Project →" label centered in white

**Placeholder projects:**

| # | Title              | Tags                  | Description                          |
|---|--------------------|-----------------------|--------------------------------------|
| 1 | Blossom UI Kit     | Design, Figma         | A soft pink design system for web apps |
| 2 | Cloudlyme Portfolio| React, CSS            | This very portfolio website          |
| 3 | Petal Blog         | Writing, Next.js      | A minimal blog for creative writing  |

---

### 4.5 — Contact / Footer

| Property   | Value                        |
|------------|------------------------------|
| Background | `#FFF8FA`                   |
| Layout     | Centered, minimal            |

**Content:**
- Heading: "Let's connect 🌸" — H2, Cormorant Garamond
- Subtext: "I'd love to hear from you. Reach out anytime."
- Social links row (icon + label):
  - GitHub
  - Instagram
  - LinkedIn
  - Email (mailto:)
- Icon style: Lucide Icons or Font Awesome Free
- Divider line in light pink
- Footer text: `© 2025 Cloudlyme — Made with 🌸`
- Faded "Cloudlyme" watermark text behind footer (opacity: 0.05)

---

## 5. ANIMATION & INTERACTION SPEC

### Scroll Animations

| Element            | Animation                        | Duration | Easing      |
|--------------------|----------------------------------|----------|-------------|
| Section headings   | Fade in + slide up (30px)        | 0.6s     | ease-out    |
| Cards              | Fade in + slide up, staggered    | 0.5s     | ease-out    |
| About photo        | Fade in + slide right            | 0.7s     | ease-out    |
| About bio          | Fade in + slide left             | 0.7s     | ease-out    |
| Social icons       | Fade in, staggered 0.1s each     | 0.4s     | ease-out    |

**Implementation:** Use `IntersectionObserver` with CSS `@keyframes`. Add class `is-visible` when element enters viewport.

### Hover Interactions

| Element        | Hover Effect                               | Duration |
|----------------|--------------------------------------------|----------|
| Nav links      | Underline slide in from left               | 0.2s     |
| CTA button     | Lift 2px + shadow bloom + darken bg        | 0.25s    |
| Skill cards    | Scale(1.02) + shadow intensify             | 0.3s     |
| Project cards  | Scale(1.03) + pink overlay fade in         | 0.3s     |
| Social icons   | Scale(1.15) + color change to deep pink    | 0.2s     |

### Continuous Animations

| Element        | Animation                    | Duration | Loop     |
|----------------|------------------------------|----------|----------|
| Hero clouds    | Float left to right (translateX) | 25–30s | Infinite |
| Avatar border  | Subtle pulse glow            | 3s       | Infinite |
| Scroll arrow   | Bounce up/down               | 1.5s     | Infinite |

### Accessibility
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 6. TECHNICAL REQUIREMENTS

### Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Markup      | HTML5 (semantic)        |
| Styling     | CSS3 (custom properties)|
| Scripting   | Vanilla JavaScript (ES6+)|
| Fonts       | Google Fonts CDN        |
| Icons       | Lucide Icons or Font Awesome Free |
| Build       | None required (pure frontend) |
| Output      | Single file: `index.html` |

### CSS Architecture
- Use CSS custom properties (variables) for all design tokens
- BEM-style class naming: `.section__title`, `.card__body`
- Mobile-first media queries
- No external CSS frameworks

```css
:root {
  --color-bg:        #FFF8FA;
  --color-primary:   #F2A7B5;
  --color-light:     #FDE8EE;
  --color-accent:    #D4687A;
  --color-text:      #3D1A22;
  --color-muted:     #9B6B75;

  --font-display:    'Cormorant Garamond', serif;
  --font-body:       'DM Sans', sans-serif;

  --radius-card:     20px;
  --radius-btn:      50px;
  --radius-avatar:   50%;

  --shadow-card:     0 4px 20px rgba(242, 167, 181, 0.15);
  --shadow-hover:    0 8px 32px rgba(242, 167, 181, 0.30);
  --shadow-btn:      0 4px 16px rgba(212, 104, 122, 0.35);

  --spacing-section: 80px;
  --spacing-card:    32px;
  --spacing-gap:     24px;
}
```

### Responsive Breakpoints

| Breakpoint | Width      | Layout Change                        |
|------------|------------|--------------------------------------|
| Mobile     | < 640px    | Single column, stacked sections      |
| Tablet     | 640–1024px | 2-column grids, adjusted font sizes  |
| Desktop    | > 1024px   | Full designed layout                 |

### Browser Support

| Browser         | Minimum Version |
|-----------------|-----------------|
| Chrome          | 90+             |
| Firefox         | 88+             |
| Safari          | 14+             |
| Edge            | 90+             |
| iOS Safari      | 14+             |
| Android Chrome  | 90+             |

### Performance Targets

| Metric             | Target  |
|--------------------|---------|
| Lighthouse Overall | 90+     |
| Performance        | 90+     |
| Accessibility      | 95+     |
| Best Practices     | 95+     |
| SEO                | 90+     |
| First Contentful Paint | < 1.5s |

### SEO & Meta Tags
```html
<meta name="description" content="Cloudlyme — Personal portfolio of [Name]. Designer, developer, and creative." />
<meta property="og:title" content="Cloudlyme" />
<meta property="og:description" content="Dreamer. Builder. Creator." />
<meta property="og:image" content="assets/images/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
```

### File Structure (Multi-file version)
```
cloudlyme/
├── index.html
├── docs/
│   └── CLOUDLYME_DOCS.md       ← this file
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       ├── avatar.jpg
│       ├── og-image.png
│       └── projects/
│           ├── project-1.jpg
│           ├── project-2.jpg
│           └── project-3.jpg
└── README.md
```

---

## 7. PROMPTS USED

### Design Prompt
```
Design a personal portfolio website called Cloudlyme.
Primary color: pink pastel (#F2A7B5). Background: soft cream white (#FFF8FA).
Mood: soft, dreamy, elegant — like cherry blossom meets a quiet studio.
Fonts: Cormorant Garamond (display) + DM Sans (body).
Sections: Hero, About Me, Skills, Projects, Contact.
Signature element: animated floating cloud shapes in hero background.
Single HTML file output, no frameworks, fully responsive.
```

### Structure Prompt
```
Design the optimal folder and file structure for a production-ready
React project with TypeScript, Vite, Tailwind CSS, React Router v6,
Zustand for state management, React Query for data fetching, and Axios.
Feature-based architecture, max 4 folder levels deep, path aliases configured.
```

### Build Prompt
```
Build the complete Cloudlyme website as a single HTML file with embedded
CSS and JS. Follow the full design spec in CLOUDLYME_DOCS.md exactly.
Use CSS custom properties for all design tokens. Vanilla JS for interactions.
Fully responsive, all animations respect prefers-reduced-motion.
Production-quality output, ready to deploy on GitHub Pages or Netlify.
```

### Claude Code Read Docs Prompt
```
Before building anything, read docs/CLOUDLYME_DOCS.md completely.
Extract: project name, design system (colors, fonts, spacing), all section specs,
animation specs, and technical requirements.
Confirm understanding as a structured summary, then wait for my approval
before writing any code. Treat CLOUDLYME_DOCS.md as the single source of truth.
```

---

## 8. CHECKLIST

### 🎨 Design
- [ ] Color palette finalized and documented
- [ ] Fonts selected, loaded, and tested
- [ ] Type scale defined for all elements
- [ ] Spacing system documented
- [ ] Mobile layout wireframed
- [ ] All section specs written and approved
- [ ] Animation plan documented

### 💻 Development
- [ ] HTML semantic structure complete
- [ ] CSS custom properties (design tokens) set up
- [ ] Navbar — fixed, responsive, hamburger on mobile
- [ ] Hero section — avatar, name, tagline, CTA, cloud animation
- [ ] About Me section — two-column layout, photo, bio
- [ ] Skills section — frosted glass cards, 6 skills
- [ ] Projects section — grid cards, hover overlay, 3 projects
- [ ] Contact / Footer — social links, watermark
- [ ] Scroll animations via IntersectionObserver
- [ ] Hover micro-interactions on all interactive elements
- [ ] Responsive — tested at 375px, 768px, 1280px
- [ ] `prefers-reduced-motion` respected
- [ ] Keyboard navigation and focus styles
- [ ] ARIA labels on all icon-only elements
- [ ] Color contrast passes WCAG AA (4.5:1 minimum)

### 🚀 Launch
- [ ] Real content added (name, photo, bio, projects)
- [ ] OG meta tags added for link previews
- [ ] OG image created (1200×630px)
- [ ] Lighthouse audit run — all scores 90+
- [ ] Tested on Chrome, Safari, Firefox, mobile
- [ ] Deployed to GitHub Pages or Netlify
- [ ] Custom domain connected (optional)
- [ ] Google Analytics or Plausible added (optional)
- [ ] README.md written for the repo

---

*CLOUDLYME_DOCS.md — maintained by [Your Name] · © 2025 Cloudlyme 🌸*
