# Momentum Product And Technical Specification

## Source Of Truth
- Status: Active implementation specification
- Last refreshed: 2026-05-19
- Product: Momentum
- Product type: Frontend-only goal visualization and momentum dashboard
- Primary goal: Impress viewers during a presentation with premium startup-quality visual design
- Build target: One developer, one day, no backend
- Constraints: No APIs, no AI functionality, no authentication, no payments, no backend required
- Evidence reviewed: Repository contained an earlier unrelated Momentum design document; user explicitly replaced direction with Momentum

## 1. Product Requirements Document

### Product Summary
Momentum helps people visualize goals and build momentum through a polished landing page, simple goal setup, a progress dashboard, a future vision timeline, and premium-looking insights built from fake local data.

The product should feel like a top-tier startup prototype: minimal, cinematic, responsive, and delightful. It should be technically simple enough to build in a day, but visually strong enough to look like a funded product concept.

### One-Sentence Pitch
Momentum turns a goal into a visual roadmap, helping people see progress today, momentum this week, and a clearer version of their future.

### Primary Audience
- Presentation viewers
- Students, makers, founders, professionals, or anyone with personal goals
- A single developer building a polished demo quickly

### User Problem
People often set goals but lose motivation because progress feels abstract. They need a beautiful way to see where they are, where they are going, and what momentum looks like over time.

### Product Promise
Momentum gives users a premium visual system for:
- Setting a goal quickly
- Seeing progress clearly
- Understanding short-term and long-term milestones
- Feeling motivated by beautiful progress projections
- Exploring attractive analytics without technical complexity

### MVP Scope
Must include:
- Landing Page
- Goal Setup
- Dashboard
- Future Vision Page
- Insights Page
- Dark mode
- Mobile responsiveness
- Local fake/demo data
- Smooth section transitions and hover states

Must not include:
- APIs
- AI features
- Authentication
- Payments
- Backend persistence requirements
- Team collaboration
- Notifications
- Complex settings

### Success Criteria
- The first viewport looks premium and memorable.
- A viewer understands the product within 15 seconds.
- Navigation between screens feels smooth.
- Goal setup works with local state.
- Dashboard and insights look data-rich using fake data.
- Mobile layout feels intentionally designed, not squeezed.
- A single developer can build it in one day.

## 2. Complete UX Flow

### Primary Presentation Flow
1. User lands on the Landing Page.
2. Hero introduces Momentum with a bold headline, animated gradient, and CTA.
3. User clicks "Start building momentum".
4. Goal Setup screen opens.
5. User enters goal title, target date, priority level, and category.
6. User submits the goal.
7. User lands on Dashboard.
8. Dashboard shows progress rings, completion percentages, productivity score, streak cards, timeline cards, and weekly overview.
9. User opens Future Vision.
10. Future Vision shows 30-day, 90-day, and 1-year projection cards.
11. User opens Insights.
12. Insights shows premium fake charts and local analytics.

### Secondary Flow: Skip Setup Demo
For presentation safety, include a "View demo dashboard" CTA on the landing page. This allows the demo to work even if the presenter does not want to type.

### Navigation Flow
Top-level navigation:
- Home
- Setup
- Dashboard
- Future Vision
- Insights

Recommended behavior:
- Landing Page uses smooth-scroll sections plus CTA links.
- App screens use a persistent top nav on desktop.
- Mobile uses a compact top nav with menu or horizontal pill navigation.

### Goal Setup Flow
Fields:
- Goal title
- Target date
- Priority level
- Category

Flow:
1. User types goal title.
2. User selects priority from segmented control.
3. User selects category from premium icon cards.
4. User chooses target date.
5. Preview card updates live.
6. User clicks "Build my roadmap".
7. Dashboard loads with goal data applied.

Validation:
- Goal title required.
- Target date required.
- Category required.
- Priority defaults to Medium.

## 3. Component Breakdown

### App Shell Components
- `AppShell`: Wraps dashboard-style pages with nav and theme.
- `MarketingShell`: Wraps landing page sections.
- `TopNav`: Logo, links, theme toggle, CTA.
- `MobileNav`: Compact nav drawer or horizontal pill nav.
- `PageContainer`: Max-width layout wrapper.
- `Section`: Reusable landing section spacing wrapper.

### Landing Components
- `HeroSection`
- `AnimatedGradientBackground`
- `HeroCTAGroup`
- `FeatureStrip`
- `ProductPreview`
- `HowItWorksSection`
- `MetricBand`
- `FinalCTASection`

### Setup Components
- `GoalSetupForm`
- `PrioritySelector`
- `CategoryPicker`
- `DateInput`
- `GoalPreviewCard`
- `SetupProgressIndicator`

### Dashboard Components
- `DashboardHeader`
- `ProgressRing`
- `MetricCard`
- `ProductivityScoreCard`
- `GoalCompletionCard`
- `TimelineCard`
- `HabitStreakCard`
- `WeeklyOverview`
- `MiniBarChart`
- `MomentumList`

### Future Vision Components
- `VisionHero`
- `ProjectionTimeline`
- `ProjectionCard`
- `MilestoneCard`
- `HorizonTabs`
- `FutureProgressPath`

### Insights Components
- `InsightsHeader`
- `ChartCard`
- `LineChartMock`
- `BarChartMock`
- `DonutChartMock`
- `InsightMetricGrid`
- `ScoreBreakdown`
- `TrendBadge`

### UI Primitives
- `Button`
- `IconButton`
- `Card`
- `GlassCard`
- `Badge`
- `Pill`
- `Tabs`
- `SegmentedControl`
- `Input`
- `Select`
- `Modal`
- `Toast`
- `Tooltip`
- `Skeleton`
- `ThemeToggle`

### Required States
Every interactive component needs:
- Default
- Hover
- Pressed
- Focus-visible
- Disabled
- Loading where relevant
- Selected where relevant

## 4. Full Page Structure

## Landing Page

### Purpose
Create instant premium appeal and explain the product without overwhelming the viewer.

### Structure
1. Sticky translucent top navigation
2. Hero section
3. Product preview section
4. Feature/value section
5. How it works section
6. Dashboard metrics teaser
7. Final CTA section

### Hero Section
Content:
- Eyebrow: "Goal clarity for people building momentum"
- H1: "Turn your next goal into a visible path forward."
- Supporting copy: "Momentum helps you set a direction, track progress, and visualize the future you are building."
- Primary CTA: "Start building momentum"
- Secondary CTA: "View demo dashboard"

Visual:
- Animated gradient background
- Large typography
- Floating dashboard preview
- Subtle glass panels
- Soft radial glow behind product preview

Interaction:
- CTA hover lift
- Preview card parallax on mouse move if easy
- Smooth scroll to sections

### Product Preview Section
Show a polished fake dashboard panel:
- Progress ring
- Productivity score
- 30/90/365 day mini cards
- Weekly activity bars

### Feature Section
Three premium feature cards:
- Visualize the path
- Build daily momentum
- See future milestones

### How It Works Section
Three steps:
1. Set one goal
2. Track momentum
3. See your future path

### Final CTA
Short, confident copy:
"Your direction gets clearer when progress becomes visible."

## Goal Setup Page

### Purpose
Let users define a goal quickly while making the setup moment feel premium and intentional.

### Structure
- Split layout on desktop
- Form on left
- Live preview card on right
- Single-column stack on mobile

### Fields
- Goal title: text input
- Target date: date input
- Priority: Low, Medium, High
- Category: Career, Health, Learning, Creative, Finance, Personal

### Form UX
- Use labels above fields.
- Use clear helper copy sparingly.
- Keep form visually compact.
- Primary button stays disabled until required fields are complete.
- Preview card updates as the user types.

### Success Behavior
After submit:
- Store goal in local state or localStorage.
- Navigate to Dashboard.
- Show a toast: "Your goal is set."

## Dashboard Page

### Purpose
Make goal progress feel tangible and impressive.

### Structure
Desktop 12-column grid:
- Header: full width
- Main progress card: 5 columns
- Productivity score: 3 columns
- Habit streaks: 4 columns
- Timeline cards: 7 columns
- Weekly overview: 5 columns
- Momentum notes/list: full width or 6 columns

Mobile:
- Header
- Progress card
- Productivity score
- Habit streaks
- Timeline cards
- Weekly overview

### Content
- Main goal title and target date
- Progress ring: 68%
- Completion percentage cards
- Productivity score: 84
- Habit streak cards:
  - Morning focus: 9 days
  - Deep work: 5 days
  - Reflection: 12 days
- Timeline cards:
  - Week 1: Foundation
  - Week 2: Consistency
  - Week 3: Acceleration
  - Week 4: Review
- Weekly overview chart:
  - Mon-Sun bars
  - Completed sessions
  - Momentum score

### Interactions
- Hover card lift
- Progress rings animate on page entry
- Habit cards glow subtly on hover
- Timeline cards highlight current week
- Metric numbers count up on load if simple

## Future Vision Page

### Purpose
Create the most visually distinctive screen: a projection of future momentum.

### Structure
- Hero header: "Your future path"
- Horizon tabs: 30 days, 90 days, 1 year
- Large visual progress path
- Milestone cards
- Projection summary panel

### 30 Days
Theme: Foundation
Show:
- First meaningful habit streak
- Initial progress milestone
- Confidence building

### 90 Days
Theme: Momentum
Show:
- Strong consistency
- Visible skill or outcome improvement
- Midpoint milestone

### 1 Year
Theme: Transformation
Show:
- Major goal completion or evolved identity
- Long-term achievement card
- Reflection summary

### Visual Treatment
- Horizontal or vertical timeline depending on viewport
- Glass milestone cards
- Gradient line/path connecting horizons
- Soft glow around selected horizon

### Copy Tone
Use aspirational but grounded language:
- "30 days: visible consistency"
- "90 days: measurable momentum"
- "1 year: a new baseline"

## Insights Page

### Purpose
Show premium analytics using fake local data.

### Structure
- Header with date range pill
- KPI grid
- Main trend chart
- Secondary chart grid
- Insight cards

### KPI Cards
- Momentum score: 84
- Completion rate: 76%
- Active streak: 12 days
- Weekly focus: 14.5h

### Charts
Use fake local arrays:
- Line chart: Momentum score over 8 weeks
- Bar chart: Weekly completed sessions
- Donut chart: Goal category allocation
- Area chart or sparkline: Focus trend

If chart libraries are unavailable, use CSS-only mock charts. For presentation, polished static charts are acceptable.

### Insight Cards
Static deterministic copy:
- "Your strongest progress happens mid-week."
- "Consistency increased 18% over the last month."
- "Your current pace reaches the next milestone in 21 days."

Important: These are not AI insights. They are fixed local demo insights.

## 5. Color Palette

### Design Direction
Momentum should use a premium dark-first palette with luminous gradients and clean light mode support. The brand should feel directional, atmospheric, and focused.

### Dark Mode Tokens
```css
:root {
  --bg: #070812;
  --bg-elevated: #0F1220;
  --surface: rgba(18, 22, 38, 0.76);
  --surface-solid: #151929;
  --surface-soft: rgba(255, 255, 255, 0.06);
  --border: rgba(255, 255, 255, 0.12);
  --border-strong: rgba(255, 255, 255, 0.20);
  --text: #F7F8FF;
  --text-muted: #A7ADC2;
  --text-soft: #737B96;

  --primary: #8B5CF6;
  --primary-strong: #A78BFA;
  --cyan: #22D3EE;
  --blue: #3B82F6;
  --green: #34D399;
  --amber: #FBBF24;
  --rose: #FB7185;
}
```

### Light Mode Tokens
```css
[data-theme="light"] {
  --bg: #F7F8FC;
  --bg-elevated: #FFFFFF;
  --surface: rgba(255, 255, 255, 0.78);
  --surface-solid: #FFFFFF;
  --surface-soft: rgba(15, 23, 42, 0.04);
  --border: rgba(15, 23, 42, 0.10);
  --border-strong: rgba(15, 23, 42, 0.16);
  --text: #111827;
  --text-muted: #5F667A;
  --text-soft: #8A91A5;

  --primary: #7C3AED;
  --primary-strong: #6D28D9;
  --cyan: #0891B2;
  --blue: #2563EB;
  --green: #059669;
  --amber: #D97706;
  --rose: #E11D48;
}
```

### Gradient System
Use gradients as premium highlights, not everywhere.

Primary brand gradient:
```css
linear-gradient(135deg, #8B5CF6 0%, #22D3EE 52%, #34D399 100%)
```

Hero background gradient:
```css
radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.32), transparent 32%),
radial-gradient(circle at 78% 18%, rgba(34, 211, 238, 0.24), transparent 30%),
radial-gradient(circle at 50% 85%, rgba(52, 211, 153, 0.18), transparent 38%),
#070812
```

Warm accent:
```css
linear-gradient(135deg, #FBBF24, #FB7185)
```

## 6. Typography System

### Font Recommendation
Use a modern sans-serif:
```css
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
```

Premium alternative if available:
- Geist
- SF Pro
- Satoshi
- Manrope

### Type Scale
- Hero display: 72px / 78px, weight 760
- Desktop H1: 48px / 56px, weight 740
- H2: 34px / 42px, weight 700
- H3: 22px / 30px, weight 650
- Card title: 16px / 24px, weight 650
- Body: 15px / 24px, weight 400
- Small: 13px / 18px, weight 500
- Caption: 12px / 16px, weight 550
- Metric: 44px / 48px, weight 760

### Mobile Type Scale
- Hero display: 44px / 50px
- H1: 34px / 42px
- H2: 26px / 34px
- Metric: 36px / 40px

### Rules
- Letter spacing should be 0 or slightly positive for all-caps labels.
- Avoid negative tracking.
- Keep text blocks narrow in hero sections.
- Use tabular numbers for metrics if supported.

## 7. Animation Specifications

### Motion Principles
- Subtle, elegant, and smooth.
- Motion should support hierarchy, not distract.
- Page entry should feel premium but fast.

### Durations
- Hover transition: 160ms
- Button press: 90ms
- Page fade/slide: 260ms
- Progress ring draw: 900ms
- Chart reveal: 700ms
- Modal open: 220ms
- Toast: 220ms
- Hero gradient loop: 12s to 18s

### Easing
```css
cubic-bezier(0.2, 0.8, 0.2, 1)
```

### Required Animations
- Animated gradient background on landing page.
- Hero product preview gently floats vertically.
- Cards lift 2-4px on hover.
- Button press scales to 0.98.
- Progress rings animate from 0 to current value.
- Chart bars grow from bottom on page load.
- Future timeline path reveals from left to right.
- Tabs use sliding active indicator.

### Reduced Motion
Use `prefers-reduced-motion`:
- Disable gradient movement.
- Disable floating preview.
- Replace progress draw with instant value.
- Keep simple opacity transitions.

## 8. Spacing System

### Base Scale
Use an 8px rhythm:
- 4px: tiny gap
- 8px: tight gap
- 12px: compact internal spacing
- 16px: card internal spacing
- 24px: standard section gap
- 32px: large card/page gap
- 48px: page section spacing
- 64px: major section spacing
- 96px: landing page vertical section spacing
- 128px: hero vertical rhythm on desktop

### Layout Widths
- Marketing max width: 1180px
- Dashboard max width: 1440px
- Text max width: 720px
- Form max width: 520px

### Card Padding
- Small card: 16px
- Dashboard card: 24px
- Hero preview card: 28px
- Mobile card: 16px to 20px

### Border Radius
- Buttons: 999px for hero CTAs, 14px for app buttons
- Cards: 24px
- Small cards: 18px
- Inputs: 14px
- Dashboard panels: 28px
- Pills: 999px

## 9. Demo Data

### Goal
```js
export const demoGoal = {
  id: "goal_001",
  title: "Launch my portfolio website",
  targetDate: "2026-08-15",
  priority: "High",
  category: "Creative",
  progress: 68,
  createdAt: "2026-05-19"
};
```

### Dashboard Metrics
```js
export const dashboardMetrics = {
  productivityScore: 84,
  goalCompletion: 68,
  weeklyProgress: 76,
  activeStreak: 12,
  focusHours: 14.5,
  tasksCompleted: 23
};
```

### Habit Streaks
```js
export const habitStreaks = [
  { id: "h1", title: "Morning focus", streak: 9, completion: 82, color: "#8B5CF6" },
  { id: "h2", title: "Deep work", streak: 5, completion: 74, color: "#22D3EE" },
  { id: "h3", title: "Evening review", streak: 12, completion: 91, color: "#34D399" }
];
```

### Weekly Overview
```js
export const weeklyOverview = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 84 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 92 },
  { day: "Sat", value: 58 },
  { day: "Sun", value: 76 }
];
```

### Timeline Cards
```js
export const timelineCards = [
  {
    id: "t1",
    title: "Foundation",
    period: "Week 1",
    status: "Complete",
    description: "Defined the goal, mapped the first milestones, and started daily sessions."
  },
  {
    id: "t2",
    title: "Consistency",
    period: "Week 2",
    status: "Current",
    description: "Build repeatable momentum with focused blocks and weekly review."
  },
  {
    id: "t3",
    title: "Acceleration",
    period: "Week 3",
    status: "Next",
    description: "Increase output, refine the plan, and remove friction."
  }
];
```

### Future Vision
```js
export const futureVision = [
  {
    horizon: "30 days",
    theme: "Visible consistency",
    projectedProgress: 78,
    milestones: ["12 focused sessions", "First public draft", "Weekly review rhythm"]
  },
  {
    horizon: "90 days",
    theme: "Measurable momentum",
    projectedProgress: 92,
    milestones: ["Portfolio polished", "Case studies complete", "Feedback loop active"]
  },
  {
    horizon: "1 year",
    theme: "A new baseline",
    projectedProgress: 100,
    milestones: ["Major goal achieved", "Stronger creative identity", "Repeatable system built"]
  }
];
```

### Insights Data
```js
export const momentumTrend = [
  { week: "W1", score: 54 },
  { week: "W2", score: 61 },
  { week: "W3", score: 66 },
  { week: "W4", score: 72 },
  { week: "W5", score: 75 },
  { week: "W6", score: 81 },
  { week: "W7", score: 79 },
  { week: "W8", score: 84 }
];

export const categoryBreakdown = [
  { label: "Creative", value: 42, color: "#8B5CF6" },
  { label: "Learning", value: 28, color: "#22D3EE" },
  { label: "Health", value: 18, color: "#34D399" },
  { label: "Personal", value: 12, color: "#FBBF24" }
];
```

## 10. Frontend Architecture

### Recommended Stack
Fastest premium implementation:
- Vite
- React
- TypeScript optional but recommended
- Tailwind CSS
- Framer Motion optional for polish
- Lucide React icons
- Recharts optional for charts
- LocalStorage for demo goal persistence

No backend required.

### Data Strategy
Use local constants for demo data:
- `src/data/demoData.ts`

Use localStorage for user-created goal:
- Key: `momentum.goal`
- If no saved goal exists, use `demoGoal`

### Routing
Use React Router or simple state-based routing.

Routes:
- `/`
- `/setup`
- `/dashboard`
- `/future`
- `/insights`

### State Model
Global state can be simple:
- `goal`
- `theme`

Recommended:
- `useGoalStore` custom hook using `useState` and localStorage
- `useTheme` custom hook

Avoid complex state libraries.

### Chart Strategy
Preferred:
- Recharts for line, bar, and donut charts

Fallback:
- CSS-only charts using div bars, SVG circles, and simple paths

Because the app is presentation-focused, static fake charts are acceptable if they look premium.

## 11. Folder Structure

```text
momentum/
  src/
    app/
      App.tsx
      routes.tsx
    components/
      layout/
        AppShell.tsx
        MarketingShell.tsx
        TopNav.tsx
        MobileNav.tsx
        PageContainer.tsx
      landing/
        HeroSection.tsx
        AnimatedGradientBackground.tsx
        ProductPreview.tsx
        FeatureStrip.tsx
        HowItWorksSection.tsx
        FinalCTASection.tsx
      setup/
        GoalSetupForm.tsx
        PrioritySelector.tsx
        CategoryPicker.tsx
        GoalPreviewCard.tsx
      dashboard/
        DashboardHeader.tsx
        ProgressRing.tsx
        ProductivityScoreCard.tsx
        HabitStreakCard.tsx
        WeeklyOverview.tsx
        TimelineCard.tsx
      future/
        VisionHero.tsx
        HorizonTabs.tsx
        ProjectionTimeline.tsx
        MilestoneCard.tsx
      insights/
        ChartCard.tsx
        LineChartMock.tsx
        BarChartMock.tsx
        DonutChartMock.tsx
        InsightMetricGrid.tsx
      ui/
        Button.tsx
        Card.tsx
        Badge.tsx
        Input.tsx
        Tabs.tsx
        ThemeToggle.tsx
        Skeleton.tsx
    data/
      demoData.ts
    hooks/
      useGoal.ts
      useTheme.ts
    pages/
      LandingPage.tsx
      GoalSetupPage.tsx
      DashboardPage.tsx
      FutureVisionPage.tsx
      InsightsPage.tsx
    styles/
      globals.css
      tokens.css
    utils/
      date.ts
      format.ts
  index.html
  package.json
  tailwind.config.ts
  vite.config.ts
```

For a one-day build, components can be consolidated if needed. The folder structure is a guide, not a reason to over-engineer.

## 12. Visual Design Explanation

### Overall Direction
Momentum should feel like a premium personal operating system for goals. The emotional tone is confident, calm, and cinematic. The product should look like it belongs beside Apple, Linear, Arc, and modern AI-era startups, without actually including AI.

### Why Dark-First
Dark mode gives the strongest presentation impact:
- Gradients feel luminous.
- Glass cards look richer.
- Charts pop more clearly.
- The product feels more premium on a projector.

### Why Glassmorphism
Glassmorphism supports the Momentum metaphor: direction, atmosphere, depth, and light. Use it selectively for nav, hero preview, dashboard cards, and milestone cards.

### Why Large Typography
The landing page needs immediate confidence. Large type makes the concept feel valuable and modern.

### Why Fake Analytics
The app is presentation-focused and frontend-only. Fake local analytics create the feeling of a complete product without backend complexity.

### Why The Future Vision Page Matters
This page differentiates Momentum from a normal dashboard. It turns goals into a visual journey, which is the emotional hook of the product.

## 13. Exact Implementation Plan

### Phase 1: Project Setup, 30-45 Minutes
1. Create Vite React app.
2. Install Tailwind CSS.
3. Add Lucide React icons.
4. Optional: add Framer Motion and Recharts.
5. Create global CSS tokens for light/dark themes.
6. Set up routes.

### Phase 2: Design System, 60-90 Minutes
1. Build `Button`, `Card`, `Badge`, `Input`, `Tabs`, and `ThemeToggle`.
2. Add glass card styles.
3. Add gradient background utility.
4. Add card hover and focus states.
5. Add responsive container rules.

### Phase 3: Landing Page, 90-120 Minutes
1. Build animated gradient hero.
2. Add premium top nav.
3. Build hero copy and CTA group.
4. Build floating dashboard preview.
5. Add feature cards, how-it-works, and final CTA.
6. Verify first viewport is presentation-quality.

### Phase 4: Goal Setup, 60-90 Minutes
1. Build setup form.
2. Add category cards and priority segmented control.
3. Add live preview card.
4. Save goal to localStorage.
5. Navigate to Dashboard on submit.

### Phase 5: Dashboard, 120-150 Minutes
1. Build dashboard shell.
2. Add progress ring.
3. Add productivity score card.
4. Add habit streak cards.
5. Add timeline cards.
6. Add weekly overview chart.
7. Add entry animations.

### Phase 6: Future Vision, 90 Minutes
1. Build horizon tabs.
2. Build 30/90/1-year projection cards.
3. Build animated timeline path.
4. Add milestone cards.
5. Ensure this page feels visually distinctive.

### Phase 7: Insights, 90 Minutes
1. Build KPI grid.
2. Build chart cards using Recharts or CSS mock charts.
3. Add fake insights.
4. Add responsive chart behavior.

### Phase 8: Polish And QA, 90-120 Minutes
1. Test mobile at 390px width.
2. Test tablet at 768px width.
3. Test desktop at 1440px width.
4. Tune spacing and card alignment.
5. Verify dark mode and light mode.
6. Verify hover/focus states.
7. Add reduced motion support.
8. Remove any unfinished placeholder copy.

## Acceptance Criteria

### Product
- User can understand Momentum from the landing page.
- User can create or demo a goal.
- Dashboard shows convincing progress.
- Future Vision page shows 30-day, 90-day, and 1-year projections.
- Insights page shows premium fake analytics.

### Technical
- No API calls.
- No backend.
- No authentication.
- No payments.
- Local data only.
- Works on desktop and mobile.
- Can be built and demoed in one day.

### Visual
- Hero looks premium in first viewport.
- App uses dark mode elegantly.
- Cards, charts, and controls look intentional.
- Motion is subtle and smooth.
- Mobile layout is polished.
- The overall product feels like a million-dollar startup prototype.

## Build Priority If Time Is Tight
1. Landing Page hero and product preview
2. Dashboard
3. Future Vision
4. Goal Setup
5. Insights
6. Light mode
7. Extra empty/loading states

The landing page, dashboard, and Future Vision page carry the presentation. If time gets tight, make those three excellent before expanding secondary polish.
