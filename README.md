# Wenlan Wei - Personal Site

A fast, highly-visual personal site inspired by rauno.me.

## Overview
This is v1 of Wenlan Wei's personal site. The focus is on frontend layout fidelity and a bold, diverse visual aesthetic. Content is currently placeholder and can be easily swapped.

Tech stack:
- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Geist & Caveat fonts (via `next/font`)

## How to Swap Content

- **Intro Text**: Open `src/components/IntroCard.tsx`. You will see the text "Wenlan Wei is a software engineer...". Each phrase is placed in its own div with left margins to control indentation.
- **Card Order & Selection**: Open `src/app/page.tsx`. The cards inside the `<HorizontalScroller>` component determine what is shown. You can rearrange them or duplicate them.
- **Manifesto (Bottom Text)**: Open `src/components/Manifesto.tsx`. The `lines` array contains the sentences for the bottom text block.

## Adding a New Card

To create a new card style:
1. Create a new component in `src/components/` (e.g. `MyNewCard.tsx`)
2. Use the `<BaseCard>` wrapper to ensure it snaps into the grid perfectly:
   ```tsx
   import React from "react";
   import BaseCard from "./BaseCard";

   export default function MyNewCard() {
     return (
       <BaseCard caption="New Label">
         {/* Your custom visual content here */}
       </BaseCard>
     );
   }
   ```
3. Import and add it to `src/app/page.tsx`.

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

1. Commit your changes and push to a new GitHub repository:
   ```bash
   git add .
   git commit -m "Update content"
   git remote add origin https://github.com/weiwenlan/wenlanwei-site.git
   git push -u origin main
   ```
2. Connect the repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect the Next.js framework and build the site.
