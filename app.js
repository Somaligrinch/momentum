const STORAGE_GOAL = "momentum.goal";
const STORAGE_APP = "momentum.workspace";
const STORAGE_LIBRARY = "momentum.library";
const STORAGE_ACTIVE_MODE = "momentum.activeMode";
const STORAGE_ACTIVE_DEMO = "momentum.activeDemo";
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

const demoTemplates = [
  {
    id: "demo_student",
    title: "Raise my biology grade",
    targetDate: "2026-06-18",
    priority: "High",
    category: "Learning",
    audience: "Student",
    progress: 54,
    tasks: [
      ["Organize all missing assignments", true, 14],
      ["Make a two-week study calendar", true, 16],
      ["Review cell respiration notes", false, 18],
      ["Complete practice quiz set", false, 20],
      ["Meet teacher during office hours", false, 16],
      ["Prepare final exam review sheet", false, 16],
    ],
    habits: [
      ["20 minute review", 6, 76, "#22D3EE", true],
      ["Phone-free homework block", 4, 64, "#8B5CF6", false],
      ["Pack class materials", 9, 88, "#34D399", true],
    ],
    sessions: [30, 45, 55, 25, 70, 20, 40],
  },
  {
    id: "demo_fitness",
    title: "Build a consistent gym routine",
    targetDate: "2026-08-01",
    priority: "Medium",
    category: "Health",
    audience: "Fitness",
    progress: 72,
    tasks: [
      ["Choose a realistic weekly split", true, 16],
      ["Finish first two full workouts", true, 22],
      ["Prep simple post-workout meals", true, 14],
      ["Add mobility work twice a week", false, 16],
      ["Track lifts for four weeks", false, 20],
      ["Schedule a recovery week", false, 12],
    ],
    habits: [
      ["Workout days", 11, 82, "#34D399", true],
      ["Protein with breakfast", 8, 74, "#FBBF24", true],
      ["Sleep before midnight", 3, 55, "#22D3EE", false],
    ],
    sessions: [60, 0, 50, 35, 65, 45, 20],
  },
  {
    id: "demo_creator",
    title: "Launch my portfolio website",
    targetDate: "2026-08-15",
    priority: "High",
    category: "Creative",
    audience: "Creative",
    progress: 68,
    tasks: demoTasks.map((task) => [task.title, task.done, task.weight]),
    habits: habitStreaks.map((habit) => [habit.title, habit.streak, habit.completion, habit.color, habit.doneToday]),
    sessions: demoSessions.map((session) => session.minutes),
  },
  {
    id: "demo_career",
    title: "Prepare for a summer internship",
    targetDate: "2026-07-10",
    priority: "High",
    category: "Career",
    audience: "Career",
    progress: 41,
    tasks: [
      ["Rewrite resume for internship roles", true, 18],
      ["Build a shortlist of 12 companies", false, 16],
      ["Practice intro pitch out loud", false, 12],
      ["Apply to five roles this week", false, 22],
      ["Message two alumni or mentors", false, 16],
      ["Prepare interview story bank", false, 16],
    ],
    habits: [
      ["One application action", 2, 44, "#8B5CF6", false],
      ["Read job descriptions", 5, 66, "#22D3EE", true],
      ["Practice communication", 3, 58, "#FB7185", false],
    ],
    sessions: [25, 30, 0, 55, 20, 35, 15],
  },
  {
    id: "demo_life",
    title: "Save for a first car",
    targetDate: "2026-12-20",
    priority: "Medium",
    category: "Finance",
    audience: "Money",
    progress: 36,
    tasks: [
      ["Set the savings target", true, 18],
      ["Make a weekly spending limit", true, 16],
      ["Open a separate savings space", false, 14],
      ["Add first automatic transfer", false, 18],
      ["Compare insurance estimates", false, 16],
      ["Review progress every Sunday", false, 18],
    ],
    habits: [
      ["Track spending", 7, 70, "#FBBF24", true],
      ["No impulse purchases", 4, 62, "#34D399", false],
      ["Sunday money check", 2, 48, "#22D3EE", false],
    ],
    sessions: [15, 20, 20, 0, 25, 10, 30],
  },
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
  "/setup": "Goals",
  "/dashboard": "Dashboard",
  "/future": "Future Vision",
  "/insights": "Insights",
};

const initialLibrary = loadLibrary();
const initialMode = localStorage.getItem(STORAGE_ACTIVE_MODE) === "demo" ? "demo" : "personal";
const initialDemoId = localStorage.getItem(STORAGE_ACTIVE_DEMO) || demoTemplates[0].id;
const initialDemo = createDemoWorkspace(demoTemplates.find((template) => template.id === initialDemoId) || demoTemplates[0]);
const initialWorkspace = initialMode === "demo" ? initialDemo : getActiveWorkspace(initialLibrary);

let state = {
  route: getRoute(),
  goal: initialWorkspace.goal,
  app: initialWorkspace,
  library: initialLibrary,
  activeMode: initialMode,
  demoApp: initialDemo,
  theme: localStorage.getItem(STORAGE_THEME) || "dark",
  selectedHorizon: "30 days",
  setupDraft: null,
  editingGoal: true,
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

function loadLibrary() {
  try {
    const saved = localStorage.getItem(STORAGE_LIBRARY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.workspaces) && parsed.workspaces.length) {
        const normalizedWorkspaces = parsed.workspaces.map(normalizeAppData);
        let workspaces = normalizedWorkspaces.filter((workspace) => !isLegacyDemoWorkspace(workspace));
        if (!workspaces.length) workspaces = [createStarterWorkspace()];
        const activeId = workspaces.some((workspace) => workspace.goal.id === parsed.activeId)
          ? parsed.activeId
          : workspaces[0].goal.id;
        if (workspaces.length !== normalizedWorkspaces.length) {
          localStorage.setItem(STORAGE_LIBRARY, JSON.stringify({ activeId, workspaces }));
        }
        return { activeId, workspaces };
      }
    }
  } catch {
    // Fall back to the legacy single-workspace storage.
  }

  const workspace = createStarterWorkspace();
  const library = { activeId: workspace.goal.id, workspaces: [workspace] };
  localStorage.setItem(STORAGE_LIBRARY, JSON.stringify(library));
  return library;
}

function getActiveWorkspace(library = state?.library) {
  return library.workspaces.find((workspace) => workspace.goal.id === library.activeId) || library.workspaces[0];
}

function saveLibrary(library) {
  state.library = {
    activeId: library.activeId,
    workspaces: library.workspaces.map(normalizeAppData),
  };
  state.activeMode = "personal";
  state.app = getActiveWorkspace(state.library);
  state.goal = state.app.goal;
  localStorage.setItem(STORAGE_LIBRARY, JSON.stringify(state.library));
  localStorage.setItem(STORAGE_APP, JSON.stringify(state.app));
  localStorage.setItem(STORAGE_GOAL, JSON.stringify(state.goal));
  localStorage.setItem(STORAGE_ACTIVE_MODE, "personal");
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
  const normalized = normalizeAppData({ ...nextApp, lastUpdated: new Date().toISOString() });
  if (state.activeMode === "demo") {
    state.demoApp = normalized;
    state.app = normalized;
    state.goal = normalized.goal;
    return;
  }

  const exists = state.library.workspaces.some((workspace) => workspace.goal.id === normalized.goal.id);
  const workspaces = exists
    ? state.library.workspaces.map((workspace) => workspace.goal.id === normalized.goal.id ? normalized : workspace)
    : [...state.library.workspaces, normalized];
  saveLibrary({ activeId: normalized.goal.id, workspaces });
}

function saveGoal(goal, mode = "update") {
  const workspace = createWorkspaceForGoal(goal);
  if (mode === "create") {
    saveAppData(workspace);
    return;
  }

  saveAppData({
    ...state.app,
    goal: {
      ...state.app.goal,
      ...goal,
      id: state.app.goal.id,
      progress: getDerived(state.app).progress,
    },
  });
}

function createWorkspaceForGoal(goal) {
  const cleanedGoal = { ...demoGoal, ...goal, id: goal.id || cryptoId("goal"), progress: 0, createdAt: new Date().toISOString().slice(0, 10) };
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

function createStarterWorkspace() {
  return createWorkspaceForGoal({
    id: "personal_first_goal",
    title: "My first Momentum goal",
    targetDate: defaultTargetDate(),
    priority: "Medium",
    category: "Personal",
    progress: 0,
  });
}

function isLegacyDemoWorkspace(workspace) {
  return workspace.goal.id === "goal_001" && workspace.goal.title === "Launch my portfolio website";
}

function createDemoWorkspace(template) {
  const goal = {
    ...demoGoal,
    id: template.id,
    title: template.title,
    targetDate: template.targetDate,
    priority: template.priority,
    category: template.category,
    progress: template.progress,
    createdAt: "2026-05-19",
    audience: template.audience,
    demo: true,
  };

  return normalizeAppData({
    goal,
    tasks: template.tasks.map(([title, done, weight], index) => ({
      id: `${template.id}_task_${index + 1}`,
      title,
      done,
      weight,
    })),
    habits: template.habits.map(([title, streak, completion, color, doneToday], index) => ({
      id: `${template.id}_habit_${index + 1}`,
      title,
      streak,
      completion,
      color,
      doneToday,
    })),
    sessions: template.sessions.map((minutes, index) => ({
      day: demoSessions[index].day,
      minutes,
      completed: Math.round(minutes / 25),
    })),
    milestones: createMilestonesForGoal(template),
    lastUpdated: new Date().toISOString(),
  });
}

function createMilestonesForGoal(template) {
  return [
    { id: `${template.id}_m1`, horizon: "30 days", title: `${template.audience} foundation set`, done: template.progress >= 35 },
    { id: `${template.id}_m2`, horizon: "30 days", title: "Weekly rhythm visible", done: template.progress >= 55 },
    { id: `${template.id}_m3`, horizon: "30 days", title: "First review completed", done: template.progress >= 65 },
    { id: `${template.id}_m4`, horizon: "90 days", title: "Main system running", done: template.progress >= 75 },
    { id: `${template.id}_m5`, horizon: "90 days", title: "Progress shared or measured", done: template.progress >= 85 },
    { id: `${template.id}_m6`, horizon: "90 days", title: "Next level planned", done: false },
    { id: `${template.id}_m7`, horizon: "1 year", title: "Goal achieved", done: false },
    { id: `${template.id}_m8`, horizon: "1 year", title: "Lifestyle baseline changed", done: false },
    { id: `${template.id}_m9`, horizon: "1 year", title: "Repeatable momentum system", done: template.progress >= 70 },
  ];
}

function cloneAsPersonalWorkspace(workspace) {
  const id = cryptoId("goal");
  return normalizeAppData({
    ...workspace,
    goal: {
      ...workspace.goal,
      id,
      demo: false,
      audience: undefined,
      title: workspace.goal.title,
      createdAt: new Date().toISOString().slice(0, 10),
    },
    tasks: workspace.tasks.map((task) => ({ ...task, id: cryptoId("task") })),
    habits: workspace.habits.map((habit) => ({ ...habit, id: cryptoId("habit") })),
    milestones: workspace.milestones.map((milestone) => ({ ...milestone, id: cryptoId("milestone") })),
  });
}

function savePersonalWorkspace(workspace) {
  const normalized = normalizeAppData({ ...workspace, lastUpdated: new Date().toISOString() });
  const workspaces = [...state.library.workspaces, normalized];
  saveLibrary({ activeId: normalized.goal.id, workspaces });
}

function switchToDemo(templateId) {
  const template = demoTemplates.find((item) => item.id === templateId) || demoTemplates[0];
  const demoApp = createDemoWorkspace(template);
  state.activeMode = "demo";
  state.demoApp = demoApp;
  state.app = demoApp;
  state.goal = demoApp.goal;
  localStorage.setItem(STORAGE_ACTIVE_MODE, "demo");
  localStorage.setItem(STORAGE_ACTIVE_DEMO, template.id);
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
    ["/setup", "Goals"],
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
        <button class="button button-small button-primary nav-link" data-route="/setup">Goals</button>
      </div>
    </header>
  `;
}

function renderLanding() {
  const demoStats = demoTemplates.map((template) => template.audience).join(", ");
  return `
    <section class="hero section-shell">
      <div class="hero-copy reveal">
        <p class="eyebrow">Describe a goal. Get the path.</p>
        <h1>Describe a goal. Momentum shows how.</h1>
        <p class="hero-lede">Start with a simple goal description. Momentum turns it into a focused plan with next actions, habits, milestones, and progress signals you can present clearly.</p>
        <div class="hero-actions">
          <button class="button button-primary nav-link" data-route="/setup">Describe a goal</button>
          <button class="button button-ghost nav-link" data-route="/dashboard">Show the plan</button>
        </div>
        <div class="hero-signal" aria-label="Product signals">
          <span><strong>1. Describe</strong>What you want to do</span>
          <span><strong>2. Plan</strong>Tasks, habits, milestones</span>
          <span><strong>3. Act</strong>One clear next move</span>
        </div>
      </div>
      <div class="product-preview reveal" data-parallax>
        ${renderPreviewCard()}
      </div>
    </section>
    <section id="preview" class="section-shell product-section">
      <div class="section-heading">
        <p class="eyebrow">The product idea</p>
        <h2>Momentum is a goal translator: it turns an intention into an action system.</h2>
      </div>
      <div class="feature-grid explainer-grid">
        ${featureCard("Describe the outcome", "Write the goal in plain language, choose a target date, and set the priority.", "1")}
        ${featureCard("Get the method", "Momentum creates the structure around it: roadmap tasks, habits, sessions, and milestones.", "2")}
        ${featureCard("Follow the next move", "The dashboard keeps the main action visible so the user always knows what to do next.", "3")}
      </div>
    </section>
    <section class="section-shell split-section">
      <div>
        <p class="eyebrow">Easy presentation line</p>
        <h2>The app answers the question: “How do I actually achieve this?”</h2>
      </div>
      <div class="steps">
        ${step("01", "User says what they want", "A goal like “launch my portfolio” becomes the starting brief.")}
        ${step("02", "Momentum builds the path", "It breaks the goal into practical actions and supporting routines.")}
        ${step("03", "The dashboard directs action", "Every screen points back to progress, the next task, and the future outcome.")}
      </div>
    </section>
    <section class="section-shell metric-band">
      ${metricPill("84", "Momentum score")}
      ${metricPill("76%", "Weekly progress")}
      ${metricPill("12 days", "Active streak")}
      ${metricPill("14.5h", "Focus time")}
    </section>
    <section class="section-shell demo-strip">
      <p class="eyebrow">Built for different lives</p>
      <h2>Use demo goals for ${demoStats.toLowerCase()} scenarios to show the idea without typing live.</h2>
      <button class="button button-ghost nav-link" data-route="/setup">Browse demo goals</button>
    </section>
    <section class="section-shell final-cta">
      <p class="eyebrow">No account required</p>
      <h2>For the demo, the story is simple: describe the goal, get the plan, follow the next action.</h2>
      <button class="button button-primary nav-link" data-route="/setup">Create the plan</button>
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
        <span>Actions</span><span>Habits</span><span>Milestones</span>
      </div>
      ${weeklyBars(getWeeklyBars())}
      <div class="preview-focus-row">
        <i aria-hidden="true"></i>
        <div><strong>Recommended next move</strong><span>${derived.nextTask ? escapeHtml(derived.nextTask.title) : "Log the next focus session"}</span></div>
        <span>${daysUntil(state.goal.targetDate)}d left</span>
      </div>
    </article>
  `;
}

function renderSetupPage() {
  const draft = state.setupDraft || state.goal;
  const modeLabel = state.editingGoal ? "Update active goal" : "Create new goal";
  const previewProgress = state.activeMode === "personal" && state.editingGoal && draft.id === state.goal.id ? getDerived().progress : Number(draft.progress || 0);
  return `
    <section class="page-hero setup-hero">
      <div>
        <p class="eyebrow">Goals</p>
        <h1>Tell Momentum what you want to achieve.</h1>
        <p>This is the input moment: describe the outcome, set the deadline, and Momentum turns it into the workspace that guides the user.</p>
      </div>
      <div class="page-actions">
        <button class="button button-ghost" data-new-goal>New goal</button>
        <span class="status-pill">${state.library.workspaces.length} personal</span>
        <span class="status-pill">${demoTemplates.length} demos</span>
      </div>
    </section>
    <section class="mode-banner ${state.activeMode === "demo" ? "is-demo" : ""}">
      <div>
        <p class="eyebrow">${state.activeMode === "demo" ? "Demo mode" : "Personal mode"}</p>
        <h2>${state.activeMode === "demo" ? "You are previewing a sample goal-to-plan transformation." : "You are building a personal goal plan from a simple description."}</h2>
      </div>
      ${state.activeMode === "demo" ? `<button class="button button-primary" data-copy-active-demo>Copy this demo to my goals</button>` : `<button class="button button-ghost" data-preview-demo="${demoTemplates[0].id}">Try a demo safely</button>`}
    </section>
    <section class="setup-grid">
      <form class="glass-card setup-form" id="goal-form">
        <div class="card-head">
          <div>
            <p class="eyebrow">${state.editingGoal ? "Goal brief" : "New goal brief"}</p>
            <h2>${state.editingGoal ? "Refine the description" : "Describe what you want"}</h2>
          </div>
        </div>
        <div class="form-row">
          <label for="goal-title">What do you want to achieve?</label>
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
        <button class="button button-primary form-submit" type="submit">${state.editingGoal ? "Update the plan" : "Turn this into a plan"}</button>
      </form>
      <aside class="glass-card goal-preview-card">
        <p class="eyebrow">Plan preview</p>
        <h2 id="preview-title">${escapeHtml(draft.title)}</h2>
        <div class="preview-meta">
          <span id="preview-category">${draft.category}</span>
          <span id="preview-priority">${draft.priority} priority</span>
        </div>
        ${progressRing(previewProgress, "Projected progress", "large")}
        <p class="muted">Target date: <strong id="preview-date">${formatDate(draft.targetDate)}</strong></p>
      </aside>
    </section>
    <section class="workflow-band">
      <article class="glass-card guide-card">
        <p class="eyebrow">How goals work</p>
        <h2>The goal becomes a workspace with a built-in method.</h2>
        <div class="guide-steps">
          ${guideStep("1", "Goal brief", "The user describes what they want to accomplish.")}
          ${guideStep("2", "Action system", "Momentum organizes the work into tasks, habits, sessions, and milestones.")}
          ${guideStep("3", "Guided progress", "Dashboard, Vision, and Stats explain what to do and why it matters.")}
        </div>
      </article>
    </section>
    <section class="goal-library">
      <div class="section-heading">
        <p class="eyebrow">Goal library</p>
        <h2>Your personal workspaces</h2>
      </div>
      <div class="goal-grid">
        ${state.library.workspaces.map((workspace) => goalLibraryCard(workspace)).join("")}
      </div>
    </section>
    <section class="goal-library">
      <div class="section-heading">
        <p class="eyebrow">Demo gallery</p>
        <h2>Each demo shows the same promise: a goal description becomes an achievement plan.</h2>
      </div>
      <div class="goal-grid">
        ${demoTemplates.map((template) => demoGoalCard(template)).join("")}
      </div>
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
        <p class="eyebrow">${state.activeMode === "demo" ? "Dashboard · Demo mode" : "Dashboard · Personal workspace"}</p>
        <h1>${escapeHtml(goal.title)}</h1>
        <p>${goal.category} goal due ${formatDate(goal.targetDate)}. This screen explains how to achieve it: finish the next roadmap task, keep the habits alive, and log focused work.${state.activeMode === "demo" ? " Demo changes are temporary, so you can click around safely." : ""}</p>
      </div>
      <div class="page-actions">
        ${state.activeMode === "demo" ? `<button class="button button-primary" data-copy-active-demo>Use this as a template</button>` : ""}
        <button class="button button-ghost nav-link" data-route="/setup">${state.activeMode === "demo" ? "Browse goals" : "Edit goal"}</button>
      </div>
    </section>
    <section class="dashboard-grid">
      <article class="glass-card guide-card span-12">
        <div class="card-head">
          <div>
            <p class="eyebrow">How to achieve it</p>
            <h2>Momentum turns the goal into today’s next action.</h2>
          </div>
          <span class="status-pill">${state.activeMode === "demo" ? "Safe demo" : "Saved locally"}</span>
        </div>
        <div class="guide-steps">
          ${guideStep("1", "Next action", derived.nextTask ? `Do this first: ${escapeHtml(derived.nextTask.title)}.` : "Your roadmap tasks are done. Add a new one when the goal evolves.")}
          ${guideStep("2", "Support routine", `Keep the habits that make the goal repeatable. Today is ${derived.habitCompletion}% complete.`)}
          ${guideStep("3", "Proof of effort", "Log focus sessions so progress moves even before the final outcome is finished.")}
        </div>
        <div class="guide-actions">
          <button class="button button-primary" data-complete-next ${derived.nextTask ? "" : "disabled"}>${derived.nextTask ? "Complete next action" : "No open task"}</button>
          <button class="button button-ghost" data-add-session>Log focus session</button>
          <button class="button button-ghost nav-link" data-route="/setup">Manage goals</button>
        </div>
      </article>
      <article class="glass-card progress-card span-5">
        <div class="card-head">
          <div><p class="eyebrow">Main progress</p><h2>${derived.progress}% complete</h2></div>
          <span class="status-pill">${goal.priority} priority</span>
        </div>
        <div class="progress-layout">
          ${progressRing(derived.progress, "Goal completion", "large")}
          <div class="progress-copy">
            <p>${derived.nextTask ? `Next up: ${escapeHtml(derived.nextTask.title)}.` : "Every roadmap task is complete. You can reset the workspace or keep logging focus."}</p>
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
        <form class="quick-task-form habit-form" id="quick-habit-form">
          <input name="habit" type="text" placeholder="Add a habit" aria-label="New habit" />
          <button class="button button-ghost" type="submit">Add</button>
        </form>
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
          <button class="button button-text" data-reset-workspace>${state.activeMode === "demo" ? "Reset demo preview" : "Reset this workspace"}</button>
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
          <p class="eyebrow">${state.activeMode === "demo" ? "Temporary demo workspace" : "Live local workspace"}</p>
          <h2>Every chart and projection responds to your actions.</h2>
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
      <article class="glass-card guide-card span-12">
        <div class="card-head">
          <div>
            <p class="eyebrow">How to read this</p>
            <h2>The score is not magic. It is a simple blend of what you actually do.</h2>
          </div>
        </div>
        <div class="score-formula">
          <span>Tasks: 46%</span>
          <span>Habits: 24%</span>
          <span>Focus: 18%</span>
          <span>Milestones: 12%</span>
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

function guideStep(number, title, copy) {
  return `
    <div class="guide-step">
      <span>${number}</span>
      <div>
        <strong>${title}</strong>
        <p>${copy}</p>
      </div>
    </div>
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

function goalLibraryCard(workspace) {
  const derived = getDerived(workspace);
  const isActive = state.activeMode === "personal" && workspace.goal.id === state.goal.id;
  return `
    <article class="glass-card goal-card ${isActive ? "is-active" : ""}">
      <div class="card-head">
        <div>
          <p class="eyebrow">${workspace.goal.category}</p>
          <h3>${escapeHtml(workspace.goal.title)}</h3>
        </div>
        <span class="status-pill">${derived.progress}%</span>
      </div>
      <p class="muted">Due ${formatDate(workspace.goal.targetDate)} · ${workspace.goal.priority} priority · ${derived.completedTasks}/${derived.totalTasks} tasks done</p>
      <div class="goal-card-actions">
        <button class="button button-primary" data-switch-workspace="${workspace.goal.id}">${isActive ? "Open dashboard" : "Switch to goal"}</button>
        <button class="button button-ghost" data-edit-workspace="${workspace.goal.id}">Edit</button>
        <button class="button button-text danger-text" data-delete-workspace="${workspace.goal.id}" ${state.library.workspaces.length === 1 ? "disabled" : ""}>Delete</button>
      </div>
    </article>
  `;
}

function demoGoalCard(template) {
  const workspace = createDemoWorkspace(template);
  const derived = getDerived(workspace);
  const isActive = state.activeMode === "demo" && state.goal.id === template.id;
  return `
    <article class="glass-card goal-card demo-goal-card ${isActive ? "is-active" : ""}">
      <div class="card-head">
        <div>
          <p class="eyebrow">${template.audience} demo</p>
          <h3>${escapeHtml(template.title)}</h3>
        </div>
        <span class="status-pill">${derived.progress}%</span>
      </div>
      <p class="muted">${template.category} · ${template.priority} priority · sample tasks, habits, and focus data included</p>
      <div class="demo-chips">
        <span>${derived.completedTasks}/${derived.totalTasks} tasks</span>
        <span>${derived.activeStreak}d streak</span>
        <span>${derived.focusHours.toFixed(1)}h</span>
      </div>
      <div class="goal-card-actions">
        <button class="button button-primary" data-preview-demo="${template.id}">${isActive ? "Open demo" : "Preview demo"}</button>
        <button class="button button-ghost" data-copy-demo="${template.id}">Copy template</button>
      </div>
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
      <div class="task-actions">
        <strong>${task.done ? "Done" : "Open"}</strong>
        <button class="icon-danger" data-delete-task="${task.id}" aria-label="Delete task">×</button>
      </div>
    </article>
  `;
}

function habitRow(habit) {
  return `
    <div class="habit-row ${habit.doneToday ? "is-done" : ""}" style="--accent:${habit.color}">
      <button class="habit-toggle" data-toggle-habit="${habit.id}" aria-label="Toggle ${escapeHtml(habit.title)}"></button>
      <div><strong>${habit.title}</strong><span>${habit.streak} day streak - ${habit.doneToday ? "done today" : "due today"}</span></div>
      <div class="tiny-progress"><span style="width:${habit.completion}%"></span></div>
      <button class="icon-danger" data-delete-habit="${habit.id}" aria-label="Delete habit">×</button>
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

function defaultTargetDate() {
  const target = new Date();
  target.setDate(target.getDate() + 90);
  return target.toISOString().slice(0, 10);
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
  document.querySelectorAll("[data-new-goal]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeMode = "personal";
      localStorage.setItem(STORAGE_ACTIVE_MODE, "personal");
      state.editingGoal = false;
      state.setupDraft = {
        ...demoGoal,
        id: cryptoId("goal"),
        title: "",
        targetDate: defaultTargetDate(),
        priority: "Medium",
        category: "Personal",
        progress: 0,
      };
      render();
    });
  });

  document.querySelectorAll("[data-switch-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      const activeId = button.dataset.switchWorkspace;
      saveLibrary({ ...state.library, activeId });
      state.setupDraft = null;
      state.editingGoal = true;
      showToast("Goal workspace switched.");
      navigate("/dashboard");
    });
  });

  document.querySelectorAll("[data-preview-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      switchToDemo(button.dataset.previewDemo);
      state.setupDraft = null;
      state.editingGoal = true;
      showToast("Demo opened. Your personal goals are untouched.");
      navigate("/dashboard");
    });
  });

  document.querySelectorAll("[data-copy-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      const workspace = createDemoWorkspace(demoTemplates.find((item) => item.id === button.dataset.copyDemo) || demoTemplates[0]);
      const personal = cloneAsPersonalWorkspace(workspace);
      savePersonalWorkspace(personal);
      state.setupDraft = null;
      state.editingGoal = true;
      showToast("Template copied to your personal goals.");
      navigate("/dashboard");
    });
  });

  document.querySelectorAll("[data-copy-active-demo]").forEach((button) => {
    button.addEventListener("click", () => {
      const personal = cloneAsPersonalWorkspace(state.app);
      savePersonalWorkspace(personal);
      state.setupDraft = null;
      state.editingGoal = true;
      showToast("Demo copied to your personal workspace.");
      navigate("/dashboard");
    });
  });

  document.querySelectorAll("[data-edit-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      const activeId = button.dataset.editWorkspace;
      saveLibrary({ ...state.library, activeId });
      state.setupDraft = { ...state.goal };
      state.editingGoal = true;
      showToast("Editing selected goal.");
      render();
    });
  });

  document.querySelectorAll("[data-delete-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.library.workspaces.length <= 1) return;
      const id = button.dataset.deleteWorkspace;
      const workspaces = state.library.workspaces.filter((workspace) => workspace.goal.id !== id);
      const activeId = state.library.activeId === id ? workspaces[0].goal.id : state.library.activeId;
      saveLibrary({ activeId, workspaces });
      state.setupDraft = null;
      showToast("Goal deleted.");
      render();
    });
  });

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

  document.querySelectorAll("[data-delete-task]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.deleteTask;
      const tasks = state.app.tasks.filter((task) => task.id !== id);
      saveAppData({ ...state.app, tasks });
      showToast("Task deleted.");
      render();
    });
  });

  document.querySelectorAll("[data-delete-habit]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.deleteHabit;
      const habits = state.app.habits.filter((habit) => habit.id !== id);
      saveAppData({ ...state.app, habits });
      showToast("Habit deleted.");
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

  document.querySelectorAll("[data-reset-workspace]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.activeMode === "demo") {
        switchToDemo(state.goal.id);
        showToast("Demo preview reset.");
        render();
        return;
      }

      const fresh = createWorkspaceForGoal({
        ...state.goal,
        id: state.goal.id,
        title: state.goal.title,
        targetDate: state.goal.targetDate,
        priority: state.goal.priority,
        category: state.goal.category,
      });
      saveAppData(fresh);
      showToast("Workspace reset.");
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

  const quickHabitForm = document.getElementById("quick-habit-form");
  if (quickHabitForm) {
    quickHabitForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = quickHabitForm.elements.habit;
      const title = input.value.trim();
      if (!title) return;
      const color = ["#8B5CF6", "#22D3EE", "#34D399", "#FBBF24", "#FB7185"][state.app.habits.length % 5];
      const habits = [...state.app.habits, { id: cryptoId("habit"), title, streak: 0, completion: 0, color, doneToday: false }];
      saveAppData({ ...state.app, habits });
      showToast("Habit added.");
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
    if (state.activeMode === "demo") {
      const copied = cloneAsPersonalWorkspace({ ...state.app, goal: { ...state.app.goal, ...draft } });
      savePersonalWorkspace(copied);
      state.setupDraft = null;
      state.editingGoal = true;
      showToast("Demo saved as your personal goal.");
      navigate("/dashboard");
      return;
    }

    saveGoal({
      ...demoGoal,
      ...state.goal,
      ...draft,
      title: draft.title,
      progress: state.goal.progress || demoGoal.progress,
    }, state.editingGoal ? "update" : "create");
    state.setupDraft = null;
    state.editingGoal = true;
    showToast("Your goal is set.");
    navigate("/dashboard");
  });

  updatePreview();
}
