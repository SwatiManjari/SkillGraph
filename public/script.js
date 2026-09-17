

var SKILL_CATALOG = {
  "Core languages": ["HTML", "CSS", "JavaScript", "Python", "Java", "SQL"],
  "Frameworks and libraries": ["React", "Node.js", "Express", "Tailwind CSS"],
  "CS foundations": ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks"],
  "Tools and practices": ["Git", "Linux", "Docker", "Kubernetes", "Testing"],
  "Data and AI": ["Statistics", "Pandas / NumPy", "Machine Learning", "Deep Learning"],
  "Cloud and DevOps": ["CI/CD", "AWS / Azure", "Bash Scripting"],
  "Design and UX": ["Responsive Design", "Web Accessibility", "Figma", "Browser Performance"]
};

var GOALS = {
  frontend: {
    label: "Frontend Developer", mark: "FE",
    blurb: "Build the interfaces people actually touch.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Web Accessibility", "Browser Performance", "Git"]
  },
  backend: {
    label: "Backend Developer", mark: "BE",
    blurb: "Own the logic, data and APIs behind the screen.",
    skills: ["Python", "SQL", "Node.js", "Express", "Data Structures", "Linux", "CI/CD", "Git"]
  },
  fullstack: {
    label: "Full-Stack Developer", mark: "FS",
    blurb: "Move comfortably between UI and server.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Data Structures", "Git"]
  },
  datascience: {
    label: "Data Scientist", mark: "DS",
    blurb: "Turn raw data into decisions.",
    skills: ["Python", "Statistics", "Pandas / NumPy", "SQL", "Machine Learning", "Data Structures", "Git"]
  },
  aiml: {
    label: "AI / ML Engineer", mark: "AI",
    blurb: "Design and train the models behind smart products.",
    skills: ["Python", "Statistics", "Machine Learning", "Deep Learning", "Pandas / NumPy", "Data Structures", "Git"]
  },
  devops: {
    label: "DevOps Engineer", mark: "Op",
    blurb: "Keep builds, deployments and servers running.",
    skills: ["Linux", "Git", "Docker", "Kubernetes", "CI/CD", "Bash Scripting", "AWS / Azure", "Computer Networks"]
  }
};

var RESOURCES = {
  "React": { links: ["React official documentation", "freeCodeCamp — Front End Libraries", "MDN — Client-side frameworks"], project: "Rebuild your college notice board as a React app with a filterable list." },
  "Web Accessibility": { links: ["MDN — Accessibility guides", "W3C Web Accessibility Initiative"], project: "Audit a page you already built and fix its three worst accessibility issues." },
  "Browser Performance": { links: ["web.dev — Performance", "Chrome DevTools Lighthouse guide"], project: "Take an existing page and cut its load time with image and script fixes." },
  "Responsive Design": { links: ["MDN — Responsive design basics", "web.dev — Responsive layouts"], project: "Make one of your old pages work properly from 320px up to desktop." },
  "Data Structures": { links: ["freeCodeCamp — Data Structures", "GeeksforGeeks — DSA basics"], project: "Build a stack-based undo feature for a small to-do app." },
  "Algorithms": { links: ["Khan Academy — Algorithms", "LeetCode Explore cards"], project: "Solve and write up twenty problems across sorting, searching and recursion." },
  "Node.js": { links: ["Node.js official docs", "freeCodeCamp — Back End APIs"], project: "Build a REST API that stores and returns your study notes." },
  "Express": { links: ["Express.js documentation", "MDN — Express/Node introduction"], project: "Add login and protected routes to your Node API." },
  "SQL": { links: ["Mode SQL tutorial", "freeCodeCamp — Relational Databases"], project: "Design a schema for tracking your semester marks and query it." },
  "Python": { links: ["Python official tutorial", "Automate the Boring Stuff with Python"], project: "Write a script that organises your downloads folder by file type." },
  "Java": { links: ["Oracle Java tutorials", "MOOC.fi — Java Programming"], project: "Build a console library-management app with classes and file storage." },
  "Machine Learning": { links: ["Coursera — Machine Learning Specialization", "Kaggle Learn — Intro to ML"], project: "Train a classifier on a small public dataset and explain its errors." },
  "Statistics": { links: ["Khan Academy — Statistics and Probability", "Seeing Theory"], project: "Analyse your own study-hours log and summarise it statistically." },
  "Pandas / NumPy": { links: ["Pandas official documentation", "Kaggle Learn — Pandas"], project: "Clean and explore a messy CSV from start to finish." },
  "Deep Learning": { links: ["deeplearning.ai courses", "PyTorch official tutorials"], project: "Train a small image classifier on Fashion-MNIST." },
  "Docker": { links: ["Docker get-started guide", "Academind — Docker and Kubernetes"], project: "Containerise a project you already built so it runs anywhere." },
  "Kubernetes": { links: ["Kubernetes basics tutorial", "Academind — Docker and Kubernetes"], project: "Deploy your container to a local minikube cluster." },
  "CI/CD": { links: ["GitHub Actions documentation", "freeCodeCamp — CI/CD basics"], project: "Set up a pipeline that tests your project on every push." },
  "AWS / Azure": { links: ["AWS Cloud Practitioner Essentials", "Microsoft Learn — Azure Fundamentals"], project: "Deploy a static site to cloud storage with a custom domain." },
  "Bash Scripting": { links: ["freeCodeCamp — Bash scripting", "MIT — The Missing Semester"], project: "Write a script that backs up and renames your project folders." },
  "Linux": { links: ["Linux Journey", "MIT — The Missing Semester"], project: "Set up a working dev environment using only the terminal." },
  "Git": { links: ["Pro Git book (free)", "GitHub Skills — Introduction to GitHub"], project: "Take one project through branches, a pull request and a merge conflict." },
  "Computer Networks": { links: ["freeCodeCamp — Networking basics", "Khan Academy — How the internet works"], project: "Diagram the full request path for one of your deployed projects." },
  "Operating Systems": { links: ["OSTEP (free textbook)", "Neso Academy — Operating Systems"], project: "Write a short program that spawns processes and shows scheduling in action." },
  "DBMS": { links: ["freeCodeCamp — Relational Databases", "GeeksforGeeks — DBMS notes"], project: "Normalise a messy table into 3NF and explain each step." },
  "Testing": { links: ["Testing Library docs", "freeCodeCamp — Testing basics"], project: "Write tests for the trickiest function in an old project of yours." },
  "Figma": { links: ["Figma Learn — Design basics", "Figma community files"], project: "Design a three-screen mockup before coding your next project." },
  "Tailwind CSS": { links: ["Tailwind CSS documentation", "Tailwind Play"], project: "Rebuild one of your existing pages using only utility classes." },
  "HTML": { links: ["MDN — HTML basics", "freeCodeCamp — Responsive Web Design"], project: "Mark up a long article using only semantic elements." },
  "CSS": { links: ["MDN — CSS layout", "CSS-Tricks — Flexbox and Grid guides"], project: "Recreate a layout you like from a real website, from scratch." },
  "JavaScript": { links: ["javascript.info", "MDN — JavaScript guide", "Eloquent JavaScript (free)"], project: "Build an interactive quiz app with no libraries at all." }
};

var DEFAULT_RESOURCE = {
  links: ["MDN Web Docs", "freeCodeCamp", "A well-reviewed Coursera or Udemy course"],
  project: "Build one small, finishable project that forces you to use this skill directly."
};

var AI_PRESETS = {
  "cloud security": {
    title: "Cloud Security Engineer",
    summary: "Security sits on top of networking and cloud fundamentals, so this plan builds those first and adds security tooling after.",
    skills: ["Linux", "Computer Networks", "Bash Scripting", "AWS / Azure", "Docker", "Cryptography Basics", "Identity and Access Management", "Security Auditing"]
  },
  "game": {
    title: "Game Developer",
    summary: "Games need one strong language, real maths, and an engine you know deeply. Ship small games early rather than one big one late.",
    skills: ["C# or C++", "Unity or Godot", "Linear Algebra", "Game Physics", "Data Structures", "Git", "Level Design", "Shader Basics"]
  },
  "data analyst": {
    title: "Data Analyst",
    summary: "Analyst work is mostly SQL plus clear communication. Tools matter less than being able to explain what the numbers mean.",
    skills: ["SQL", "Excel / Sheets", "Statistics", "Pandas / NumPy", "Data Visualisation", "Power BI or Tableau", "Business Communication"]
  },
  "mobile": {
    title: "Mobile App Developer",
    summary: "Pick one platform, learn it properly, then widen. Cross-platform gets easier once you understand one native stack.",
    skills: ["Dart / Kotlin", "Flutter or Android SDK", "REST APIs", "State Management", "SQLite / Local Storage", "Git", "App Store Deployment"]
  },
  "cyber": {
    title: "Cybersecurity Analyst",
    summary: "Defence starts with understanding systems. Networks and Linux come before any tool, and hands-on labs beat certificates early on.",
    skills: ["Computer Networks", "Linux", "Python", "Cryptography Basics", "Vulnerability Assessment", "SIEM Tools", "Incident Response"]
  },
  "ui": {
    title: "UI/UX Designer",
    summary: "Design work is research plus iteration. Build a portfolio of case studies, not just pretty screens.",
    skills: ["Design Principles", "Figma", "User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"]
  }
};

var AI_SUGGESTIONS = ["Cloud security engineer", "Game developer", "Data analyst", "Mobile app developer", "Cybersecurity analyst", "UI/UX designer"];

var LEVEL_PCT = { "Beginner": 33, "Intermediate": 66, "Advanced": 100 };



var API_BASE = "/api";
var resourceCache = {};
var apiReady = false;

var state = {
  user: { name: "Student", college: "", sem: "" },
  goalKey: "frontend",     
  customGoal: null,         
  have: {                   
    "HTML": "Intermediate",
    "CSS": "Intermediate",
    "JavaScript": "Beginner",
    "Git": "Beginner"
  },
  customSkills: [],        
  aiPlan: null,            
  userId: null               
};


async function apiRequest(url, options){
  var response = await fetch(API_BASE + url, options || {});
  var data = {};

  try {
    data = await response.json();
  } catch (error) {
    data = {};
  }

  if (!response.ok){
    throw new Error(data.error || "API request failed");
  }

  return data;
}

async function loadBackendData(){
  try {
    var results = await Promise.all([
      apiRequest("/goals"),
      apiRequest("/skills")
    ]);

    var backendGoals = results[0];
    var backendSkills = results[1];

    if (Array.isArray(backendGoals)){
      GOALS = {};
      for (var i = 0; i < backendGoals.length; i++){
        var goal = backendGoals[i];
        GOALS[goal.id] = goal;
      }
    }

    if (backendSkills && typeof backendSkills === "object"){
      SKILL_CATALOG = backendSkills;
    }

    apiReady = true;
    renderGoal();
  } catch (error) {
    console.error("Could not load backend data:", error);
  }
}

async function createBackendUser(){
  try {
    var user = await apiRequest("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: state.user.name,
        goal: state.goalKey,
        skills: haveList()
      })
    });

    state.userId = user.id;
  } catch (error) {
    console.error("Could not create backend user:", error);
  }
}

async function saveSkillsToBackend(){
  if (!state.userId) return;

  try {
    await apiRequest("/users/" + state.userId + "/skills", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        skills: Object.keys(state.have)
      })
    });
  } catch (error) {
    console.error("Could not save skills:", error);
  }
}

async function saveGoalToBackend(){
  if (!state.userId || state.customGoal) return;

  try {
    await apiRequest("/users/" + state.userId + "/goal", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        goal: state.goalKey
      })
    });
  } catch (error) {
    console.error("Could not save goal:", error);
  }
}

async function loadResourcesForSkills(skills){
  var missing = [];

  for (var i = 0; i < skills.length; i++){
    if (!resourceCache[skills[i]]) missing.push(skills[i]);
  }

  if (missing.length === 0) return;

  try {
    var data = await apiRequest("/resources/multiple", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        skills: missing
      })
    });

    for (var skill in data){
      if (data.hasOwnProperty(skill)){
        resourceCache[skill] = data[skill];
      }
    }
  } catch (error) {
    console.error("Could not load learning resources:", error);
  }
}

function normalizeResource(skill){
  var data = resourceCache[skill];

  if (!data || !Array.isArray(data)) {
    return null;
  }

  var links = [];

  for (var i = 0; i < data.length; i++){
    links.push({
      title: data[i].title,
      url: data[i].url
    });
  }

  return {
    links: links,
    project: data.length > 0
      ? "Use this skill in a small project while studying the resource."
      : DEFAULT_RESOURCE.project
  };
}

/* ---------- helpers ---------- */

function activeGoalLabel(){
  if (state.customGoal) return state.customGoal.label;
  return GOALS[state.goalKey].label;
}

function activeGoalSkills(){
  if (state.customGoal) return state.customGoal.skills;
  return GOALS[state.goalKey].skills;
}

function haveList(){
  var list = [];
  var skills = activeGoalSkills();
  for (var i = 0; i < skills.length; i++){
    if (state.have[skills[i]]) list.push(skills[i]);
  }
  return list;
}

function gapList(){
  var list = [];
  var skills = activeGoalSkills();
  for (var i = 0; i < skills.length; i++){
    if (!state.have[skills[i]]) list.push(skills[i]);
  }
  return list;
}

function readiness(){
  var total = activeGoalSkills().length;
  if (total === 0) return 0;
  return Math.round((haveList().length / total) * 100);
}

function resourceFor(skill){
  var backendResource = normalizeResource(skill);

  if (backendResource) return backendResource;

  return RESOURCES[skill] ? RESOURCES[skill] : DEFAULT_RESOURCE;
}

function buildResourceCard(skill){
  var res = resourceFor(skill);
  var card = document.createElement("div");
  card.className = "card res-card";
  var links = "";

  for (var i = 0; i < res.links.length; i++){
    var link = res.links[i];

    if (typeof link === "string"){
      links += '<a href="#" onclick="return false;">' + link + '</a>';
    } else {
      links += '<a href="' + link.url + '" target="_blank" rel="noopener noreferrer">' +
        link.title +
        '</a>';
    }
  }

  card.innerHTML =
    '<h3>' + skill + '</h3>' +
    '<div class="res-links">' + links + '</div>' +
    '<div class="project-idea"><b>Project idea — </b>' + res.project + '</div>';

  return card;
}

function buildRoadStep(skill, index){
  var res = resourceFor(skill);
  var step = document.createElement("div");
  step.className = "road-step";
  step.innerHTML =
    '<span class="road-num">' + (index + 1) + '</span>' +
    '<div class="road-body">' +
      '<h3>' + skill + '</h3>' +
      '<p>' + res.project + '</p>' +
      '<span class="duration">Suggested: ' + (2 + (index % 3)) + '–' + (4 + (index % 3)) + ' weeks</span>' +
    '</div>';
  return step;
}

var panes = document.querySelectorAll(".pane");
var railNodes = document.querySelectorAll(".rail-node[data-view]");

function showView(name){
  for (var i = 0; i < panes.length; i++){
    if (panes[i].id === "view-" + name) panes[i].classList.add("active");
    else panes[i].classList.remove("active");
  }
  for (var j = 0; j < railNodes.length; j++){
    if (railNodes[j].getAttribute("data-view") === name) railNodes[j].classList.add("active");
    else railNodes[j].classList.remove("active");
  }
  if (name === "home") renderHome();
  if (name === "goal") renderGoal();
  if (name === "assessment") renderAssessment();
  if (name === "gap") renderGap();
  if (name === "roadmap") renderRoadmap();
  if (name === "resources") renderResources();
  if (name === "progress") renderProgress();
  markRailProgress();
  window.scrollTo(0, 0);
}

for (var n = 0; n < railNodes.length; n++){
  railNodes[n].addEventListener("click", function(){
    showView(this.getAttribute("data-view"));
  });
}

var gotoButtons = document.querySelectorAll("[data-goto]");
for (var g = 0; g < gotoButtons.length; g++){
  gotoButtons[g].addEventListener("click", function(){
    showView(this.getAttribute("data-goto"));
  });
}

function markRailProgress(){
  for (var i = 0; i < railNodes.length; i++){
    var view = railNodes[i].getAttribute("data-view");
    var done = false;
    if (view === "home") done = true;
    if (view === "goal") done = true;
    if (view === "assessment" && Object.keys(state.have).length > 0) done = true;
    if (view === "ai" && state.aiPlan) done = true;
    if (done && !railNodes[i].classList.contains("active")) railNodes[i].classList.add("done");
    else railNodes[i].classList.remove("done");
  }
}


document.getElementById("start-form").addEventListener("submit", function(e){
  e.preventDefault();
  state.user.name = document.getElementById("start-name").value || "Student";
  state.user.college = document.getElementById("start-college").value;
  state.user.sem = document.getElementById("start-sem").value;
  document.getElementById("view-start").classList.add("hidden");
  document.getElementById("app-shell").classList.remove("hidden");
  showView("home");

  createBackendUser();
});

document.getElementById("exit-btn").addEventListener("click", function(){
  document.getElementById("app-shell").classList.add("hidden");
  document.getElementById("view-start").classList.remove("hidden");
  window.scrollTo(0, 0);
});



function renderHome(){
  document.getElementById("home-greeting").textContent = "Welcome, " + state.user.name;

  var sub = state.user.college;
  if (state.user.sem) sub = sub ? sub + " · " + state.user.sem : state.user.sem;
  document.getElementById("home-sub").textContent = sub ? sub : "Add your college and semester below.";
  document.getElementById("home-goal-pill").textContent = "Goal: " + activeGoalLabel();

  document.getElementById("stat-have").textContent = haveList().length;
  document.getElementById("stat-gap").textContent = gapList().length;
  document.getElementById("stat-ready").textContent = readiness() + "%";

  var chips = document.getElementById("home-chips");
  chips.innerHTML = "";
  var names = Object.keys(state.have);
  if (names.length === 0){
    chips.innerHTML = '<p class="empty-note">Nothing logged yet — open Skill assessment to add your skills.</p>';
  } else {
    for (var i = 0; i < names.length; i++){
      var c = document.createElement("span");
      c.className = "chip";
      c.innerHTML = names[i] + ' <span class="lvl">· ' + state.have[names[i]] + '</span>';
      chips.appendChild(c);
    }
  }

  document.getElementById("profile-name").value = state.user.name;
  document.getElementById("profile-college").value = state.user.college;
  document.getElementById("profile-sem").value = state.user.sem;

  var gaps = gapList();
  document.getElementById("home-next-step").textContent =
    gaps.length > 0 ? gaps[0] : "Every skill in this track is covered";
}

document.getElementById("save-profile").addEventListener("click", function(){
  state.user.name = document.getElementById("profile-name").value || state.user.name;
  state.user.college = document.getElementById("profile-college").value;
  state.user.sem = document.getElementById("profile-sem").value;
  renderHome();
});



function renderGoal(){
  var grid = document.getElementById("goal-grid");
  grid.innerHTML = "";
  var keys = Object.keys(GOALS);

  for (var i = 0; i < keys.length; i++){
    (function(key){
      var g = GOALS[key];
      var selected = (!state.customGoal && state.goalKey === key);
      var card = document.createElement("button");
      card.className = "goal-card" + (selected ? " selected" : "");
      card.innerHTML =
        '<span class="mark">' + g.mark + '</span>' +
        '<h3>' + g.label + '</h3>' +
        '<p>' + g.blurb + '</p>' +
        '<span class="choose">' + (selected ? "Current goal" : "Set as goal") + '</span>';
      card.addEventListener("click", function(){
        state.goalKey = key;
        state.customGoal = null;
        renderGoal();
        saveGoalToBackend();
        renderHome();
      });
      grid.appendChild(card);
    })(keys[i]);
  }

  var box = document.getElementById("custom-goal-card");
  if (state.customGoal){
    box.classList.remove("hidden");
    document.getElementById("custom-goal-text").textContent =
      state.customGoal.label + " — applied from the AI planner, tracking " +
      state.customGoal.skills.length + " skills. Pick a card above to switch back to a ready-made track.";
  } else {
    box.classList.add("hidden");
  }
}



function renderAssessment(){
  var wrap = document.getElementById("assess-form");
  wrap.innerHTML = "";
  var cats = Object.keys(SKILL_CATALOG);

  for (var c = 0; c < cats.length; c++){
    var group = document.createElement("div");
    group.className = "assess-group";
    var h = document.createElement("h3");
    h.textContent = cats[c];
    group.appendChild(h);

    var skills = SKILL_CATALOG[cats[c]];
    for (var s = 0; s < skills.length; s++){
      group.appendChild(buildAssessRow(skills[s]));
    }
    wrap.appendChild(group);
  }
  renderCustomChips();
}

function buildAssessRow(skill){
  var known = state.have[skill] ? true : false;

  var row = document.createElement("div");
  row.className = "assess-row" + (known ? " checked" : "");

  var left = document.createElement("label");
  left.className = "assess-left";
  var cb = document.createElement("input");
  cb.type = "checkbox";
  cb.checked = known;
  var text = document.createElement("span");
  text.textContent = skill;
  left.appendChild(cb);
  left.appendChild(text);

  var seg = document.createElement("div");
  seg.className = "seg";
  var levels = ["Beginner", "Intermediate", "Advanced"];
  for (var i = 0; i < levels.length; i++){
    (function(level){
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = level;
      b.disabled = !known;
      if (state.have[skill] === level) b.classList.add("on");
      b.addEventListener("click", function(){
        state.have[skill] = level;
        renderAssessment();
        saveSkillsToBackend();
      });
      seg.appendChild(b);
    })(levels[i]);
  }

  cb.addEventListener("change", function(){
    if (cb.checked) state.have[skill] = state.have[skill] || "Beginner";
    else delete state.have[skill];
    renderAssessment();
    saveSkillsToBackend();
  });

  row.appendChild(left);
  row.appendChild(seg);
  return row;
}

/* ---- skills the user adds themselves ---- */

document.getElementById("add-custom-skill").addEventListener("click", addCustomSkill);
document.getElementById("custom-skill-input").addEventListener("keydown", function(e){
  if (e.key === "Enter"){ e.preventDefault(); addCustomSkill(); }
});

function addCustomSkill(){
  var input = document.getElementById("custom-skill-input");
  var level = document.getElementById("custom-skill-level").value;
  var name = input.value.trim();
  if (name === "") return;

  state.have[name] = level;
  if (state.customSkills.indexOf(name) === -1) state.customSkills.push(name);

  input.value = "";
  input.focus();
  renderCustomChips();
  saveSkillsToBackend();
}

function renderCustomChips(){
  var row = document.getElementById("custom-chip-row");
  row.innerHTML = "";

  if (state.customSkills.length === 0){
    row.innerHTML = '<p class="empty-note">No extra skills added yet.</p>';
    return;
  }
  for (var i = 0; i < state.customSkills.length; i++){
    (function(name){
      var chip = document.createElement("span");
      chip.className = "chip blue";
      chip.innerHTML = name + ' <span class="lvl">· ' + (state.have[name] || "Beginner") + '</span>';

      var x = document.createElement("button");
      x.className = "x";
      x.type = "button";
      x.textContent = "×";
      x.setAttribute("aria-label", "Remove " + name);
      x.addEventListener("click", function(){
        delete state.have[name];
        state.customSkills.splice(state.customSkills.indexOf(name), 1);
        renderCustomChips();
        saveSkillsToBackend();
      });

      chip.appendChild(x);
      row.appendChild(chip);
    })(state.customSkills[i]);
  }
}

document.getElementById("save-assessment").addEventListener("click", function(){
  showView("gap");
});



function renderAiSuggestions(){
  var wrap = document.getElementById("ai-suggest");
  wrap.innerHTML = "";
  for (var i = 0; i < AI_SUGGESTIONS.length; i++){
    (function(text){
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = text;
      b.addEventListener("click", function(){
        document.getElementById("ai-goal-input").value = text;
        runPlanner();
      });
      wrap.appendChild(b);
    })(AI_SUGGESTIONS[i]);
  }
}
renderAiSuggestions();

document.getElementById("ai-generate").addEventListener("click", runPlanner);
document.getElementById("ai-goal-input").addEventListener("keydown", function(e){
  if (e.key === "Enter"){ e.preventDefault(); runPlanner(); }
});

async function runPlanner(){
  var goalText = document.getElementById("ai-goal-input").value.trim();
  if (goalText === "") return;

  var statusBox = document.getElementById("ai-status");
  var statusText = document.getElementById("ai-status-text");
  var result = document.getElementById("ai-result");

  result.classList.add("hidden");
  statusBox.classList.remove("hidden");
  statusText.textContent = "Reading the skills you've logged…";

  try {
    await new Promise(function(resolve){
      setTimeout(resolve, 500);
    });

    statusText.textContent = "Mapping the skills this role needs…";

    var plan = await apiRequest("/ai/plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        goalText: goalText,
        have: Object.keys(state.have)
      })
    });

    statusText.textContent = "Ordering your roadmap…";

    await loadResourcesForSkills(plan.gaps || []);

    state.aiPlan = plan;
    renderAiPlan();

    statusBox.classList.add("hidden");
    result.classList.remove("hidden");
    markRailProgress();

  } catch (error) {
    statusBox.classList.add("hidden");
    result.classList.remove("hidden");

    result.innerHTML =
      '<div class="card">' +
        '<h3>Could not generate the plan</h3>' +
        '<p class="empty-note">' + error.message + '</p>' +
        '<p class="empty-note">Make sure the SkillGraph backend is running with <b>npm start</b>.</p>' +
      '</div>';
  }
}

function renderAiPlan(){
  var plan = state.aiPlan;
  var box = document.getElementById("ai-result");
  box.innerHTML = "";

  /* --- summary --- */
  var head = document.createElement("div");
  head.className = "card";
  head.innerHTML =
    '<span class="pill" style="margin-bottom:12px;">Plan for ' + plan.title + '</span>' +
    '<p style="font-size:14px; color:var(--ink-soft); max-width:66ch; margin-bottom:18px;">' + plan.summary + '</p>' +
    '<div class="grid-3">' +
      '<div class="stat"><span class="num" style="color:var(--teal);">' + plan.have.length + '</span><span class="lbl">You already have</span></div>' +
      '<div class="stat"><span class="num" style="color:var(--amber);">' + plan.gaps.length + '</span><span class="lbl">Still to learn</span></div>' +
      '<div class="stat"><span class="num">' + plan.skills.length + '</span><span class="lbl">Skills in this role</span></div>' +
    '</div>';
  box.appendChild(head);

  /* --- skills needed --- */
  var skillsBlock = document.createElement("div");
  skillsBlock.className = "card ai-block";
  var chipHtml = "";
  for (var i = 0; i < plan.skills.length; i++){
    var name = plan.skills[i];
    if (state.have[name]){
      chipHtml += '<span class="chip">' + name + ' <span class="lvl">· ' + state.have[name] + '</span></span>';
    } else {
      chipHtml += '<span class="chip gap">' + name + '</span>';
    }
  }
  skillsBlock.innerHTML =
    '<h3>Skills this role needs</h3>' +
    '<div class="chip-row">' + chipHtml + '</div>' +
    '<p class="ai-note" style="margin-top:14px;">Green means you have already logged it. Amber is a gap.</p>';
  box.appendChild(skillsBlock);

  var roadBlock = document.createElement("div");
  roadBlock.className = "card ai-block";
  roadBlock.innerHTML = '<h3>Suggested roadmap</h3>';
  var road = document.createElement("div");
  road.className = "roadmap";
  if (plan.gaps.length === 0){
    road.innerHTML = '<p class="empty-note">You already cover every skill listed for this role. Deepen one of them instead, or aim a level higher.</p>';
  } else {
    for (var r = 0; r < plan.gaps.length; r++){
      road.appendChild(buildRoadStep(plan.gaps[r], r));
    }
  }
  roadBlock.appendChild(road);
  box.appendChild(roadBlock);

  /* --- resources --- */
  if (plan.gaps.length > 0){
    var resBlock = document.createElement("div");
    resBlock.className = "ai-block";
    resBlock.innerHTML = '<h3 style="margin-bottom:14px;">Where to study each gap</h3>';
    var grid = document.createElement("div");
    grid.className = "grid-2";
    for (var k = 0; k < plan.gaps.length; k++){
      grid.appendChild(buildResourceCard(plan.gaps[k]));
    }
    resBlock.appendChild(grid);
    box.appendChild(resBlock);
  }

  /* --- actions --- */
  var actions = document.createElement("div");
  actions.className = "btn-row";

  var apply = document.createElement("button");
  apply.className = "btn-primary";
  apply.textContent = "Track this as my goal";
  apply.addEventListener("click", function(){
    state.customGoal = { label: plan.title, skills: plan.skills };
    showView("gap");
  });

  var again = document.createElement("button");
  again.className = "btn-secondary";
  again.textContent = "Try another goal";
  again.addEventListener("click", function(){
    document.getElementById("ai-goal-input").value = "";
    document.getElementById("ai-goal-input").focus();
    document.getElementById("ai-result").classList.add("hidden");
  });

  actions.appendChild(apply);
  actions.appendChild(again);
  box.appendChild(actions);
}


function renderGap(){
  document.getElementById("gap-sub").textContent =
    "What " + activeGoalLabel() + " needs, against what you have.";

  var skills = activeGoalSkills();
  document.getElementById("gap-stat-have").textContent = haveList().length;
  document.getElementById("gap-stat-miss").textContent = gapList().length;
  document.getElementById("gap-stat-total").textContent = skills.length;

  var list = document.getElementById("gap-list");
  list.innerHTML = "";
  if (skills.length === 0){
    list.innerHTML = '<p class="empty-note">Choose a career goal first.</p>';
    return;
  }
  for (var i = 0; i < skills.length; i++){
    var level = state.have[skills[i]];
    var row = document.createElement("div");
    row.className = "gap-row";
    row.innerHTML =
      '<span class="gap-node ' + (level ? "have" : "miss") + '"></span>' +
      '<span class="name">' + skills[i] + '</span>' +
      '<span class="tag ' + (level ? "" : "miss-tag") + '">' + (level ? level : "Gap — not started") + '</span>';
    list.appendChild(row);
  }
}


function renderRoadmap(){
  var wrap = document.getElementById("roadmap-list");
  wrap.innerHTML = "";
  var gaps = gapList();

  if (gaps.length === 0){
    wrap.innerHTML = '<p class="empty-note">No gaps left in this track. Try a harder goal, or deepen a skill you marked Beginner.</p>';
    return;
  }
  for (var i = 0; i < gaps.length; i++){
    wrap.appendChild(buildRoadStep(gaps[i], i));
  }
}



async function renderResources(){
  var grid = document.getElementById("resources-grid");
  grid.innerHTML = "";
  var gaps = gapList();

  if (gaps.length === 0){
    grid.innerHTML = '<p class="empty-note">Nothing to recommend — every skill in this track is already logged.</p>';
    return;
  }

  grid.innerHTML = '<p class="empty-note">Loading learning resources…</p>';

  await loadResourcesForSkills(gaps);

  grid.innerHTML = "";

  for (var i = 0; i < gaps.length; i++){
    grid.appendChild(buildResourceCard(gaps[i]));
  }
}



function renderProgress(){
  var pct = readiness();
  document.getElementById("ring-percent").textContent = pct + "%";

  var ring = document.getElementById("progress-ring");
  var circumference = 2 * Math.PI * 50;
  ring.setAttribute("stroke-dasharray", circumference);
  ring.setAttribute("stroke-dashoffset", circumference * (1 - pct / 100));

  var bars = document.getElementById("progress-bars");
  bars.innerHTML = "";
  var skills = activeGoalSkills();

  if (skills.length === 0){
    bars.innerHTML = '<p class="empty-note">Choose a career goal to start tracking.</p>';
    return;
  }
  for (var i = 0; i < skills.length; i++){
    var level = state.have[skills[i]];
    var width = level ? LEVEL_PCT[level] : 0;
    var row = document.createElement("div");
    row.className = "bar-row";
    row.innerHTML =
      '<div class="bar-top"><span>' + skills[i] + '</span><span class="lvl-lbl">' + (level ? level : "Not started") + '</span></div>' +
      '<div class="bar-track"><div class="bar-fill ' + (level ? "on" : "") + '" style="width:' + width + '%;"></div></div>';
    bars.appendChild(row);
  }
}


loadBackendData();
