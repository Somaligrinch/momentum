# Momentum

Momentum is a frontend-only presentation app for visualizing goals and building momentum. It uses local demo data, localStorage, CSS-only charts, and polished responsive UI. There are no APIs, AI features, authentication flows, payments, or backend services.

## Run Locally

From this folder, use either command:

```bash
yarn start
```

or:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:4174
```

The app is static, so it can also be hosted by any simple static file server.

## Pages

- `#/` Landing Page: premium hero, animated background, product preview, feature sections, and CTAs.
- `#/setup` Goal Setup: enter a goal title, target date, priority, and category with a live preview.
- `#/dashboard` Dashboard: progress ring, productivity score, habit streaks, timeline cards, and weekly overview.
- `#/future` Future Vision: 30-day, 90-day, and 1-year projection timeline with milestone cards.
- `#/insights` Insights: local fake analytics, KPI cards, charts, and presentation-ready takeaways.

## Presentation Click Path

1. Start on the Landing Page and point out the premium hero and floating dashboard preview.
2. Click **Start building momentum**.
3. Enter or keep the demo goal, choose a category and priority, then click **Build my roadmap**.
4. On Dashboard, show the animated progress ring, productivity score, habit streaks, and weekly overview.
5. Click **Vision** and switch between **30 days**, **90 days**, and **1 year**.
6. Click **Stats** and show that the analytics are polished even though they are local demo data.
7. Toggle light/dark mode from the top nav if you want to demonstrate visual completeness.

## Notes And Limitations

- Goal data is saved in localStorage under `momentum.goal`.
- Charts are intentionally CSS/SVG-based with fake local data for presentation quality.
- There is no backend persistence beyond the browser.
- There are no API calls, AI features, auth flows, or payments.
