# Jack In The Shop — retrieved assets and redesign notes

Collected November 2, 2026. This is a separate local review build. No files were uploaded to jackintheshop.com and no live application was changed.

## Pages inspected

- https://jackintheshop.com/ — homepage, navigation, products, contacts, social links, forms.
- https://jackintheshop.com/about.html — maker story and North Carolina craftsmanship.
- https://jackintheshop.com/contact.html — custom-work request form and contact links.
- https://jackintheshop.com/pics/projects.html — returned HTTP 200; retrieved HTML largely repeats the homepage, with no distinct project-gallery content.
- https://jackintheshop.com/box — Box & Frame Generator Ver 0.7. Read for capabilities only; preserved as an external destination.
- robots.txt and sitemap.xml returned HTTP 404.

## Branding

The original logo was successfully downloaded from https://jackintheshop.com/JITS%20Clear%20BG.png (1,926,491 bytes). It is reused unchanged in assets/. It depicts a saw blade, laser head, wood texture, and the Jack In The Shop name. Despite the filename, the visible image includes a background; the redesign preserves the supplied asset. No replacement official logo was invented.

Existing site colors include dark gray, yellow/amber, and wood tones; existing typefaces are Playfair Display and Open Sans. The proposed design uses charcoal, warm orange, cream, Barlow Condensed, and DM Sans. Google Fonts is optional; local system fallbacks are provided.

## Downloaded original photography

All files below were retrieved successfully from the root of https://jackintheshop.com/ and reused locally:

| File | Existing offering | Bytes |
| --- | --- | ---: |
| lamp.webp | Rustic Vintage Meter Lamp | 28,054 |
| Knife.jpg | Engraved Lineman Knife | 733,970 |
| saw.webp | Rustic Metal Wall Sign | 598,022 |
| carve.webp | 3D Relief Carve | 174,966 |
| flag.jpg | Rustic Wood Flag | 380,200 |
| tray.jpg | Glass Insulator Nightlight Catchall Tray | 612,352 |
| cup.jpg | Custom Engraved Tumbler | 287,019 |
| lightbox.webp | Light-Up Memory Box | 268,718 |

Each product card retains its original Etsy listing link. Exact source URLs, download outcomes, and original homepage links are preserved in source-inventory.json.

## Content and contact information

Verified services: custom laser engraving and woodworking, personalized wood and metal gifts, custom commissions, corporate and bulk orders. The about page describes combining traditional woodworking with modern laser technology in North Carolina. New presentation copy paraphrases that story.

- Location: Dallas, NC.
- Email: Jack@JackInTheShop.com.
- Listed hours: Monday–Friday, 9am–5pm EST. Retained as written on the existing site; seasonal time-zone behavior is not independently verified.
- Etsy: https://jackintheshop.etsy.com
- YouTube: https://youtube.com/jackintheshop
- Facebook: https://www.facebook.com/profile.php?id=100089834354983
- Instagram: https://www.instagram.com/jacintheshopengraving/ (spelling retained exactly).

Original homepage navigation: Home, Shop, Custom Work, Project Photos, About. The preview adds prominent Maker Tools and YouTube sections while retaining routes to existing shop, about, contact, and project-photo pages.

## Generator verification

The retrieved generator source includes custom dimensions, material thickness, kerf adjustment, finger joints, lid options including hinged lids, dividers, lift-out trays, 3D visualization, SVG download, and DXF export. These are source-verified capabilities; this task did not independently cut or fit-test generated files. The homepage box drawing is a purpose-built illustrative SVG, clearly labeled as an illustration. It is not a product photograph or screenshot of the generator.

All generator calls to action go to https://jackintheshop.com/box. No copy or replacement of the generator is included in the redesign.

## Gaps and deliberate choices

- Homepage lamp price ($525) conflicts with the accessible Etsy listing ($575). Prices, shipping estimates, stock, ratings, and sales counts are omitted from the preview; Etsy remains the source for current purchase details.
- Several homepage footer policies point to #, rather than actual documents. No policy text was fabricated.
- The about page references workshop.jpg; it was not used or downloaded. The homepage also uses third-party stock photography and payment icons; those were not reused.
- Original product image alt text was frequently mismatched. New alt text follows the associated product.
- Existing forms use FormSubmit. The review build links to the real custom-work page and email instead of introducing a new submission or mailing-list backend.
- The YouTube channel URL is verified from existing site links and the user's request. No individual videos, titles, thumbnails, or posting cadence were invented.
- No live deployment, domain configuration, checkout, payment handling, or form submission was performed.

## Review and use

Open index.html directly in a browser; all core assets and navigation work without a build step. Internet is needed only for optional Google Fonts and external destinations. The preview is marked noindex. Before a future production launch, approve the design and arrange deployment that explicitly preserves /box and existing routes.
