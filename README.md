# Astro Mining & Industrial Website

Next.js rebuild of the Astro Mining & Industrial homepage using the supplied preview, local brand assets, the company PDF, and content sourced from the live website.

## Stack

- Next.js App Router
- React
- CSS Modules
- Framer Motion for scroll and entrance animations

## Current Scope

- Modular homepage implementation
- Reusable layout and shared UI components
- SEO-ready metadata and semantic structure
- Real local logo and hero video integration
- Generated mineral product imagery placed in reusable local assets
- Client-provided quarry imagery integrated into About and Services sections
- Client-provided partner logos integrated into a slow looping slider with arrow controls
- Company profile PDF wired into the footer download card
- Scroll-based fade-up animations across sections
- Refactored `astro_homepage_preview.jsx` into a compatibility export

## Project Structure

- `app/` App Router entrypoints, metadata, and global styles
- `components/` layout, sections, and shared UI primitives
- `data/` site content and structured homepage data
- `lib/` animation variants and shared helpers
- `public/assets/` brand, image, video, and PDF assets

## Implemented Sections

- Absolute header with responsive mobile navigation
- Hero section with local looping background video
- Feature strip
- About section with quarry visuals and company story
- Services section with updated service copy and operational imagery
- Products grid matching the preview layout
- Industries grid matching the preview layout
- Why Astro stats section matching the preview layout
- Partners slider with slow auto-advance and manual arrow controls
- Global reach map section with coordinate-based export pins and flag previews
- Footer with contact info, social links, and profile download

## Notes

- The original single-file preview is preserved as a compatibility export and now points to the modular homepage implementation.
- The page structure intentionally follows the supplied preview file layout instead of expanding into extra homepage sections.
- Stage 1 content has been refined using the client-approved About, Services, and Contact copy.
- Styling avoids Tailwind and Bootstrap per project rules.
- Animations focus on subtle fade-up and staggered reveal patterns.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
