# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Hexion Networks** — static multi-language marketing site for a Taiwan cybersecurity company (LIONIC NGFW distributor + EDR reseller). No build step, no framework. Pure HTML/CSS/JS served from the repo root.

**Live domain:** `hexionnetworks.com`
**Repo:** `YJP-Pan/Hexion_web` on GitHub (GitHub Pages)

---

## Dev Server & Screenshots

```bash
node serve.mjs          # starts at http://localhost:5501
node screenshot.mjs http://localhost:5501 <label>   # full-page PNG → ./temporary screenshots/
```

- Puppeteer Chrome path: `C:/Program Files/Google/Chrome/Application/chrome.exe`
- Server port is **5501**, not 3000.
- Check for a running server (`EADDRINUSE: 5501`) before starting a new one.
- For mobile screenshots, use a custom Puppeteer script with `setViewport({ width: 390, height: 844 })`.

---

## Site Architecture

### Language structure
| Prefix | Language | hreflang |
|--------|----------|----------|
| `/`    | zh-TW (Traditional Chinese) | `zh-TW` |
| `/en/` | English | `en` |

Every zh page has a mirror under `/en/`. Both sets share the same `style.css`, `lang.js`, and `brand_assets/`.

### Page inventory (57 total)
- `index.html` — homepage (zh + en)
- `about/`, `contact/`, `research/` — single pages
- `blog/` — listing + 10 articles
- `products/` — listing + 9 product pages (pico-utm-100, dual-ark-utm-16, tera-utm-12, lionfilter-200, endblock, teamt5, cycraft, edr, defender-xdr)
- `services/` — listing + 6 service pages (ai, brand, cybersecurity, digital, integrated, strategy)

### Shared assets
- `style.css` — global design system (all pages link `/style.css`)
- `lang.js` — zh↔en toggle logic (reads `window.location.pathname`)
- `nav.js` — **legacy inject script** (not used by live pages; nav/footer is now inlined per-page)
- `brand_assets/logo.png`, `brand_assets/favicon.png`

---

## Design System

**Colors (CSS custom properties in `style.css`):**
- `--o` / `#FA5822` — primary orange
- `--teal` / `#00C8C8` — teal accent
- `--ink` / `#0A0A14` — base background
- `#3DDC97` — EDR/endpoint green
- `#0078D4` — Microsoft Defender XDR blue
- Per-product accent stored as `--accent` in an inline `<style>:root{--accent:…}</style>` on each product page

**Typography:** Inter (body), Orbitron (monospace labels/topbar), Google Fonts loaded per-page.

**Key CSS classes:** `.reveal` (scroll-animate), `.topbar`, `.mega` / `.mega-col` / `.mega-link`, `.mega-prod-badge`, `.prod-hero-title`, `.feat-sec`, `.spec-sec`, `.cta-band`.

---

## Nav / Footer Pattern

Nav and footer are **inlined in every HTML file** (not injected via JS). When changing nav or footer items, you must update all 57 files via PowerShell bulk-replace.

**Standard bulk-replace approach (preserves CJK encoding):**
```powershell
$c = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)
$c = $c -replace "`r`n", "`n"   # normalise line endings first
$c = $c.Replace($old, $new)
[System.IO.File]::WriteAllText($path, $c, (New-Object System.Text.UTF8Encoding $false))
```

**Topbar structure (zh):**
```html
<div class="topbar">
  <div class="topbar-social-group">…FB + IG icons…</div>
  <a href="/contact/">聯絡我們</a>
  <a href="/blog/" class="topbar-highlight">最新資安報告 →</a>
  <a href="#" id="lang-toggle" class="lang-btn">EN</a>
</div>
```

**En pages** use `Contact Us` and `id="lang-toggle"` pointing to the zh path.

---

## SEO Checklist (all pages must have)

Every page must include in `<head>`:
- `<title>` unique per page
- `meta description`, `meta keywords`
- `geo.region: TW-KHH`, `geo.placename`, `geo.position: 22.627;120.302`, `ICBM`
- `meta language: zh-TW` or `en`
- `og:title`, `og:description`, `og:image`, `og:url`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- `rel="canonical"`, `rel="alternate" hreflang` (zh-TW, en, x-default)
- `application/ld+json` — `WebSite` (homepages only) or `BreadcrumbList` (all sub-pages) + page-specific schema

**BreadcrumbList** must be built with explicit string arrays (not PowerShell array `+` concatenation — that corrupts the JSON). Use a `MakeBC([string[]]$names, [string[]]$urls)` function pattern.

---

## Adding a New Language

Mirror the `en/` directory structure under the new prefix (e.g. `ja/`). For each page:
1. Translate content
2. Update `hreflang` alternates on **all** existing pages to include the new language
3. Update `lang.js` if adding a third-language toggle
4. Add geo + language meta (`meta name="language" content="ja"`)
5. Add `BreadcrumbList` with Japanese names

---

## Git

```bash
git add -A
git commit -m "message\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push origin main
```

GitHub Pages deploys automatically on push. Deployment typically takes 1–2 minutes.
