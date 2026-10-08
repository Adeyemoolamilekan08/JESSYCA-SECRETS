# Jessyca Secrets - storefront

React + TypeScript + Vite + Tailwind CSS. Frontend only.

## Run locally
```
npm install
npm run dev
```

## Production build
```
npm run build
npm run preview
```

## Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel: Add New > Project > import the repository.
3. Framework preset: Vite (auto-detected). Build command `npm run build`, output `dist`.
4. Deploy. `vercel.json` already rewrites all routes to `index.html` so /shop, /product/... etc work on refresh.

(Or with the CLI: `npm i -g vercel && vercel --prod` from this folder.)

## Replace sample content
- `src/data/products.ts` - products, prices, stock, descriptions. Add `images: ['/products/name.jpg']`
  (files placed in `public/products/`) to show a real photo instead of the illustrated tile.
- `src/data/categories.ts` - categories.
- `src/data/site.ts` - phone, hours, WhatsApp number, hero/about photo (`heroImage`, `aboutImage`).
- Product ratings are sample values. Remove or replace them once real feedback is available.
