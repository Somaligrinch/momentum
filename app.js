const STORAGE_GOAL = "momentum.goal";
const STORAGE_APP = "momentum.workspace";
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

const demoTasks = [
  { id: "task_1", title: "Define the final portfolio story", done: true, weight: 18 },
  { id: "task_2", title: "Write two polished case studies", done: true, weight: 22 },
  { id: "task_3", title: "Design the homepage and project grid", done: true, weight: 18 },
  { id: "task_4", title: "Publish first public version", done: false, weight: 24 },
  { id: "task_5", title: "Ask three people for feedback", done: false, weight: 10 },
  { id: "task_6", title: "Record a short walkthrough", done: false, weight: 8 },
];

const demoMilestones = [
  { id: "m1", horizon: "30 days", title: "12 focused sessions", done: true },
  { id: "m2", horizon: "30 days", title: "First public draft", done: false },
  { id: "m3", horizon: "30 days", title: "Weekly review rhythm", done: true },
  { id: "m4", horizon: "90 days", title: "Portfolio polished", done: false },
  { id: "m5", horizon: "90 days", title: "Case studies complete", done: false },
  { id: "m6", horizon: "90 days", title: "Feedback loop active", done: true },
  { id: "m7", horizon: "1 year", title: "Major goal achieved", done: false },
  { id: "m8", horizon: "1 year", title: "Stronger creative identity", done: false },
  { id: "m9", horizon: "1 year", title: "Repeatable system built", done: true },
];

const demoSessions = [
  { day: "Mon", minutes: 45, completed: 2 },
  { day: "Tue", minutes: 70, completed: 3 },
  { day: "Wed", minutes: 80, completed: 4 },
  { day: "Thu", minutes: 55, completed: 2 },
  { day: "Fri", minutes: 90, completed: 4 },
  { day: "Sat", minutes: 35, completed: 1 },
  { day: "Sun", minutes: 65, completed: 3 },
];

const habitStreaks = [
  { id: "h1", title: "Morning focus", streak: 9, completion: 82, color: "#8B5CF6", doneToday: true },
  { id: "h2", title: "Deep work", streak: 5, completion: 74, color: "#22D3EE", doneToday: false },
  { id: "h3", title: "Evening review", streak: 12, completion: 91, color: "#34D399", doneToday: true },
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

const initialWorkspace = loadAppData();

let state = {
  route: getRoute(),
  goal: initialWorkspace.goal,
  app: initialWorkspace,
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

function loadAppData() {
  try {
    const saved = localStorage.getItem(STORAGE_APP);
    if (saved) return normalizeAppData(JSON.parse(saved));
  } catch {
    // Fall through to a healthy demo workspace.
  }

  return normalizeAppData({
    goal: loadGoal(),
    tasks: demoTasks,
    habits: habitStreaks,
    sessions: demoSessions,
    milestones: demoMilestones,
    lastUpdated: new Date().toISOString(),
  });
}

function normalizeAppData(data) {
  const goal = { ...demoGoal, ...(data.goal || {}) };
  const tasks = Array.isArray(data.tasks) && data.tasks.length ? data.tasks : demoTasks;
  const habits = Array.isArray(data.habits) && data.habits.length ? data.habits : habitStreaks;
  const sessions = Array.isArray(data.sessions) && data.sessions.length ? data.sessions : demoSessions;
  const milestones = Array.isArray(data.milestones) && data.milestones.length ? data.milestones : demoMilestones;
  return { goal, tasks, habits, sessions, milestones, lastUpdated: data.lastUpdated || new Date().toISOString() };
}

function saveAppData(nextApp) {
  state.app = normalizeAppData({ ...nextApp, lastUpdated: new Date().toISOString() });
  state.goal = state.app.goal;
  localStorage.setItem(STORAGE_APP, JSON.stringify(state.app));
  localStorage.setItem(STORAGE_GOAL, JSON.stringify(state.goal));
}

function saveGoal(goal) {
  const workspace = createWorkspaceForGoal(goal);
  saveAppData(workspace);
}

function createWorkspaceForGoal(goal) {
  const cleanedGoal = { ...demoGoal, ...goal, progress: 0, createdAt: new Date().toISOString().slice(0, 10) };
  return {
    goal: cleanedGoal,
    tasks: [
      { id: cryptoId("task"), title: `Define what "${cleanedGoal.title}" means when complete`, done: false, weight: 18 },
      { id: cryptoId("task"), title: "Create the first visible version", done: false, weight: 24 },
      { id: cryptoId("task"), title: "Schedule three focused work sessions", done: false, weight: 16 },
      { id: cryptoId("task"), title: "Review progress and remove one blocker", done: false, weight: 18 },
      { id: cryptoId("task"), title: "Share progress with someone for feedback", done: false, weight: 14 },
      { id: cryptoId("task"), title: "Package the final result", done: false, weight: 10 },
    ],
    habits: habitStreaks.map((habit) => ({ ...habit, doneToday: false, streak: Math.max(1, habit.streak - 4) })),
    sessions: demoSessions.map((session, index) => index === 6 ? { ...session, minutes: 0, completed: 0 } : session),
    milestones: demoMilestones.map((milestone) => ({ ...milestone, done: false })),
  };
}

function cryptoId(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
}

function getDerived(app = state.app) {
  const totalWeight = app.tasks.reduce((sum, task) => sum + Number(task.weight || 1), 0) || 1;
  const completedWeight = app.tasks.filter((task) => task.done).reduce((sum, task) => sum + Number(task.weight || 1), 0);
  const progress = Math.round((completedWeight / totalWeight) * 100);
  const completedTasks = app.tasks.filter((task) => task.done).length;
  const habitCompletion = Math.round((app.habits.filter((habit) => habit.doneToday).length / Math.max(1, app.habits.length)) * 100);
  const activeStreak = Math.max(...app.habits.map((habit) => habit.streak), 0);
  const focusHours = app.sessions.reduce((sum, session) => sum + session.minutes, 0) / 60;
  const weeklyProgress = Math.round(app.sessions.reduce((sum, session) => sum + Math.min(100, session.minutes), 0) / Math.max(1, app.sessions.length));
  const milestoneRate = Math.round((app.milestones.filter((milestone) => milestone.done).length / Math.max(1, app.milestones.length)) * 100);
  const productivityScore = clamp(Math.round(progress * 0.46 + habitCompletion * 0.24 + weeklyProgress * 0.18 + milestoneRate * 0.12), 0, 100);
  const nextTask = app.tasks.find((task) => !task.done);
  const nextMilestone = app.milestones.find((milestone) => !milestone.done);
  return {
    progress,
    completedTasks,
    totalTasks: app.tasks.length,
    habitCompletion,
    activeStreak,
    focusHours,
    weeklyProgress,
    milestoneRate,
    productivityScore,
    nextTask,
    nextMilestone,
  };
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
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
  const derived = getDerived();
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
        ${progressRing(derived.progress, "Goal progress", "large")}
        <div class="preview-metrics">
          <div><strong>${derived.productivityScore}</strong><span>Score</span></div>
          <div><strong>${derived.activeStreak}</strong><span>Streak</span></div>
          <div><strong>${derived.completedTasks}/${derived.totalTasks}</strong><span>Tasks</span></div>
        </div>
      </div>
      <div class="mini-horizons">
        <span>30d</span><span>90d</span><span>1y</span>
      </div>
      ${weeklyBars(getWeeklyBars())}
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
  const derived = getDerived();
  const weekly = getWeeklyBars();
  const trend = getMomentumTrend();
  return `
    <section class="page-hero">
      <div>
        <p class="eyebrow">Dashboard</p>
        <h1>${escapeHtml(goal.title)}</h1>
        <p>${goal.category} goal due ${formatDate(goal.targetDate)}. Complete tasks, log focus, and check habits to move the numbers.</p>
      </div>
      <button class="button button-ghost nav-link" data-route="/setup">Edit goal</button>
    </section>
    <section class="dashboard-grid">
      <article class="glass-card progress-card span-5">
        <div class="card-head">
          <div><p class="eyebrow">Main progress</p><h2>${derived.progress}% complete</h2></div>
          <span class="status-pill">${goal.priority} priority</span>
        </div>
        <div class="progress-layout">
          ${progressRing(derived.progress, "Goal completion", "large")}
          <div class="progress-copy">
            <p>${derived.nextTask ? `Next up: ${escapeHtml(derived.nextTask.title)}.` : "Every roadmap task is complete. You can reset the demo or keep logging focus."}</p>
            <div class="mini-stat-row">
              ${miniStat(`${derived.completedTasks}/${derived.totalTasks}`, "Tasks done")}
              ${miniStat(`${daysUntil(goal.targetDate)}d`, "Days left")}
            </div>
          </div>
        </div>
      </article>
      <article class="glass-card score-card span-3">
        <p class="eyebrow">Productivity score</p>
        <strong class="metric count-up" data-count="${derived.productivityScore}">${derived.productivityScore}</strong>
        <div class="sparkline" aria-hidden="true">${sparkline(trend.map((i) => i.score))}</div>
        <p class="muted">${scoreNarrative(derived.productivityScore)}</p>
      </article>
      <article class="glass-card streak-card span-4">
        <div class="card-head"><div><p class="eyebrow">Habit streaks</p><h2>${derived.activeStreak} day rhythm</h2></div></div>
        <div class="streak-list">
          ${state.app.habits.map((habit) => habitRow(habit)).join("")}
        </div>
      </article>
      <article class="glass-card action-card span-5">
        <div class="card-head">
          <div><p class="eyebrow">Today</p><h2>Make momentum move</h2></div>
        </div>
        <div class="action-stack">
          <button class="button button-primary" data-add-session>Log 25 minute focus session</button>
          <button class="button button-ghost" data-complete-next ${derived.nextTask ? "" : "disabled"}>${derived.nextTask ? "Complete next roadmap task" : "All roadmap tasks complete"}</button>
          <form class="quick-task-form" id="quick-task-form">
            <input name="task" type="text" placeholder="Add a new roadmap task" aria-label="New roadmap task" />
            <button class="button button-ghost" type="submit">Add</button>
          </form>
          <button class="button button-text" data-reset-demo>Reset demo data</button>
        </div>
      </article>
      <article class="glass-card span-7">
        <div class="card-head"><div><p class="eyebrow">Timeline</p><h2>Momentum roadmap</h2></div></div>
        <div class="task-list">
          ${state.app.tasks.map((task) => taskCard(task)).join("")}
        </div>
      </article>
      <article class="glass-card span-5">
        <div class="card-head"><div><p class="eyebrow">Weekly overview</p><h2>${derived.weeklyProgress}% this week</h2></div></div>
        ${weeklyBars(weekly)}
        <div class="mini-stat-row">
          ${miniStat(`${derived.focusHours.toFixed(1)}h`, "Focus time")}
          ${miniStat(`${state.app.sessions.reduce((sum, session) => sum + session.completed, 0)}`, "Sessions")}
        </div>
      </article>
      <article class="glass-card span-12 momentum-notes">
        <div>
          <p class="eyebrow">Live local workspace</p>
          <h2>Every chart and projection now responds to your actions.</h2>
        </div>
        <button class="button button-primary nav-link" data-route="/future">See future vision</button>
      </article>
    </section>
  `;
}

function renderFuturePage() {
  const derived = getDerived();
  const projections = getFutureVision();
  const selected = projections.find((item) => item.horizon === state.selectedHorizon) || projections[0];
  return `
    <section class="page-hero future-hero">
      <div>
        <p class="eyebrow">Future Vision</p>
        <h1>Your future path</h1>
        <p>Projection cards make consistency feel tangible across 30 days, 90 days, and one year.</p>
      </div>
      <div class="horizon-tabs">
        ${projections.map((item) => `
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
          ${projections.map((item) => `
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
        <p>At your current ${derived.productivityScore} score pace, this is the cleanest projected outcome.</p>
      </article>
      <div class="milestone-grid">
        ${selected.milestones.map((milestone, index) => `
          <article class="glass-card milestone-card">
            <span class="milestone-index">0${index + 1}</span>
            <h3>${escapeHtml(milestone.title)}</h3>
            <p>${milestone.done ? "Completed and already strengthening the projection." : "Not complete yet. Toggle it when this checkpoint becomes real."}</p>
            <button class="check-button ${milestone.done ? "is-done" : ""}" data-toggle-milestone="${milestone.id}">
              ${milestone.done ? "Completed" : "Mark complete"}
            </button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderInsightsPage() {
  const derived = getDerived();
  const trend = getMomentumTrend();
  const weekly = getWeeklyBars();
  const categories = getCategoryBreakdown();
  return `
    <section class="page-hero">
      <div>
        <p class="eyebrow">Insights</p>
        <h1>Analytics from your local momentum system.</h1>
        <p>No APIs and no backend. These charts are derived from your tasks, habits, sessions, and milestones.</p>
      </div>
      <span class="status-pill">Last 8 weeks</span>
    </section>
    <section class="insights-grid">
      ${metricCard("Momentum score", `${derived.productivityScore}`, scoreDelta(derived.productivityScore), "span-3")}
      ${metricCard("Completion rate", `${derived.progress}%`, `${derived.completedTasks}/${derived.totalTasks} tasks`, "span-3")}
      ${metricCard("Active streak", `${derived.activeStreak}d`, `${derived.habitCompletion}% today`, "span-3")}
      ${metricCard("Weekly focus", `${derived.focusHours.toFixed(1)}h`, `${state.app.sessions.reduce((sum, session) => sum + session.completed, 0)} sessions`, "span-3")}
      <article class="glass-card chart-card span-8">
        <div class="card-head"><div><p class="eyebrow">Trend</p><h2>Momentum score over time</h2></div></div>
        <div class="line-chart" aria-label="Momentum trend chart">
          ${lineChart(trend)}
        </div>
      </article>
      <article class="glass-card chart-card span-4">
        <div class="card-head"><div><p class="eyebrow">Allocation</p><h2>Category focus</h2></div></div>
        ${donutChart(categories)}
      </article>
      <article class="glass-card chart-card span-6">
        <div class="card-head"><div><p class="eyebrow">Sessions</p><h2>Completed this week</h2></div></div>
        ${weeklyBars(weekly)}
      </article>
      <article class="glass-card chart-card span-6">
        <div class="card-head"><div><p class="eyebrow">Live insights</p><h2>Presentation-ready takeaways</h2></div></div>
        <div class="insight-list">
          ${getInsightCopy(derived).map((copy) => `<p>${copy}</p>`).join("")}
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

function taskCard(task) {
  return `
    <article class="task-card ${task.done ? "is-done" : ""}">
      <button class="task-check" data-toggle-task="${task.id}" aria-label="${task.done ? "Mark incomplete" : "Mark complete"}">
        <span></span>
      </button>
      <div>
        <h3>${escapeHtml(task.title)}</h3>
        <p>${task.weight}% impact on the goal roadmap</p>
      </div>
      <strong>${task.done ? "Done" : "Open"}</strong>
    </article>
  `;
}

function habitRow(habit) {
  return `
    <div class="habit-row ${habit.doneToday ? "is-done" : ""}" style="--accent:${habit.color}">
      <button class="habit-toggle" data-toggle-habit="${habit.id}" aria-label="Toggle ${escapeHtml(habit.title)}"></button>
      <div><strong>${habit.title}</strong><span>${habit.streak} day streak - ${habit.doneToday ? "done today" : "due today"}</span></div>
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

function getWeeklyBars() {
  const maxMinutes = Math.max(90, ...state.app.sessions.map((session) => session.minutes));
  return state.app.sessions.map((session) => ({
    day: session.day,
    value: clamp(Math.round((session.minutes / maxMinutes) * 100), 8, 100),
  }));
}

function getMomentumTrend() {
  const derived = getDerived();
  const start = clamp(derived.productivityScore - 24, 12, 86);
  return momentumTrend.map((item, index) => ({
    week: item.week,
    score: clamp(Math.round(start + ((derived.productivityScore - start) * index) / 7 + (index % 2 === 0 ? 0 : 3)), 12, 100),
  }));
}

function getFutureVision() {
  const derived = getDerived();
  return futureVision.map((item, index) => {
    const horizonMilestones = state.app.milestones.filter((milestone) => milestone.horizon === item.horizon);
    const completedBoost = horizonMilestones.filter((milestone) => milestone.done).length * 4;
    const timeBoost = [10, 22, 34][index];
    return {
      ...item,
      projectedProgress: clamp(derived.progress + timeBoost + completedBoost, derived.progress, 100),
      milestones: horizonMilestones,
    };
  });
}

function getCategoryBreakdown() {
  const completed = state.app.tasks.filter((task) => task.done).length;
  const open = state.app.tasks.length - completed;
  const habitsDone = state.app.habits.filter((habit) => habit.doneToday).length;
  const total = Math.max(1, completed + open + habitsDone + 3);
  return [
    { label: "Completed", value: Math.round((completed / total) * 100), color: "#8B5CF6" },
    { label: "Open tasks", value: Math.round((open / total) * 100), color: "#22D3EE" },
    { label: "Habits", value: Math.round((habitsDone / total) * 100), color: "#34D399" },
    { label: "Milestones", value: Math.max(8, 100 - Math.round(((completed + open + habitsDone) / total) * 100)), color: "#FBBF24" },
  ];
}

function getInsightCopy(derived) {
  return [
    `${derived.nextTask ? `Your next highest-leverage move is "${escapeHtml(derived.nextTask.title)}".` : "Your roadmap tasks are complete. Keep focus sessions moving to maintain the score."}`,
    `Today habits are ${derived.habitCompletion}% complete, which is worth almost a quarter of the momentum score.`,
    `At the current pace, the next visible milestone is roughly ${Math.max(3, Math.round(daysUntil(state.goal.targetDate) * (1 - derived.progress / 100)))} days away.`,
  ];
}

function scoreNarrative(score) {
  if (score >= 85) return "Excellent pace. The system is carrying the goal now.";
  if (score >= 70) return "Strong pace. One more task or focus session will lift the trend.";
  if (score >= 45) return "Building pace. Complete the next task to make the path visible.";
  return "Early pace. Log a session and complete one task to start the climb.";
}

function scoreDelta(score) {
  const delta = score - getMomentumTrend()[0].score;
  return `${delta >= 0 ? "+" : ""}${delta}%`;
}

function daysUntil(dateString) {
  const today = new Date();
  const target = new Date(`${dateString}T12:00:00`);
  const diff = target.getTime() - today.getTime();
  return Math.max(0, Math.ceil(diff / 86400000));
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
  wireWorkspaceActions();

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

function wireWorkspaceActions() {
  document.querySelectorAll("[data-toggle-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleTask;
      const tasks = state.app.tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task);
      saveAppData({ ...state.app, tasks, goal: { ...state.goal, progress: getDerived({ ...state.app, tasks }).progress } });
      showToast(tasks.find((task) => task.id === id)?.done ? "Task completed. Progress updated." : "Task reopened.");
      render();
    });
  });

  document.querySelectorAll("[data-toggle-habit]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleHabit;
      const habits = state.app.habits.map((habit) => {
        if (habit.id !== id) return habit;
        const doneToday = !habit.doneToday;
        return {
          ...habit,
          doneToday,
          streak: Math.max(0, habit.streak + (doneToday ? 1 : -1)),
          completion: clamp(habit.completion + (doneToday ? 3 : -3), 0, 100),
        };
      });
      saveAppData({ ...state.app, habits });
      showToast("Habit rhythm updated.");
      render();
    });
  });

  document.querySelectorAll("[data-toggle-milestone]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleMilestone;
      const milestones = state.app.milestones.map((milestone) => milestone.id === id ? { ...milestone, done: !milestone.done } : milestone);
      saveAppData({ ...state.app, milestones });
      showToast("Milestone updated.");
      render();
    });
  });

  document.querySelectorAll("[data-add-session]").forEach((button) => {
    button.addEventListener("click", () => {
      const sessions = state.app.sessions.map((session, index) => (
        index === state.app.sessions.length - 1
          ? { ...session, minutes: session.minutes + 25, completed: session.completed + 1 }
          : session
      ));
      saveAppData({ ...state.app, sessions });
      showToast("25 minute focus session logged.");
      render();
    });
  });

  document.querySelectorAll("[data-complete-next]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextTask = state.app.tasks.find((task) => !task.done);
      if (!nextTask) return;
      const tasks = state.app.tasks.map((task) => task.id === nextTask.id ? { ...task, done: true } : task);
      saveAppData({ ...state.app, tasks, goal: { ...state.goal, progress: getDerived({ ...state.app, tasks }).progress } });
      showToast("Next roadmap task completed.");
      render();
    });
  });

  document.querySelectorAll("[data-reset-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.removeItem(STORAGE_APP);
      localStorage.removeItem(STORAGE_GOAL);
      const fresh = loadAppData();
      state.app = fresh;
      state.goal = fresh.goal;
      showToast("Demo workspace reset.");
      render();
    });
  });

  const quickTaskForm = document.getElementById("quick-task-form");
  if (quickTaskForm) {
    quickTaskForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = quickTaskForm.elements.task;
      const title = input.value.trim();
      if (!title) return;
      const tasks = [...state.app.tasks, { id: cryptoId("task"), title, done: false, weight: 10 }];
      saveAppData({ ...state.app, tasks, goal: { ...state.goal, progress: getDerived({ ...state.app, tasks }).progress } });
      showToast("Roadmap task added.");
      render();
    });
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
