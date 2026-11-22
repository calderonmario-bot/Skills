# Scroll-Stopping Web Design

Generate high-converting, visually captivating websites with advanced animations, micro-interactions, and scroll-driven experiences. Production-ready single-file HTML that looks like a $5,000+ custom build — deployable to Vercel, Netlify, or any static host in minutes.

## What This Skill Does

Creates websites that stop the scroll. Combines:
- GSAP ScrollTrigger for cinematic scroll-driven animations
- CSS micro-interactions for tactile, premium feel
- Parallax depth effects
- Conversion-optimized layout patterns
- Mobile-first responsive design
- Zero framework bloat — pure HTML/CSS/JS, CDN-loaded only

CDNs auto-loaded on every output:
- GSAP 3.12.5 + ScrollTrigger + TextPlugin + SplitText
- Lucide Icons
- Google Fonts (selected per palette)

---

## Commands

### `/web-landing <business-type> <key-message>`
Generate a complete scroll-stopping landing page as a single deployable `index.html`.

Includes:
- Full-screen hero with animated headline reveal
- Scroll-triggered section entrances
- Social proof section with animated counters
- Features/benefits with staggered card reveals
- CTA section with gradient background and pulse animation
- Sticky navigation with scroll-based appearance
- Footer
- `prefers-reduced-motion` support throughout

Auto-selects unique palette + font + layout combo. No two outputs look the same.

### `/web-hero <style> <headline> <subheadline>`
Generate a scroll-stopping hero section.

Styles:
- `cinematic` — full-screen dark overlay, text animates in like a film title
- `split` — 50/50 text + visual with staggered reveal animation
- `bold` — giant typography, ultra-high contrast, minimal everything else
- `gradient` — animated moving gradient background with floating geometric elements
- `glass` — glassmorphism card over blurred background
- `editorial` — magazine-style layout with large pull quote animation

Every hero includes:
- Animated headline (SplitText character or word reveal)
- Scroll indicator with continuous bounce animation
- Primary CTA button with hover lift + glow micro-interaction
- Sub-CTA link with animated underline

### `/web-animate <element-description>`
Add GSAP scroll animations to any described element. Outputs CSS + JS snippet.

Patterns:
- `fade-up` — element rises 40px from below as user scrolls into view
- `fade-in` — pure opacity reveal
- `stagger` — multiple child elements reveal in sequence (0.15s gap)
- `counter` — number counts up when scrolled into view
- `text-reveal` — headline reveals word-by-word with clip-path
- `char-reveal` — text reveals character-by-character (premium feel)
- `parallax` — element moves at 0.5× scroll speed relative to page
- `pin` — element stays fixed while surrounding content scrolls
- `scrub` — animation progress tied directly to scroll position
- `rotate-in` — element rotates from 15deg into position
- `scale-in` — element scales from 0.85 to 1 on reveal
- `slide-left / slide-right` — directional entrance

### `/web-parallax <section-description>`
Add parallax depth to any section. Generates:
- Background layer at 0.3× scroll speed (sky/texture/gradient)
- Midground floating elements at 0.6× scroll speed
- Foreground content at 1× scroll speed (normal)
- Optional: floating elements with sine-wave drift (CSS keyframes)
- Optional: perspective tilt effect on mouse move

### `/web-micro <element-type>`
Generate micro-interaction code for UI elements. Output: CSS + minimal JS.

Types:
- `button` — hover lift (translateY -2px + shadow), press depression, ripple on click
- `button-magnetic` — button follows cursor on hover (premium magnetic effect)
- `card` — hover elevation (shadow + slight scale), border glow
- `card-tilt` — 3D perspective tilt on mouse move
- `nav-link` — smooth underline slide, color transition
- `input` — label float animation, focus ring, shake on validation error
- `menu-hamburger` — hamburger morphs to X with GSAP
- `scroll-progress` — reading progress bar at top of viewport
- `back-to-top` — appears at 500px scroll depth, smooth return
- `image-reveal` — image uncovers from behind a sliding color block
- `number-ticker` — number rolls up like a slot machine
- `cursor-dot` — custom cursor with trailing dot (desktop)

### `/web-section <type> <content>`
Generate a complete section with animations pre-wired.

Section types:
- `features` — 3-column icon + text grid, staggered fade-up
- `testimonials` — quote carousel with slide animation + avatar
- `pricing` — 3-tier cards, popular badge, hover highlight, CTA per card
- `faq` — smooth accordion with GSAP height animation
- `stats` — 4-up animated counters (trigger on scroll)
- `team` — card grid with hover bio reveal overlay
- `cta-banner` — full-width colored band, pulsing CTA button
- `before-after` — drag slider to reveal transformation (pure CSS/JS)
- `video-hero` — autoplay muted video background with overlay text
- `logo-strip` — partner/client logos, infinite scroll marquee
- `timeline` — vertical scroll-triggered timeline with line draw animation
- `comparison` — feature comparison table with checkmarks, hover row highlight

### `/web-funnel <offer> <audience>`
Generate a complete conversion funnel page set:
1. **Landing page** — scroll-stopping hero + social proof + CTA
2. **Thank you page** — confirmation + next step (book call, download, etc.)
3. **Upsell page** — one-time offer format with countdown urgency

Each page: single deployable HTML file.

### `/web-audit <url or paste HTML>`
Audit a page for scroll-stopping effectiveness.

Checks:
- First-fold impact — does it make someone stop within 3 seconds?
- Animation performance — 60fps risk, jank triggers, GPU composite properties
- Mobile experience — touch targets, viewport overflow, tap animation feedback
- Conversion path clarity — is the primary CTA obvious above the fold?
- Load performance — render-blocking resources, animation onset delay
- Accessibility — `prefers-reduced-motion` support, color contrast, focus states
- ESO readiness — schema, meta, heading structure (links to `/eso-audit`)

Output: PASS / WARN / FAIL per check + fixes.

---

## Design System

### Color Palettes
| Name | Vibe | Primary | Accent | Background |
|------|------|---------|--------|------------|
| `midnight` | Tech/SaaS | #0A0F1E | #3B82F6 | #FFFFFF |
| `volcanic` | Bold/Startup | #0D0D0D | #FF4500 | #FFFFFF |
| `forest` | Organic/Health | #1A3A2A | #4ADE80 | #F8FBF8 |
| `luxury` | Premium/DFY | #0A0A0A | #C9A96E | #FFFFFF |
| `arctic` | Clean/Modern | #F0F8FF | #00B4D8 | #0A1628 |
| `desert` | Warm/Real Estate | #2C1810 | #D4845A | #FBF5ED |
| `ocean` | Trust/Finance | #041C32 | #04BFBF | #FFFFFF |
| `sunset` | Energy/Fitness | #1A0A2E | #FF6B35 | #FFFFFF |
| `minimal` | Agency/Studio | #FFFFFF | #000000 | #F5F5F5 |
| `sage` | Wellness/Coaching | #2D4A3E | #8FBC8F | #FAF9F7 |

### Typography Pairings
| Name | Heading | Body | Best For |
|------|---------|------|----------|
| `editorial` | Playfair Display | Source Sans Pro | Luxury, real estate |
| `modern` | Plus Jakarta Sans | Inter | SaaS, tech |
| `bold` | Syne | DM Sans | Agencies, startups |
| `geometric` | Space Grotesk | Nunito | Apps, products |
| `luxury` | Cormorant Garamond | Raleway | Premium services |
| `humanist` | Fraunces | Figtree | Coaching, wellness |
| `contrast` | Bebas Neue | Open Sans | Fitness, events |
| `clean` | Cabinet Grotesk | General Sans | Consulting, B2B |
| `serif-modern` | Libre Baskerville | Lato | Law, finance, trust |
| `tech` | IBM Plex Mono | IBM Plex Sans | Dev tools, AI |

### Layouts
- `centered` — content centered, wide hero, single column
- `magazine` — editorial grid, mixed column widths
- `split` — consistent 2-column: text left, visual right
- `fullscreen` — section-per-screen, each fills viewport
- `asymmetric` — intentionally unbalanced, high visual tension

---

## Animation Rules (Always Applied)
- Always include `prefers-reduced-motion` media query — animations off when user prefers
- No animation on initial above-the-fold content — content loads clean, then animates
- ScrollTrigger start: `"top 80%"` — elements reveal before user reaches them
- Duration: 0.6s–1.0s for reveals, 0.2s–0.4s for micro-interactions
- Easing: `power2.out` for entrances, `power2.inOut` for transitions
- Stagger: 0.12s–0.2s between child elements
- Parallax max offset: 100px — visible but not disorienting
- Never auto-play video with sound
- Images always have explicit width/height attributes (prevents CLS)
- GPU compositing only: animate `transform` and `opacity`, never `width`/`height`/`top`/`left`

## Output Rules
- Single HTML file unless multi-page funnel requested
- All CSS in `<style>` block — no external stylesheets
- All JS in `<script>` block — no external JS files beyond CDN links
- CDN links: GSAP, Lucide, Google Fonts
- Mobile breakpoint: 768px
- Copy is realistic and specific — no "Lorem ipsum" ever
- Images: Unsplash URLs with descriptive alt text, or CSS-generated placeholders
- Include HTML comments marking each section for easy editing
