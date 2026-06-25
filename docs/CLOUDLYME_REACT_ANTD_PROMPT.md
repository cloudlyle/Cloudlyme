# 🌸 CLOUDLYME — React + Ant Design Component Prompt

> Ready-to-copy prompt for Claude Code to refactor Cloudlyme into separate React components using Ant Design.
> Last updated: 2025

---

## 📋 HOW TO USE THIS FILE

1. Open your project in terminal
2. Run `claude` to start Claude Code
3. Copy the full prompt below and paste it into Claude Code
4. Hit Enter and follow the step-by-step build

```bash
cd cloudlyme
claude
# paste the prompt below
```

---

## 🚀 FULL PROMPT — COPY FROM HERE

```
Hey Claude! Refactor the Cloudlyme website from a single HTML file
into a proper React project using Ant Design (antd) component library.
Split everything into separate, reusable components.

---

STEP 1 — SETUP & DEPENDENCIES

Make sure the project has these installed:

npm install antd @ant-design/icons
npm install react react-dom react-router-dom
npm install styled-components

Configure Ant Design theme override in main.tsx / App.tsx
using ConfigProvider with our Cloudlyme design tokens:

<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#D4687A',
      colorBgBase: '#FFF8FA',
      borderRadius: 20,
      fontFamily: 'DM Sans, sans-serif',
      colorText: '#3D1A22',
      colorTextSecondary: '#9B6B75',
    },
  }}
>

---

STEP 2 — TARGET FOLDER STRUCTURE

Create this exact structure:

src/
├── App.tsx
├── main.tsx
├── index.css                        ← global styles + CSS variables only
│
├── styles/
│   └── tokens.css                   ← all design tokens as CSS variables
│
├── components/
│   │
│   ├── layout/
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   └── Navbar.module.css
│   │   └── Footer/
│   │       ├── Footer.tsx
│   │       └── Footer.module.css
│   │
│   ├── sections/
│   │   ├── HeroSection/
│   │   │   ├── HeroSection.tsx
│   │   │   └── HeroSection.module.css
│   │   ├── AboutSection/
│   │   │   ├── AboutSection.tsx
│   │   │   └── AboutSection.module.css
│   │   ├── SkillsSection/
│   │   │   ├── SkillsSection.tsx
│   │   │   └── SkillsSection.module.css
│   │   ├── ProjectsSection/
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── ProjectsSection.module.css
│   │   └── ContactSection/
│   │       ├── ContactSection.tsx
│   │       └── ContactSection.module.css
│   │
│   └── ui/
│       ├── SkillCard/
│       │   ├── SkillCard.tsx
│       │   └── SkillCard.module.css
│       ├── ProjectCard/
│       │   ├── ProjectCard.tsx
│       │   └── ProjectCard.module.css
│       ├── CloudAnimation/
│       │   ├── CloudAnimation.tsx
│       │   └── CloudAnimation.module.css
│       ├── SectionTitle/
│       │   ├── SectionTitle.tsx
│       │   └── SectionTitle.module.css
│       └── TagPill/
│           ├── TagPill.tsx
│           └── TagPill.module.css
│
├── data/
│   ├── skills.ts                    ← skills array data
│   └── projects.ts                  ← projects array data
│
├── hooks/
│   └── useScrollAnimation.ts        ← IntersectionObserver hook
│
└── types/
    └── index.ts                     ← shared TypeScript interfaces

---

STEP 3 — TYPES FIRST

Create src/types/index.ts:

export interface Skill {
  id: string
  emoji: string
  title: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
}

export interface NavLink {
  label: string
  href: string
}

export interface SocialLink {
  icon: string
  label: string
  href: string
}

---

STEP 4 — DATA FILES

Create src/data/skills.ts with all 6 skills:
- 🎨 UI/UX Design
- 💻 Frontend Development
- ✍️ Creative Writing
- 📷 Photography
- 🌐 Web Performance
- 💡 Problem Solving

Create src/data/projects.ts with 3 placeholder projects:
- Blossom UI Kit
- Cloudlyme Portfolio
- Petal Blog

---

STEP 5 — CUSTOM HOOK

Create src/hooks/useScrollAnimation.ts:
- Uses IntersectionObserver
- Returns a ref and isVisible boolean
- Triggers once when element enters viewport
- Respects prefers-reduced-motion

---

STEP 6 — BUILD EACH COMPONENT

Build every component using antd where it makes sense:

NAVBAR (Navbar.tsx)
- Use antd Layout.Header
- Use antd Menu for nav links (desktop)
- Use antd Drawer for mobile menu
- Logo: "Cloudlyme" in Cormorant Garamond italic
- Sticky on scroll with shadow

HERO SECTION (HeroSection.tsx)
- Full viewport height
- antd Avatar for circular profile photo
- antd Button (type="primary") for CTA — "Get to know me ↓"
- CloudAnimation component as background
- Fade-in animation on mount

CLOUD ANIMATION (CloudAnimation.tsx)
- Pure SVG clouds, rendered as a React component
- CSS keyframes for float animation
- 3–5 clouds with staggered animation-delay
- Absolute positioned, pointer-events: none
- Ultra-faint: opacity 0.08

ABOUT SECTION (AboutSection.tsx)
- antd Row + Col for two-column layout
- antd Image for photo placeholder
- antd Typography for bio text
- antd Statistic for stat badges (3+ Years, 20+ Projects)
- useScrollAnimation hook for fade-in

SKILLS SECTION (SkillsSection.tsx)
- antd Row + Col grid (3 cols desktop, 2 tablet, 1 mobile)
- Map over skills data → render SkillCard component

SKILL CARD (SkillCard.tsx)
- antd Card component as base
- Frosted glass style override via CSS module
- Props: emoji, title, description
- Hover: scale + shadow via CSS

PROJECTS SECTION (ProjectsSection.tsx)
- antd Row + Col grid (3 cols desktop, 1 mobile)
- Map over projects data → render ProjectCard component

PROJECT CARD (ProjectCard.tsx)
- antd Card with cover image
- antd Tag for tag pills
- antd Typography for title + description
- Hover overlay: pink fade + "View Project →" text
- Props: title, description, tags, image, link

CONTACT SECTION (ContactSection.tsx)
- antd Space for social links row
- antd Button (type="link") for each social link
- Use @ant-design/icons: GithubOutlined, InstagramOutlined,
  LinkedinOutlined, MailOutlined

FOOTER (Footer.tsx)
- antd Layout.Footer
- Copyright text: "© 2025 Cloudlyme — Made with 🌸"
- Faded watermark "Cloudlyme" text behind content

SECTION TITLE (SectionTitle.tsx)
- Reusable heading component
- antd Typography.Title
- Eyebrow label above (small, deep pink)
- Props: eyebrow, title, align

TAG PILL (TagPill.tsx)
- Wraps antd Tag
- Custom pink styling
- Props: label

---

STEP 7 — ASSEMBLE IN App.tsx

import Navbar from './components/layout/Navbar/Navbar'
import Footer from './components/layout/Footer/Footer'
import HeroSection from './components/sections/HeroSection/HeroSection'
import AboutSection from './components/sections/AboutSection/AboutSection'
import SkillsSection from './components/sections/SkillsSection/SkillsSection'
import ProjectsSection from './components/sections/ProjectsSection/ProjectsSection'
import ContactSection from './components/sections/ContactSection/ContactSection'

function App() {
  return (
    <ConfigProvider theme={cloudlymeTheme}>
      <Layout>
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </Layout>
    </ConfigProvider>
  )
}

---

STEP 8 — DESIGN TOKENS (tokens.css)

:root {
  --color-bg:       #FFF8FA;
  --color-primary:  #F2A7B5;
  --color-light:    #FDE8EE;
  --color-accent:   #D4687A;
  --color-text:     #3D1A22;
  --color-muted:    #9B6B75;

  --font-display:   'Cormorant Garamond', serif;
  --font-body:      'DM Sans', sans-serif;

  --radius-card:    20px;
  --radius-btn:     50px;
  --radius-avatar:  50%;

  --shadow-card:    0 4px 20px rgba(242, 167, 181, 0.15);
  --shadow-hover:   0 8px 32px rgba(242, 167, 181, 0.30);
  --shadow-btn:     0 4px 16px rgba(212, 104, 122, 0.35);

  --section-py:     80px;
  --card-p:         32px;
  --gap:            24px;
}

---

STEP 9 — SELF REVIEW CHECKLIST

After building all components, verify:
- [ ] All components are in separate files — no logic in App.tsx
- [ ] antd components used: Layout, Menu, Drawer, Avatar, Button,
      Row, Col, Card, Tag, Typography, Image, Space, Statistic
- [ ] @ant-design/icons used for all social icons
- [ ] CSS Modules used — no inline styles, no global class clashes
- [ ] Design tokens from tokens.css applied everywhere
- [ ] Data in /data files — no hardcoded content inside components
- [ ] useScrollAnimation hook applied to all sections
- [ ] CloudAnimation is its own isolated component
- [ ] Mobile responsive — tested at 375px, 768px, 1280px
- [ ] prefers-reduced-motion respected in all animations
- [ ] TypeScript types used for all props
- [ ] No unused imports or components

---

REFERENCE FILES:
- Design source:  https://claude.ai/design/p/ad966de3-3600-4867-9a9d-8994bed44f21?file=Cloudlyme.dc.html
- Project docs:   docs/CLOUDLYME_DOCS.md

Follow CLOUDLYME_DOCS.md for all design decisions.
Build one component at a time and confirm each before moving to the next.
```

---

## 📦 COMPONENT BUILD ORDER

Build in this exact order to avoid missing dependency errors:

| #   | File                          | Why                                   |
| --- | ----------------------------- | ------------------------------------- |
| 1   | `types/index.ts`              | Interfaces needed by all components   |
| 2   | `data/skills.ts`              | Static data, no deps                  |
| 3   | `data/projects.ts`            | Static data, no deps                  |
| 4   | `hooks/useScrollAnimation.ts` | Hook used by all sections             |
| 5   | `styles/tokens.css`           | Design tokens used by all CSS modules |
| 6   | `ui/CloudAnimation`           | Smallest UI, no deps                  |
| 7   | `ui/TagPill`                  | Used by ProjectCard                   |
| 8   | `ui/SectionTitle`             | Used by all sections                  |
| 9   | `ui/SkillCard`                | Used by SkillsSection                 |
| 10  | `ui/ProjectCard`              | Used by ProjectsSection               |
| 11  | `layout/Navbar`               | Layout wrapper                        |
| 12  | `layout/Footer`               | Layout wrapper                        |
| 13  | `sections/HeroSection`        | First section                         |
| 14  | `sections/AboutSection`       | Second section                        |
| 15  | `sections/SkillsSection`      | Third section                         |
| 16  | `sections/ProjectsSection`    | Fourth section                        |
| 17  | `sections/ContactSection`     | Fifth section                         |
| 18  | `App.tsx`                     | Assemble everything last              |

---

## 🧩 ANT DESIGN COMPONENT MAP

| UI Element      | Ant Design Component                                | Import              |
| --------------- | --------------------------------------------------- | ------------------- |
| Page layout     | `Layout`, `Layout.Header`, `Layout.Footer`          | `antd`              |
| Navigation      | `Menu`                                              | `antd`              |
| Mobile menu     | `Drawer`                                            | `antd`              |
| Profile photo   | `Avatar`                                            | `antd`              |
| CTA button      | `Button`                                            | `antd`              |
| Grid system     | `Row`, `Col`                                        | `antd`              |
| Skill cards     | `Card`                                              | `antd`              |
| Project cards   | `Card`                                              | `antd`              |
| Tag pills       | `Tag`                                               | `antd`              |
| Headings & text | `Typography`, `Typography.Title`, `Typography.Text` | `antd`              |
| Photo           | `Image`                                             | `antd`              |
| Stats badges    | `Statistic`                                         | `antd`              |
| Social row      | `Space`                                             | `antd`              |
| Social links    | `Button` type="link"                                | `antd`              |
| GitHub icon     | `GithubOutlined`                                    | `@ant-design/icons` |
| Instagram icon  | `InstagramOutlined`                                 | `@ant-design/icons` |
| LinkedIn icon   | `LinkedinOutlined`                                  | `@ant-design/icons` |
| Email icon      | `MailOutlined`                                      | `@ant-design/icons` |

---

## 🎨 DESIGN TOKENS QUICK REFERENCE

| Token             | Value                               | Usage                      |
| ----------------- | ----------------------------------- | -------------------------- |
| `--color-bg`      | `#FFF8FA`                           | Page background            |
| `--color-primary` | `#F2A7B5`                           | Highlights, borders        |
| `--color-light`   | `#FDE8EE`                           | Section backgrounds, cards |
| `--color-accent`  | `#D4687A`                           | Hover, CTA, active links   |
| `--color-text`    | `#3D1A22`                           | All body and heading text  |
| `--color-muted`   | `#9B6B75`                           | Captions, subtitles        |
| `--font-display`  | `Cormorant Garamond`                | Headings, hero, logo       |
| `--font-body`     | `DM Sans`                           | Body text, UI labels       |
| `--radius-card`   | `20px`                              | All cards                  |
| `--radius-btn`    | `50px`                              | All buttons (pill shape)   |
| `--shadow-card`   | `0 4px 20px rgba(242,167,181,0.15)` | Default card shadow        |
| `--shadow-hover`  | `0 8px 32px rgba(242,167,181,0.30)` | Hovered card shadow        |

---

## 📱 RESPONSIVE BREAKPOINTS

| Breakpoint | Width      | antd Col Span                         |
| ---------- | ---------- | ------------------------------------- |
| Mobile     | < 640px    | `xs={24}`                             |
| Tablet     | 640–1024px | `sm={12}` or `md={12}`                |
| Desktop    | > 1024px   | `lg={8}` (3-col) or `lg={12}` (2-col) |

---

## ✅ FINAL CHECKLIST

### Setup

- [ ] antd and @ant-design/icons installed
- [ ] ConfigProvider with Cloudlyme theme in App.tsx
- [ ] Google Fonts loaded in index.html or index.css
- [ ] tokens.css imported in index.css

### Components

- [ ] Navbar — sticky, mobile drawer, logo
- [ ] HeroSection — avatar, name, tagline, CTA, cloud BG
- [ ] CloudAnimation — SVG clouds, float animation
- [ ] AboutSection — two-column, photo, bio, stats
- [ ] SkillsSection — 6 cards, frosted glass
- [ ] ProjectsSection — 3 cards, hover overlay
- [ ] ContactSection — social links with icons
- [ ] Footer — copyright, watermark

### Quality

- [ ] TypeScript props typed for every component
- [ ] CSS Modules — no style conflicts
- [ ] No hardcoded content — all data from /data files
- [ ] Scroll animations via useScrollAnimation hook
- [ ] prefers-reduced-motion respected
- [ ] Responsive at 375px, 768px, 1280px
- [ ] Lighthouse score 90+ on all categories

---

## 📁 RELATED FILES

| File                                  | Purpose                                       |
| ------------------------------------- | --------------------------------------------- |
| `docs/CLOUDLYME_DOCS.md`              | Full project design & technical documentation |
| `docs/CLOUDLYME_REACT_ANTD_PROMPT.md` | This file — React + antd build prompt         |
| `index.html`                          | Original single-file build (reference only)   |

---

_CLOUDLYME_REACT_ANTD_PROMPT.md — © 2025 Cloudlyme 🌸_
