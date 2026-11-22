# ESO Audit — Everything Search Optimization

**ESO** = SEO + AEO + GEO. One skill. Every search surface covered.

Coined by Mario Calderon & Vera, 2026.

## What ESO Covers

- **SEO** — Traditional search (Google, Bing): technical, on-page, schema, Core Web Vitals, E-E-A-T
- **AEO** — Answer Engines: Featured Snippets, People Also Ask, Knowledge Panel, voice search
- **GEO** — Generative AI: Google AI Overviews, ChatGPT web search, Perplexity, Claude citations, llms.txt

---

## Commands

### `/eso-audit <url>`
Full ESO audit — all three layers at once. Produces a prioritized action list.

Output format:
```
ESO AUDIT — <url>
━━━━━━━━━━━━━━━━━━━━━━━━
SEO: [0-100] | AEO: [0-100] | GEO: [0-100] | ESO SCORE: [0-100]

CRITICAL (fix today):
• [Issue] → [Fix]

HIGH (this week):
• [Issue] → [Fix]

MEDIUM (this month):
• [Improvement]

TOP 5 ACTIONS BY IMPACT:
1. ...
```

### `/eso-seo <url>`
Traditional SEO audit. Checks:
- Title tag (50-60 chars, keyword placement, CTR hook)
- Meta description (150-160 chars, CTA present)
- H1-H6 hierarchy and keyword usage
- Internal linking structure and anchor text
- Image alt text and file name optimization
- Core Web Vitals: LCP (<2.5s), CLS (<0.1), INP (<200ms)
- Mobile-friendliness and viewport
- Canonical tags, robots.txt, XML sitemap
- Structured data presence and validity
- E-E-A-T signals: author bio, credentials, citations, last-updated date
- Duplicate content risks
- Redirect chains

### `/eso-aeo <url or content>`
Answer Engine Optimization. Audits and generates:
- Featured Snippet eligibility (paragraph, list, table, code)
- PAA (People Also Ask) targets — questions to answer on the page
- Knowledge Panel optimization (entity disambiguation, `sameAs` links)
- Direct answer blocks (40-60 words answering "what is X" queries)
- FAQ schema from existing Q&A content
- HowTo schema for instructional content
- `speakable` schema for voice search
- Structured answer formatting (numbered lists, definition paragraphs)

### `/eso-geo <url or content>`
Generative Engine Optimization. Checks:
- Citability score — passages 134-167 words that AI systems extract
- Quotable statistics with source attribution
- Brand entity clarity (is your brand unambiguously identifiable to AI?)
- `llms.txt` presence and quality
- JSON-LD completeness for AI parsing
- AI Overview eligibility signals
- Perplexity citation signals (external authority links, source signals)
- ChatGPT web search visibility factors
- Content freshness signals (publication + last-updated markup)
- Multi-modal content signals (images, video with transcripts)

### `/eso-content <topic or URL>`
Optimize or write content for all three ESO layers:
1. Primary keyword + semantic cluster identification
2. AEO question mapping (PAA + featured snippet targets)
3. GEO-optimized passage embedding (134-167 word citability windows)
4. Schema recommendations
5. ESO score for the output

### `/eso-llmstxt <site-name> <site-description>`
Generate a proper `llms.txt` file for any site. Includes:
- Site overview (what it is, who it's for, what it does)
- Key pages with one-line AI-readable summaries
- Content the AI should prioritize when citing
- Content the site should NOT be cited for
- Preferred citation format and brand name
- Contact and verification signals

### `/eso-schema <type> <content>`
Generate valid JSON-LD schema markup. Output: copy-paste ready `<script>` block.

Types:
- `faq` — FAQ schema from Q&A pairs
- `howto` — HowTo schema from step-by-step content
- `product` — Product schema (price, availability, reviews) for ecommerce
- `localbusiness` — LocalBusiness for GHL agency clients (HVAC, plumbers, etc.)
- `article` — Article schema with author, datePublished, dateModified
- `review` — Review + AggregateRating schema
- `breadcrumb` — BreadcrumbList for site hierarchy
- `video` — VideoObject for YouTube embeds (Echoes of Empires)
- `event` — Event schema
- `person` — Person schema for E-E-A-T author pages

### `/eso-keywords <topic>`
Keyword research and content planning:
1. Primary keyword (search volume tier: high/med/low, competition: easy/med/hard)
2. Semantic cluster — 10-15 related terms that signal topical authority
3. AEO questions — 5-10 PAA + featured snippet targets
4. Long-tail variations (3-5 word phrases)
5. Content gaps — what competitors rank for that's missing
6. Recommended content structure (H1, H2s, word count target)

### `/eso-youtube <video-title or channel>`
YouTube ESO — optimizes for YouTube search AND AI discovery:
- Title formula: [Keyword] + [Hook] (max 60 chars)
- Description structure: first 150 chars hook, timestamps, links, keyword-rich body
- Tag strategy: primary, secondary, channel brand tags
- Chapter markers for AI transcript indexing
- Transcript optimization for AI citation (key quotable moments)
- Thumbnail concept for maximum CTR
- Playlist architecture for topical authority
- Cards and end screen strategy

*Specific use: Echoes of Empires YouTube + Instagram optimization*

### `/eso-local <business-type> <location>`
Local ESO for GHL agency clients:
- Google Business Profile optimization
- LocalBusiness schema (full)
- NAP consistency check framework
- Review schema and review generation strategy
- Local keyword targeting ("[service] in [city]")
- AI voice search optimization ("Hey Google, find me a plumber near...")
- Local entity establishment signals

### `/eso-report <url>`
Generates a clean client-ready ESO report. Use for Umbrella AI Agency deliverables.
Format: executive summary + scored sections + 30/60/90 day action plan.

---

## ESO Scoring Framework

### SEO Score (0-100)
- Technical (25pts): crawlability, page speed, mobile, HTTPS, schema present
- On-Page (35pts): title, meta, headings, content depth, keyword integration
- Authority (20pts): E-E-A-T signals, external citations, author credentials
- UX (20pts): Core Web Vitals, layout stability, interactivity

### AEO Score (0-100)
- Direct answer blocks present (30pts)
- Question-intent content coverage (25pts)
- Structured data for answer features (25pts)
- Voice search readiness (20pts)

### GEO Score (0-100)
- Citability score — 134-167 word passages present (30pts)
- Brand entity clarity (20pts)
- `llms.txt` present and complete (15pts)
- Quotable statistics with sources (20pts)
- Content freshness signals (15pts)

### ESO Score = (SEO × 0.4) + (AEO × 0.3) + (GEO × 0.3)

---

## ESO Rules (Always Applied)
- Schema must be valid JSON-LD — always output parseable code
- GEO recommendations specify which AI platform they target
- Never recommend keyword stuffing — semantic relevance only
- For ecommerce pages: always include Product schema
- For local businesses (GHL clients): always include LocalBusiness schema
- For authored content: always include Article schema with Person markup
- For video content (Echoes of Empires): always include VideoObject schema
- `llms.txt` recommended for every site we build
- Bilingual content (en-US/es-US): always include hreflang markup
