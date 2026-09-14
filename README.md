# CoKoro Tour — Website

A static, no-build-step landing page (plain HTML/CSS/JS). Open with a local
server (see below) — no framework or install required. Meant to be reached
via a link from Instagram and found by search once it's live on a domain.

**Sections:** Home, About, Tours, Guides, Reviews, Contact.

## Running it locally

Don't just double-click `index.html` — opening it directly as a `file://`
page silently disables the `<script>` tags that render the tours/guides/
reviews. Serve the folder instead, e.g.:

```bash
python3 -m http.server 4173
```

then open `http://localhost:4173`.

## What to edit, and where

| To change... | Edit this file |
|---|---|
| Tour names, prices, durations, descriptions, booking links | `data.js` → `TOURS` array |
| Guide names & photos | `data.js` → `GUIDES` array |
| Reviews | `data.js` → `REVIEWS` array |
| Hero headline, subheading, hero video | `index.html` → `<section class="hero"` |
| About section photo/text | `index.html` → `id="about-heading"` |
| WhatsApp number, Instagram handle, email | `index.html` → Contact section (search `wa.me`, `instagram.com`, `mailto:`) — also appears in the Footer, update both |
| Colors, fonts, spacing | `styles.css` → the `:root { ... }` block at the top |

### Adding a new tour, guide, or review

Open `data.js` and copy one of the existing objects in `TOURS`, `GUIDES`, or
`REVIEWS`, edit the fields, and save — the page re-renders automatically.
No HTML editing needed. This still works after you've deployed the site to
a real domain — just edit `data.js` and re-upload/redeploy.

## Real content still needed from you

This build is structurally complete but several pieces need your real
information before it's ready to publish:

1. **Tours** (`data.js` → `TOURS`) — for each real tour: name, price,
   duration, group size, a short description, a real photo (or reuse one
   already in `assets/images/`), and the real booking URL from
   GetYourGuide or whichever OTA you use. Every `bookingUrl` is currently
   `"#"` — clicking shows a "not connected yet" reminder instead of a
   dead link.
2. **Guides** (`data.js` → `GUIDES`) — 4 real names + 4 real photos. Only
   one placeholder photo (`guide-portrait`) is filled in; the other three
   show a generic silhouette icon until you add real files.
3. **Reviews** (`data.js` → `REVIEWS`) — this array is intentionally
   **empty**. Copy real guest reviews from GetYourGuide/Google and add
   them as objects (see the comment above the array for the exact shape).
   Do not invent quotes — the section shows a friendly "coming soon"
   message until real ones are added.
4. **Contact info** — real WhatsApp number, Instagram handle, and email,
   in both the Contact section and the Footer of `index.html`.

## Adding photos

Drop new photos in `assets/images/` (both a `.jpg` and a `.webp` version
if possible — the `.webp` loads first for speed). Reference the filename
(without extension) from `data.js` for tours/guides/reviews.

## Structure

```
index.html      Page structure & copy
styles.css      Design tokens + all styling (mobile-first)
data.js         Editable content: tours, guides, reviews
script.js       Renders the above into the page + small interactions
assets/logo/    Favicon + header logo, generated from media_web/cokoro_logo.png
assets/images/  Optimized photos used on the site (from media_web/)
```
