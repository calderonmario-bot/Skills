# Skills

A library of marketing, search, video and build skills. Each one is a folder
with a `SKILL.md` inside: plain markdown that tells a model how to do a job
properly, plus reference files with the templates and decision rules.

Nothing here is specific to one business, one tool or one model. Point any
LLM at a skill and it works.

## Use it with any model

**Give it a link.** Every skill is readable at a raw URL. For a model with
web access, this is the whole setup:

```
Read https://raw.githubusercontent.com/calderonmario-bot/Skills/main/marketing/social/SKILL.md and follow it. I want three Instagram posts about X.
```

**Give it the repo.** For a model that can browse or clone:

```
https://github.com/calderonmario-bot/Skills
```

**Install it locally.** Claude Code, Cursor, or anything that reads a skills
folder:

```bash
git clone https://github.com/calderonmario-bot/Skills.git
cp -r Skills/marketing/* ~/.claude/skills/
```

For Claude Code cloud sessions, `install/setup.sh` does this automatically on
every session in every project. See **Install** below.

## What is in here

### marketing

| Skill | What it does |
|---|---|
| `persuasive-copy` | Makes copy that sells rather than copy that reports. The one to load when writing sounds dry, technical or like AI |
| `copywriting` | Writes or rewrites page copy: homepage, landing, pricing, product, about |
| `copy-editing` | Edits copy you already have. Strips AI tells, tightens, refreshes stale content |
| `social` | Platform mechanics for Instagram, TikTok, LinkedIn, X and Facebook. Calendars, Reels, carousels, hooks, listening |
| `ad-creative` | Ad headlines, hooks and variations at scale. Carries a format tier list of what still works |
| `ads` | Paid campaign structure, targeting, bidding, and when to kill or scale |
| `cro` | Why a page is not converting, and what to change |
| `offers` | Builds the offer itself: value framing, bonuses, guarantees, naming, payment structure |
| `pricing` | What to charge, how to package, freemium and trial decisions |
| `marketing-psychology` | The mental models under all of the above. Why people buy |
| `emails` | Lifecycle and automated sequences: welcome, onboarding, win-back, drip |
| `cold-email` | B2B outreach that gets replies, and the follow-up sequence |
| `customer-research` | Interviews, surveys, review mining, personas, jobs to be done |
| `competitor-profiling` | Turns a list of competitor URLs into structured profiles |
| `analytics` | Tracking setup and audits. GA4, events, UTMs, conversion tracking |
| `product-marketing` | Writes the positioning and ICP document every other skill reads first |

### search

| Skill | What it does |
|---|---|
| `seo-audit` | Diagnoses why a site is not ranking. Technical, on-page, speed, indexing |
| `ai-seo` | Getting cited by ChatGPT, Perplexity, Claude and AI Overviews |
| `schema` | Structured data and rich results |
| `eso-audit` | Everything Search Optimization, the wider audit across surfaces |

### video-web

| Skill | What it does |
|---|---|
| `video` | AI video production across HeyGen, Veo, Sora, Runway, Kling and Remotion |
| `hyperframes` | Builds video compositions in HTML: captions, voiceover, transitions, audio-reactive animation |
| `hyperframes-cli` | The HyperFrames commands: init, lint, preview, render, transcribe, tts |
| `hyperframes-registry` | Installs and wires HyperFrames blocks and components |
| `website-to-hyperframes` | Takes a URL and turns the site into a video |
| `gsap` | GSAP animation reference for the above |
| `ui-ux-pro-max` | Interface design: 67 styles, 96 palettes, 57 font pairings, 13 stacks |
| `scroll-stopping-web` | Web design built to stop a scroll |

### dev

| Skill | What it does |
|---|---|
| `skill-builder` | Writes new skills in this format. Use it to add to this library |
| `github-code-review` | Structured code review |
| `github-project-management` | Issues, boards, sprint planning |
| `github-release-management` | Versioning, release and rollback |
| `github-workflow-automation` | GitHub Actions pipelines |
| `github-multi-repo` | Work spanning several repositories |
| `pair-programming` | Driver and navigator modes with live review |
| `verification-quality` | Truth scoring and rollback for agent output |
| `hooks-automation` | Claude Code hooks: formatting, checks, coordination |

## Pick per project

Installing everything everywhere works, but every installed skill puts one
line in front of the model at the start of a session. Fewer, better chosen
skills means the right one gets picked more often.

Put a file at `.claude/skills.conf` in a project, holding the groups that
project needs, one per line or space separated:

```
marketing search video-web
```

`install/setup.sh` reads it and copies only those. No file means everything.

## Make the model load them by itself

`router/` holds a keyword map and a hook. The hook reads what you typed
before the model sees it, matches your words, and injects a line naming the
skills to load. Saying "write me an instagram post" loads `social` and
`persuasive-copy` without you naming either.

- `router/map.json` is the keyword map. Plain words, edit it freely.
- `router/route.cjs` is the hook. Claude Code wires it on `UserPromptSubmit`.

Rules in `map.json` today: social, ads, page, video, email, search, offer,
research. It matches whole words only, so "post" does not fire on
"postgres", and it never blocks a prompt.

## Install

For Claude Code cloud sessions, paste `install/setup.sh` into your
environment setup script (Settings, then your environment). It runs in every
new session in every project, before Claude starts, and it:

1. clones or updates this repo
2. reads `.claude/skills.conf` in the project, if there is one
3. copies the chosen groups into `~/.claude/skills/`

For a local machine, run it by hand or from a `SessionStart` hook.

## Adding a skill

Write it with `skill-builder`, or copy the shape of any folder here: a
`SKILL.md` with `name` and `description` in the frontmatter, and a
`references/` folder for anything long. The `description` is what makes a
model pick the skill, so write it as the words someone would actually say,
not as a summary.

Then add it to the right group folder, add a row to the table above, and add
its trigger words to `router/map.json`.

## Credits

Most of this library is other people's work, gathered and grouped. Licenses
and attribution are in [NOTICE.md](NOTICE.md). The grouping, the router and
the install script are mine.
