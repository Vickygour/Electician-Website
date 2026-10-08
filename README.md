# Electrician Website (Next.js, frontend only)

Koi backend nahi hai. Sab data `localStorage` me save hota hai (bookings, orders, messages, reviews, comments, cart).

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Ek jagah se edit karo
- `src/data/site.js`      -> phone, email, address, WhatsApp, social links, YouTube video ID
- `src/data/services.js`  -> services
- `src/data/products.js`  -> shop products
- `src/data/posts.js`     -> blog posts
- `src/data/faqs.js`, `team.js`, `testimonials.js`, `plans.js`, `projects.js`

## Pages
/ , /about, /about/story, /about/team, /about/testimonials, /services, /services/[slug],
/prices, /gallery, /blog, /blog/[slug], /shop, /shop/[id], /cart, /checkout, /faq,
/contact, /brochure, /privacy, /terms

## Coupon codes (cart)
SAVE10 (10% off), ELEC20 (20% off, $100+), FREESHIP

## Saved data dekhna
Browser DevTools -> Application -> Local Storage -> keys: `electrician_bookings`,
`electrician_orders`, `electrician_messages`, `electrician_reviews`, `electrician_subscribers`
