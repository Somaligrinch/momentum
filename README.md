# Momentum

Momentum is a frontend-only presentation app for visualizing goals and building momentum. It uses local demo data, localStorage, CSS-only charts, and polished responsive UI. There are no APIs, AI features, authentication flows, payments, or backend services.

It is now interactive: creating multiple goals, switching personal workspaces, completing roadmap tasks, adding habits, logging focus sessions, and checking milestones updates the dashboard, projections, and insights in the browser.

Momentum has two clear lanes:

- **Personal mode** saves your real local goal workspaces in this browser.
- **Demo mode** lets you safely preview polished sample goals without changing personal data. Demo templates can be copied into your personal workspace when you want to use one for real.

## Run Locally

Open this exact folder in your editor:

```text
/Users/ahmed/coding projects/momentum
```

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
- `#/setup` Goals: create, update, switch, and delete personal goal workspaces, plus preview or copy demo templates.
- `#/dashboard` Dashboard: working progress ring, productivity score, habit toggles, habit creation/deletion, roadmap task creation/deletion, focus session logging, and weekly overview.
- `#/future` Future Vision: 30-day, 90-day, and 1-year projection timeline with toggleable milestone cards.
- `#/insights` Insights: local analytics derived from tasks, habits, sessions, and milestones.

## Presentation Click Path

1. Start on the Landing Page and point out the premium hero and floating dashboard preview.
2. Click **Create or choose a goal**.
3. In **Goals**, show the Personal mode banner, then scroll to the Demo gallery.
4. Preview a student, fitness, career, creative, or finance demo to show variety.
5. Click **Use this as a template** to copy the demo into personal goals.
6. On Dashboard, click **Complete recommended task** and watch progress update.
7. Add a roadmap task or habit, then delete one to show real management controls.
8. Click **Log focus session** and show the weekly chart and score responding.
9. Toggle a habit row, then open **Vision** and mark a milestone complete.
10. Click **Stats** and show that analytics are derived from local actions.
11. Toggle light/dark mode from the top nav if you want to demonstrate visual completeness.

## Notes And Limitations

- Personal goal library data is saved in localStorage under `momentum.library`, with legacy single-goal data mirrored under `momentum.workspace`.
- Demo previews are temporary and separate from personal data unless copied as a template.
- Charts are intentionally CSS/SVG-based and update from local browser data.
- There is no backend persistence beyond the browser.
- There are no API calls, AI features, auth flows, or payments.
