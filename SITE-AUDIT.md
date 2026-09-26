# My Cafe: current site audit and what changed

This is a plain look at what mycafego.com does today, what it's costing the business, and what the new build fixes. Everything below was checked directly on the live site on September 26, 2026.

## What the current site is running on

mycafego.com is built on GoDaddy Website Builder. The footer says so, and the page confirms it: the `<meta name="generator">` tag reads "Starfield Technologies; Go Daddy Website Builder 8.0.0000."

## Performance

- The homepage loads through GoDaddy's editor framework plus Google Analytics, Google AdSense, and a GoDaddy event-tracking script (`csp.secureserver.net`), on top of the actual page content. A JavaScript error fires in the console every page load: `adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page`.
- Two requests return a 404 on the homepage: `/favicon.ico` and `/markup/ad`.
- The page manifest has an invalid theme color (`019` isn't a valid CSS color), which Chrome rejects and logs as a warning.
- The new site is static HTML, CSS, and a few lines of JavaScript for the mobile menu. No ad network, no third-party analytics bloat, no editor framework shipped to visitors, and it deploys on Cloudflare's edge network for fast load times anywhere.

## The menu isn't actually on the website

This is the biggest one. Go to mycafego.com/menu and the "menu" is two scanned images of a printed menu, embedded as PDFs. That means:
- Nobody can search Google for "My Cafe eggs benedict Newark" and find this site, because there's no text for Google to read.
- On a phone, visitors have to pinch and zoom a flattened image to read prices.
- Screen readers can't read any of it, which is an accessibility gap as well as an SEO one.

The new site has the full menu, every section, item, and price, as real, readable HTML, organized with jump links so someone can go straight to "Burgers" or "Mimosas & More" from their phone.

## SEO gaps found and fixed

| Found on the current site | Fixed on the new site |
|---|---|
| No canonical tag on the homepage | Canonical tag on every page |
| 2 of 5 homepage images have no alt text, and one image's alt text describes something different from what the image actually shows (the "location" image is really the logo file; the "specialties" image is a Facebook cover graphic) | Every image has accurate, descriptive alt text |
| LocalBusiness structured data exists but only the most basic fields are set | Restaurant structured data with hours, address, geo coordinates, and cuisine type |
| No sitemap.xml or robots.txt found | Both added, referencing all three pages |
| Copyright notice reads "2024" | Corrected and set to update automatically going forward |

## Content problems on the current site

- The About page has a heading, "History with a focus on comfort food," with nothing written under it. It's been published blank.
- Business hours are inconsistent: the homepage lists Saturday and Sunday as 8am to 2:30pm, while the printed menu (which we transcribed for the new site) says 8am to 4pm. Worth confirming the real hours before launch. The new site currently uses the homepage's hours; happy to switch to whichever is correct.
- The two homepage feature images use alt text describing food and location, but the actual image files are the restaurant's logo and a Facebook cover graphic, not photos of the food or the space.

## Photos

The current site has very few real photos of the restaurant itself. We pulled what's usable (the logo and two interior shots) directly from mycafego.com for the new site. One of the two interior photos is noticeably low resolution when shown at full width, so it's a good candidate to replace with a phone photo taken in the dining room in good light. My Cafe's Instagram (@mycafego) has a strong, active feed of real food photography that would upgrade the new site significantly. It's worth asking the owner for a handful of full-resolution originals before this goes live.

## Reviews

My Cafe is ranked #10 of 204 restaurants in Newark on Tripadvisor. We pulled a few of the shorter, already-public review snippets displayed on the current site itself to use as testimonials on the new site. We didn't add anything that wasn't already public and attributed to a real review.

## Mobile

The current site's viewport meta tag is present and the layout mostly holds up, but it's carrying the same ad and tracking scripts on mobile as desktop, which is where they hurt load time the most. The new site was built mobile-first and tested at a 390px viewport throughout.
