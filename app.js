const STORAGE_GOAL = "momentum.goal";
const STORAGE_THEME = "momentum.theme";

const demoGoal = {
  id: "goal_001",
  title: "Launch my portfolio website",
  targetDate: "2026-08-15",
  priority: "High",
  category: "Creative",
  progress: 68,
  createdAt: "2026-05-19",
};

const dashboardMetrics = {
  productivityScore: 84,
  goalCompletion: 68,
  weeklyProgress: 76,
  activeStreak: 12,
  focusHours: 14.5,
  tasksCompleted: 23,
};

const habitStreaks = [
  { id: "h1", title: "Morning focus", streak: 9, completion: 82, color: "#8B5CF6" },
  { id: "h2", title: "Deep work", streak: 5, completion: 74, color: "#22D3EE" },
  { id: "h3", title: "Evening review", streak: 12, completion: 91, color: "#34D399" },
];

const weeklyOverview = [
  { day: "Mon", value: 62 },
  { day: "Tue", value: 78 },
  { day: "Wed", value: 84 },
  { day: "Thu", value: 70 },
  { day: "Fri", value: 92 },
  { day: "Sat", value: 58 },
  { day: "Sun", value: 76 },
];

const timelineCards = [
  {
    id: "t1",
    title: "Foundation",
    period: "Week 1",
    status: "Complete",
    description: "Defined the goal, mapped first milestones, and started daily sessions.",
  },
  {
    id: "t2",
    title: "Consistency",
    period: "Week 2",
    status: "Current",
    description: "Build repeatable momentum with focused blocks and weekly review.",
  },
  {
    id: "t3",
    title: "Acceleration",
    period: "Week 3",
    status: "Next",
    description: "Increase output, refine the plan, and remove friction.",
  },
  {
    id: "t4",
    title: "Review",
    period: "Week 4",
    status: "Soon",
    description: "Package progress, review the signal, and choose the next push.",
  },
];

const futureVision = [
  {
    horizon: "30 days",
    theme: "Visible consistency",
    projectedProgress: 78,
    label: "Foundation",
    milestones: ["12 focused sessions", "First public draft", "Weekly review rhythm"],
  },
  {
    horizon: "90 days",
    theme: "Measurable momentum",
    projectedProgress: 92,
    label: "Momentum",
    milestones: ["Portfolio polished", "Case studies complete", "Feedback loop active"],
  },
  {
    horizon: "1 year",
    theme: "A new baseline",
    projectedProgress: 100,
    label: "Transformation",
    milestones: ["Major goal achieved", "Stronger creative identity", "Repeatable system built"],
  },
];

const momentumTrend = [
  { week: "W1", score: 54 },
  { week: "W2", score: 61 },
  { week: "W3", score: 66 },
  { week: "W4", score: 72 },
  { week: "W5", score: 75 },
  { week: "W6", score: 81 },
  { week: "W7", score: 79 },
  { week: "W8", score: 84 },
];

const categoryBreakdown = [
  { label: "Creative", value: 42, color: "#8B5CF6" },
  { label: "Learning", value: 28, color: "#22D3EE" },
  { label: "Health", value: 18, color: "#34D399" },
  { label: "Personal", value: 12, color: "#FBBF24" },
];

const categories = [
  { name: "Career", detail: "Direction and opportunity" },
  { name: "Health", detail: "Energy and consistency" },
  { name: "Learning", detail: "Skill and study" },
  { name: "Creative", detail: "Build and publish" },
  { name: "Finance", detail: "Money and planning" },
  { name: "Personal", detail: "Life and identity" },
];

const routeTitles = {
  "/": "Momentum",
  "/setup": "Set goal",
  "/dashboard": "Dashboard",
  "/future": "Future Vision",
  "/insights": "Insights",
};

let state = {
  route: getRoute(),
  goal: loadGoal(),
  theme: localStorage.getItem(STORAGE_THEME) || "dark",
  selectedHorizon: "30 days",
  setupDraft: null,
  loading: true,
};

document.documentElement.dataset.theme = state.theme;

window.addEventListener("hashchange", () => {
  state.route = getRoute();
  render();
});

document.addEventListener("DOMContentLoaded", () => {
  render();
  setTimeout(() => {
    state.loading = false;
    render();
  }, 420);
});

function loadGoal() {
  try {
    const saved = localStorage.getItem(STORAGE_GOAL);
    return saved ? JSON.parse(saved) : demoGoal;
  } catch {
    return demoGoal;
  }
}

function saveGoal(goal) {
  localStorage.setItem(STORAGE_GOAL, JSON.stringify(goal));
  state.goal = goal;
}

function getRoute() {
  const hashRoute = window.location.hash.replace("#", "");
  return hashRoute && routeTitles[hashRoute] ? hashRoute : "/";
}

function navigate(path) {
  window.location.hash = path;
  state.route = path;
  window.scrollTo({ top: 0, behavior: "smooth" });
  render();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem(STORAGE_THEME, state.theme);
  document.documentElement.dataset.theme = state.theme;
  render();
}

function render() {
  document.title = `${routeTitles[state.route] || "Momentum"} | Momentum`;
  const app = document.getElementById("app");
  app.innerHTML = state.route === "/" ? marketingShell(renderLanding()) : appShell(renderRoute());
  wireNavigation();
  wireInteractions();
}

function renderRoute() {
  if (state.loading) return renderSkeletonPage();
  if (state.route === "/setup") return renderSetupPage();
  if (state.route === "/future") return renderFuturePage();
  if (state.route === "/insights") return renderInsightsPage();
  return renderDashboardPage();
}

function marketingShell(content) {
  return `
    ${renderNav(false)}
    <main>${content}</main>
  `;
}

function appShell(content) {
  return `
    ${renderNav(true)}
    <main class="app-main">${content}</main>
  `;
}

function renderNav(isApp) {
  const links = [
    ["/", "Home"],
    ["/setup", "Setup"],
    ["/dashboard", "Dashboard"],
    ["/future", "Vision"],
    ["/insights", "Stats"],
  ];

  return `
    <header class="top-nav ${isApp ? "top-nav-app" : ""}">
      <button class="brand nav-link" data-route="/" aria-label="Go to home">
        <span class="brand-mark"></span>
        <span>Momentum</span>
      </button>
      <nav class="nav-links" aria-label="Primary navigation">
        ${links.map(([path, label]) => `
          <button class="nav-link ${state.route === path ? "is-active" : ""}" data-route="${path}">${label}</button>
        `).join("")}
      </nav>
      <div class="nav-actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Toggle theme">
          <span>${state.theme === "dark" ? "Light" : "Dark"}</span>
        </button>
        <button class="button button-small button-primary nav-link" data-route="/setup">Start</button>
      </div>
    </header>
  `;
}

function renderLanding() {
  return `
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">Goal clarity for people building momentum</p>
        <h1>Turn your next goal into a visible path forward.</h1>
        <p class="hero-lede">Momentum helps you set a direction, track progress, and visualize the future you are building.</p>
        <div class="hero-actions">
          <button class="button button-primary nav-link" data-route="/setup">Start building momentum</button>
          <button class="button button-ghost nav-link" data-route="/dashboard">View demo dashboard</button>
        </div>
      </div>
      <div class="product-preview reveal" data-parallax>
        ${renderPreviewCard()}
      </div>
    </section>
    <section id="preview" class="section-shell product-section">
      <div class="section-heading">
        <p class="eyebrow">Product preview</p>
        <h2>A visual operating system for one important goal.</h2>
      </div>
      <div class="feature-grid">
        ${featureCard("Visualize the path", "See your goal as a roadmap, not a vague intention.", "Path")}
        ${featureCard("Build daily momentum", "Small sessions, streaks, and reviews make progress visible.", "Streak")}
        ${featureCard("See future milestones", "Preview 30 days, 90 days, and one year of forward motion.", "Future")}
      </div>
    </section>
    <section class="section-shell split-section">
      <div>
        <p class="eyebrow">How it works</p>
        <h2>Simple enough to demo in a minute. Polished enough to feel real.</h2>
      </div>
      <div class="steps">
        ${step("01", "Set one goal", "Choose the target, priority, and category that matter right now.")}
        ${step("02", "Track momentum", "Watch progress, streaks, and weekly focus become visible.")}
        ${step("03", "See the future path", "Use projection cards to make consistency feel concrete.")}
      </div>
    </section>
    <section class="section-shell metric-band">
      ${metricPill("84", "Momentum score")}
      ${metricPill("76%", "Weekly progress")}
      ${metricPill("12 days", "Active streak")}
      ${metricPill("14.5h", "Focus time")}
    </section>
    <section class="section-shell final-cta">
      <p class="eyebrow">Ready for the presentation</p>
      <h2>Your direction gets clearer when progress becomes visible.</h2>
      <button class="button button-primary nav-link" data-route="/setup">Build my roadmap</button>
    </section>
  `;
}

function renderPreviewCard() {
  return `
    <article class="glass-card preview-card">
      <div class="preview-top">
        <div>
          <p class="eyebrow">Live roadmap</p>
          <h3>${state.goal.title}</h3>
        </div>
        <span class="status-pill">On track</span>
      </div>
      <div class="preview-body">
        ${progressRing(68, "Goal progress", "large")}
        <div class="preview-metrics">
          <div><strong>84</strong><span>Score</span></div>
          <div><strong>12</strong><span>Streak</span></div>
          <div><strong>21d</strong><span>Next milestone</span></div>
        </div>
      </div>
      <div class="mini-horizons">
        <span>30d</span><span>90d</span><span>1y</span>
      </div>
      ${weeklyBars(weeklyOverview)}
    </article>
  `;
}

function renderSetupPage() {
  const draft = state.setupDraft || state.goal;
  return `
    <section class="page-hero setup-hero">
      <div>
        <p class="eyebrow">Goal setup</p>
        <h1>Give your momentum a clear direction.</h1>
        <p>Set one goal, then let the dashboard turn it into a visual roadmap for your presentation.</p>
      </div>
      <span class="status-pill">Local demo data only</span>
    </section>
    <section class="setup-grid">
      <form class="glass-card setup-form" id="goal-form">
        <div class="form-row">
          <label for="goal-title">Goal title</label>
          <input id="goal-title" name="title" type="text" value="${escapeHtml(draft.title)}" placeholder="Launch my portfolio website" required />
        </div>
        <div class="form-row">
          <label for="target-date">Target date</label>
          <input id="target-date" name="targetDate" type="date" value="${draft.targetDate}" required />
        </div>
        <div class="form-row">
          <label>Priority level</label>
          <div class="segmented" role="radiogroup" aria-label="Priority level">
            ${["Low", "Medium", "High"].map((priority) => `
              <button type="button" class="segment ${draft.priority === priority ? "is-selected" : ""}" data-priority="${priority}">${priority}</button>
            `).join("")}
          </div>
        </div>
        <div class="form-row">
          <label>Category</label>
          <div class="category-grid">
            ${categories.map((category) => `
              <button type="button" class="category-card ${draft.category === category.name ? "is-selected" : ""}" data-category="${category.name}">
                <span>${category.name}</span>
                <small>${category.detail}</small>
              </button>
            `).join("")}
          </div>
        </div>
        <button class="button button-primary form-submit" type="submit">Build my roadmap</button>
      </form>
      <aside class="glass-card goal-preview-card">
        <p class="eyebrow">Live preview</p>
        <h2 id="preview-title">${escapeHtml(draft.title)}</h2>
        <div class="preview-meta">
          <span id="preview-category">${draft.category}</span>
          <span id="preview-priority">${draft.priority} priority</span>
        </div>
        ${progressRing(draft.progress, "Projected progress", "large")}
        <p class="muted">Target date: <strong id="preview-date">${formatDate(draft.targetDate)}</strong></p>
      </aside>
    </section>
  `;
}

function renderDashboardPage() {
  const goal = state.goal;
  return `
    <section class="page-hero">
      <div>
        <p class="eyebrow">Dashboard</p>
        <h1>${escapeHtml(goal.title)}</h1>
        <p>${goal.category} goal due ${formatDate(goal.targetDate)}. The roadmap is active and moving.</p>
      </div>
      <button class="button button-ghost nav-link" data-route="/setup">Edit goal</button>
    </section>
    <section class="dashboard-grid">
      <article class="glass-card progress-card span-5">
        <div class="card-head">
          <div><p class="eyebrow">Main progress</p><h2>${goal.progress}% complete</h2></div>
          <span class="status-pill">${goal.priority} priority</span>
        </div>
        <div class="progress-layout">
          ${progressRing(goal.progress, "Goal completion", "large")}
          <div class="progress-copy">
            <p>Your visible path is ahead of pace. Keep the current rhythm for another three weeks to reach the next milestone early.</p>
            <div class="mini-stat-row">
              ${miniStat("23", "Tasks done")}
              ${miniStat("21d", "Next milestone")}
            </div>
          </div>
        </div>
      </article>
      <article class="glass-card score-card span-3">
        <p class="eyebrow">Productivity score</p>
        <strong class="metric count-up" data-count="${dashboardMetrics.productivityScore}">84</strong>
        <div class="sparkline" aria-hidden="true">${sparkline(momentumTrend.map((i) => i.score))}</div>
        <p class="muted">Up 18% over the last month.</p>
      </article>
      <article class="glass-card streak-card span-4">
        <div class="card-head"><div><p class="eyebrow">Habit streaks</p><h2>${dashboardMetrics.activeStreak} day rhythm</h2></div></div>
        <div class="streak-list">
          ${habitStreaks.map((habit) => habitRow(habit)).join("")}
        </div>
      </article>
      <article class="glass-card span-7">
        <div class="card-head"><div><p class="eyebrow">Timeline</p><h2>Momentum roadmap</h2></div></div>
        <div class="timeline-list">
          ${timelineCards.map((card) => timelineCard(card)).join("")}
        </div>
      </article>
      <article class="glass-card span-5">
        <div class="card-head"><div><p class="eyebrow">Weekly overview</p><h2>${dashboardMetrics.weeklyProgress}% this week</h2></div></div>
        ${weeklyBars(weeklyOverview)}
        <div class="mini-stat-row">
          ${miniStat(`${dashboardMetrics.focusHours}h`, "Focus time")}
          ${miniStat(`${dashboardMetrics.tasksCompleted}`, "Tasks completed")}
        </div>
      </article>
      <article class="glass-card span-12 momentum-notes">
        <div>
          <p class="eyebrow">Presentation note</p>
          <h2>The app feels alive because every number has visual context.</h2>
        </div>
        <button class="button button-primary nav-link" data-route="/future">See future vision</button>
      </article>
    </section>
  `;
}

function renderFuturePage() {
  const selected = futureVision.find((item) => item.horizon === state.selectedHorizon) || futureVision[0];
  return `
    <section class="page-hero future-hero">
      <div>
        <p class="eyebrow">Future Vision</p>
        <h1>Your future path</h1>
        <p>Projection cards make consistency feel tangible across 30 days, 90 days, and one year.</p>
      </div>
      <div class="horizon-tabs">
        ${futureVision.map((item) => `
          <button class="horizon-tab ${item.horizon === selected.horizon ? "is-selected" : ""}" data-horizon="${item.horizon}">${item.horizon}</button>
        `).join("")}
      </div>
    </section>
    <section class="future-grid">
      <article class="glass-card future-path-card">
        <div class="card-head">
          <div>
            <p class="eyebrow">${selected.label}</p>
            <h2>${selected.horizon}: ${selected.theme}</h2>
          </div>
          <span class="status-pill">${selected.projectedProgress}% projected</span>
        </div>
        <div class="future-path" aria-label="Progress projection path">
          <div class="path-line"></div>
          ${futureVision.map((item) => `
            <button class="path-node ${item.horizon === selected.horizon ? "is-selected" : ""}" data-horizon="${item.horizon}">
              <span>${item.horizon}</span>
              <strong>${item.projectedProgress}%</strong>
            </button>
          `).join("")}
        </div>
      </article>
      <article class="glass-card projection-summary">
        ${progressRing(selected.projectedProgress, "Projection", "large")}
        <h2>${selected.theme}</h2>
        <p>At this pace, your goal becomes less abstract and more like a repeatable system.</p>
      </article>
      <div class="milestone-grid">
        ${selected.milestones.map((milestone, index) => `
          <article class="glass-card milestone-card">
            <span class="milestone-index">0${index + 1}</span>
            <h3>${milestone}</h3>
            <p>Designed as a concrete checkpoint that makes the future easier to present.</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderInsightsPage() {
  return `
    <section class="page-hero">
      <div>
        <p class="eyebrow">Insights</p>
        <h1>Premium analytics from local demo data.</h1>
        <p>No APIs. No backend. Just convincing visual signal for a polished presentation.</p>
      </div>
      <span class="status-pill">Last 8 weeks</span>
    </section>
    <section class="insights-grid">
      ${metricCard("Momentum score", "84", "+18%", "span-3")}
      ${metricCard("Completion rate", "76%", "+9%", "span-3")}
      ${metricCard("Active streak", "12d", "Best month", "span-3")}
      ${metricCard("Weekly focus", "14.5h", "+2.5h", "span-3")}
      <article class="glass-card chart-card span-8">
        <div class="card-head"><div><p class="eyebrow">Trend</p><h2>Momentum score over time</h2></div></div>
        <div class="line-chart" aria-label="Momentum trend chart">
          ${lineChart(momentumTrend)}
        </div>
      </article>
      <article class="glass-card chart-card span-4">
        <div class="card-head"><div><p class="eyebrow">Allocation</p><h2>Category focus</h2></div></div>
        ${donutChart(categoryBreakdown)}
      </article>
      <article class="glass-card chart-card span-6">
        <div class="card-head"><div><p class="eyebrow">Sessions</p><h2>Completed this week</h2></div></div>
        ${weeklyBars(weeklyOverview)}
      </article>
      <article class="glass-card chart-card span-6">
        <div class="card-head"><div><p class="eyebrow">Fixed insights</p><h2>Presentation-ready takeaways</h2></div></div>
        <div class="insight-list">
          <p>Your strongest progress happens mid-week.</p>
          <p>Consistency increased 18% over the last month.</p>
          <p>Your current pace reaches the next milestone in 21 days.</p>
        </div>
      </article>
    </section>
  `;
}

function renderSkeletonPage() {
  return `
    <section class="page-hero">
      <div class="skeleton skeleton-title"></div>
      <div class="skeleton skeleton-line"></div>
    </section>
    <section class="dashboard-grid">
      ${Array.from({ length: 6 }).map((_, i) => `<div class="glass-card skeleton-card span-${i === 0 ? "5" : i === 1 ? "3" : i === 2 ? "4" : "6"}"></div>`).join("")}
    </section>
  `;
}

function featureCard(title, copy, label) {
  return `
    <article class="glass-card feature-card">
      <span class="feature-icon">${label.slice(0, 1)}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function step(number, title, copy) {
  return `
    <article class="step-card">
      <span>${number}</span>
      <div><h3>${title}</h3><p>${copy}</p></div>
    </article>
  `;
}

function metricPill(value, label) {
  return `<div class="metric-pill"><strong>${value}</strong><span>${label}</span></div>`;
}

function metricCard(label, value, trend, span) {
  return `
    <article class="glass-card metric-card ${span}">
      <p class="eyebrow">${label}</p>
      <strong class="metric">${value}</strong>
      <span class="trend-badge">${trend}</span>
    </article>
  `;
}

function miniStat(value, label) {
  return `<div class="mini-stat"><strong>${value}</strong><span>${label}</span></div>`;
}

function habitRow(habit) {
  return `
    <div class="habit-row" style="--accent:${habit.color}">
      <div><strong>${habit.title}</strong><span>${habit.streak} day streak</span></div>
      <div class="tiny-progress"><span style="width:${habit.completion}%"></span></div>
    </div>
  `;
}

function timelineCard(card) {
  return `
    <article class="timeline-card ${card.status === "Current" ? "is-current" : ""}">
      <span>${card.period}</span>
      <div><h3>${card.title}</h3><p>${card.description}</p></div>
      <strong>${card.status}</strong>
    </article>
  `;
}

function progressRing(value, label, size = "") {
  return `
    <div class="progress-ring ${size}" style="--value:${value}" aria-label="${label}: ${value}%">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <circle class="ring-bg" cx="60" cy="60" r="52"></circle>
        <circle class="ring-value" cx="60" cy="60" r="52"></circle>
      </svg>
      <div><strong>${value}%</strong><span>${label}</span></div>
    </div>
  `;
}

function weeklyBars(items) {
  return `
    <div class="weekly-bars" aria-label="Weekly progress chart">
      ${items.map((item) => `
        <div class="bar-wrap">
          <span class="bar" style="height:${item.value}%"></span>
          <small>${item.day}</small>
        </div>
      `).join("")}
    </div>
  `;
}

function sparkline(values) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const points = values.map((value, index) => {
    const x = (index / (values.length - 1)) * 100;
    const y = 100 - ((value - min) / (max - min || 1)) * 80 - 10;
    return `${x},${y}`;
  }).join(" ");
  return `<svg viewBox="0 0 100 100" preserveAspectRatio="none"><polyline points="${points}"></polyline></svg>`;
}

function lineChart(items) {
  const points = sparkline(items.map((item) => item.score));
  return `
    ${points}
    <div class="chart-axis">${items.map((item) => `<span>${item.week}</span>`).join("")}</div>
  `;
}

function donutChart(items) {
  let offset = 0;
  const circles = items.map((item) => {
    const dash = `${item.value} ${100 - item.value}`;
    const circle = `<circle r="16" cx="20" cy="20" style="stroke:${item.color};stroke-dasharray:${dash};stroke-dashoffset:${-offset}"></circle>`;
    offset += item.value;
    return circle;
  }).join("");

  return `
    <div class="donut-layout">
      <svg class="donut" viewBox="0 0 40 40" aria-label="Category allocation chart">
        <circle r="16" cx="20" cy="20" class="donut-track"></circle>
        ${circles}
      </svg>
      <div class="legend">
        ${items.map((item) => `<span><i style="background:${item.color}"></i>${item.label} ${item.value}%</span>`).join("")}
      </div>
    </div>
  `;
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${dateString}T12:00:00`));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function wireNavigation() {
  document.querySelectorAll(".nav-link").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(button.dataset.route || "/");
    });
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", toggleTheme);
  });
}

function wireInteractions() {
  const form = document.getElementById("goal-form");
  if (form) wireGoalForm(form);

  document.querySelectorAll("[data-horizon]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedHorizon = button.dataset.horizon;
      render();
    });
  });

  const parallax = document.querySelector("[data-parallax]");
  if (parallax) {
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      parallax.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });
  }
}

function wireGoalForm(form) {
  let draft = { ...(state.setupDraft || state.goal) };
  const title = form.querySelector("#goal-title");
  const targetDate = form.querySelector("#target-date");
  const submit = form.querySelector(".form-submit");

  const updatePreview = () => {
    draft.title = title.value.trim();
    draft.targetDate = targetDate.value;
    state.setupDraft = { ...draft };
    submit.disabled = !draft.title || !draft.targetDate || !draft.category;
    document.getElementById("preview-title").textContent = draft.title || "Your goal title";
    document.getElementById("preview-date").textContent = draft.targetDate ? formatDate(draft.targetDate) : "Choose a date";
    document.getElementById("preview-category").textContent = draft.category;
    document.getElementById("preview-priority").textContent = `${draft.priority} priority`;
  };

  title.addEventListener("input", updatePreview);
  targetDate.addEventListener("input", updatePreview);

  form.querySelectorAll("[data-priority]").forEach((button) => {
    button.addEventListener("click", () => {
      draft.priority = button.dataset.priority;
      state.setupDraft = { ...draft };
      render();
    });
  });

  form.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      draft.category = button.dataset.category;
      state.setupDraft = { ...draft };
      render();
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    updatePreview();
    if (submit.disabled) return;
    saveGoal({
      ...demoGoal,
      ...state.goal,
      ...draft,
      title: draft.title,
      progress: state.goal.progress || demoGoal.progress,
    });
    state.setupDraft = null;
    showToast("Your goal is set.");
    navigate("/dashboard");
  });

  updatePreview();
}
