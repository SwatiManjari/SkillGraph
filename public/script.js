/* ============================================================
   SKILL GRAPH
   Frontend + Backend Integration
   ============================================================ */


/* ============================================================
   1. API
   ============================================================ */

var API_BASE = "/api";


/* ============================================================
   2. DATA
   ============================================================ */

var SKILL_CATALOG = {
    "Core languages": [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Java",
        "SQL"
    ],

    "Frameworks and libraries": [
        "React",
        "Node.js",
        "Express",
        "Tailwind CSS"
    ],

    "CS foundations": [
        "Data Structures",
        "Algorithms",
        "Operating Systems",
        "DBMS",
        "Computer Networks"
    ],

    "Tools and practices": [
        "Git",
        "Linux",
        "Docker",
        "Kubernetes",
        "Testing"
    ],

    "Data and AI": [
        "Statistics",
        "Pandas / NumPy",
        "Machine Learning",
        "Deep Learning"
    ],

    "Cloud and DevOps": [
        "CI/CD",
        "AWS / Azure",
        "Bash Scripting"
    ],

    "Design and UX": [
        "Responsive Design",
        "Web Accessibility",
        "Figma",
        "Browser Performance"
    ]
};


var GOALS = {
    frontend: {
        label: "Frontend Developer",
        mark: "FE",
        blurb: "Build the interfaces people actually touch.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Responsive Design",
            "Web Accessibility",
            "Browser Performance",
            "Git"
        ]
    },

    backend: {
        label: "Backend Developer",
        mark: "BE",
        blurb: "Own the logic, data and APIs behind the screen.",
        skills: [
            "Python",
            "SQL",
            "Node.js",
            "Express",
            "Data Structures",
            "Linux",
            "CI/CD",
            "Git"
        ]
    },

    fullstack: {
        label: "Full-Stack Developer",
        mark: "FS",
        blurb: "Move comfortably between UI and server.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "SQL",
            "Data Structures",
            "Git"
        ]
    },

    datascience: {
        label: "Data Scientist",
        mark: "DS",
        blurb: "Turn raw data into decisions.",
        skills: [
            "Python",
            "Statistics",
            "Pandas / NumPy",
            "SQL",
            "Machine Learning",
            "Data Structures",
            "Git"
        ]
    },

    aiml: {
        label: "AI / ML Engineer",
        mark: "AI",
        blurb: "Design and train the models behind smart products.",
        skills: [
            "Python",
            "Statistics",
            "Machine Learning",
            "Deep Learning",
            "Pandas / NumPy",
            "Data Structures",
            "Git"
        ]
    },

    devops: {
        label: "DevOps Engineer",
        mark: "Op",
        blurb: "Keep builds, deployments and servers running.",
        skills: [
            "Linux",
            "Git",
            "Docker",
            "Kubernetes",
            "CI/CD",
            "Bash Scripting",
            "AWS / Azure",
            "Computer Networks"
        ]
    }
};


var AI_SUGGESTIONS = [
    "Cloud security engineer",
    "Game developer",
    "Data analyst",
    "Mobile app developer",
    "Cybersecurity analyst",
    "UI/UX designer"
];


var LEVEL_PCT = {
    "Beginner": 33,
    "Intermediate": 66,
    "Advanced": 100
};


/* ============================================================
   3. STATE
   ============================================================ */

var state = {
    userId: null,

    user: {
        name: "Student",
        college: "",
        sem: ""
    },

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

    progress: null
};


/* ============================================================
   4. API HELPERS
   ============================================================ */

async function apiRequest(url, options) {
    var response;

    try {
        response = await fetch(API_BASE + url, {
            headers: {
                "Content-Type": "application/json"
            },
            ...options
        });
    } catch (error) {
        throw new Error(
            "Could not connect to the SkillGraph server."
        );
    }

    var data;

    try {
        data = await response.json();
    } catch (error) {
        data = {};
    }

    if (!response.ok) {
        throw new Error(
            data.error || "Something went wrong."
        );
    }

    return data;
}


/* ============================================================
   5. GOAL HELPERS
   ============================================================ */

function activeGoalLabel() {
    if (state.customGoal) {
        return state.customGoal.label;
    }

    if (GOALS[state.goalKey]) {
        return GOALS[state.goalKey].label;
    }

    return "No goal selected";
}


function activeGoalSkills() {
    if (state.customGoal) {
        return state.customGoal.skills;
    }

    if (GOALS[state.goalKey]) {
        return GOALS[state.goalKey].skills;
    }

    return [];
}


function haveList() {
    var list = [];
    var skills = activeGoalSkills();

    for (var i = 0; i < skills.length; i++) {
        if (state.have[skills[i]]) {
            list.push(skills[i]);
        }
    }

    return list;
}


function gapList() {
    var list = [];
    var skills = activeGoalSkills();

    for (var i = 0; i < skills.length; i++) {
        if (!state.have[skills[i]]) {
            list.push(skills[i]);
        }
    }

    return list;
}


function readiness() {
    if (
        state.progress &&
        !state.customGoal &&
        state.progress.goalId === state.goalKey
    ) {
        return state.progress.readiness || 0;
    }

    var total = activeGoalSkills().length;

    if (total === 0) {
        return 0;
    }

    return Math.round(
        (haveList().length / total) * 100
    );
}


/* ============================================================
   6. RESOURCES
   ============================================================ */

var RESOURCES = {
    "React": {
        links: [
            "React official documentation",
            "freeCodeCamp — Front End Libraries",
            "MDN — Client-side frameworks"
        ],
        project:
            "Rebuild your college notice board as a React app with a filterable list."
    },

    "Web Accessibility": {
        links: [
            "MDN — Accessibility guides",
            "W3C Web Accessibility Initiative"
        ],
        project:
            "Audit a page you already built and fix its three worst accessibility issues."
    },

    "Browser Performance": {
        links: [
            "web.dev — Performance",
            "Chrome DevTools Lighthouse guide"
        ],
        project:
            "Take an existing page and improve its loading performance."
    },

    "Responsive Design": {
        links: [
            "MDN — Responsive design basics",
            "web.dev — Responsive layouts"
        ],
        project:
            "Make one of your old pages work properly from mobile to desktop."
    },

    "Data Structures": {
        links: [
            "freeCodeCamp — Data Structures",
            "GeeksforGeeks — DSA basics"
        ],
        project:
            "Build a stack-based undo feature for a small to-do app."
    },

    "Algorithms": {
        links: [
            "Khan Academy — Algorithms",
            "LeetCode Explore cards"
        ],
        project:
            "Solve problems across sorting, searching and recursion."
    },

    "Node.js": {
        links: [
            "Node.js official docs",
            "freeCodeCamp — Back End APIs"
        ],
        project:
            "Build a REST API that stores and returns your study notes."
    },

    "Express": {
        links: [
            "Express.js documentation",
            "MDN — Express/Node introduction"
        ],
        project:
            "Add routes and validation to your Node API."
    },

    "SQL": {
        links: [
            "Mode SQL tutorial",
            "freeCodeCamp — Relational Databases"
        ],
        project:
            "Design a database schema and write useful queries."
    },

    "Python": {
        links: [
            "Python official tutorial",
            "Automate the Boring Stuff with Python"
        ],
        project:
            "Write a script that organises your downloads folder."
    },

    "Java": {
        links: [
            "Oracle Java tutorials",
            "MOOC.fi — Java Programming"
        ],
        project:
            "Build a console library-management application."
    },

    "Machine Learning": {
        links: [
            "Coursera — Machine Learning Specialization",
            "Kaggle Learn — Intro to ML"
        ],
        project:
            "Train a classifier on a small public dataset."
    },

    "Statistics": {
        links: [
            "Khan Academy — Statistics and Probability",
            "Seeing Theory"
        ],
        project:
            "Analyse a study-hours dataset statistically."
    },

    "Pandas / NumPy": {
        links: [
            "Pandas official documentation",
            "Kaggle Learn — Pandas"
        ],
        project:
            "Clean and explore a CSV dataset."
    },

    "Deep Learning": {
        links: [
            "deeplearning.ai courses",
            "PyTorch official tutorials"
        ],
        project:
            "Train a small image classifier."
    },

    "Docker": {
        links: [
            "Docker get-started guide",
            "Docker documentation"
        ],
        project:
            "Containerise a project you already built."
    },

    "Kubernetes": {
        links: [
            "Kubernetes basics tutorial",
            "Kubernetes documentation"
        ],
        project:
            "Deploy a container to a local Kubernetes cluster."
    },

    "CI/CD": {
        links: [
            "GitHub Actions documentation",
            "freeCodeCamp — CI/CD basics"
        ],
        project:
            "Set up a pipeline that tests your project on every push."
    },

    "AWS / Azure": {
        links: [
            "AWS Cloud Practitioner Essentials",
            "Microsoft Learn — Azure Fundamentals"
        ],
        project:
            "Deploy a small application using a cloud platform."
    },

    "Bash Scripting": {
        links: [
            "freeCodeCamp — Bash scripting",
            "MIT — The Missing Semester"
        ],
        project:
            "Write a script that backs up your project folders."
    },

    "Linux": {
        links: [
            "Linux Journey",
            "MIT — The Missing Semester"
        ],
        project:
            "Set up a complete development environment using the terminal."
    },

    "Git": {
        links: [
            "Pro Git book",
            "GitHub Skills — Introduction to GitHub"
        ],
        project:
            "Take a project through branches, pull requests and a merge conflict."
    },

    "Computer Networks": {
        links: [
            "freeCodeCamp — Networking basics",
            "Khan Academy — How the internet works"
        ],
        project:
            "Diagram the request path for one of your deployed projects."
    },

    "Operating Systems": {
        links: [
            "OSTEP",
            "Neso Academy — Operating Systems"
        ],
        project:
            "Explore process creation and scheduling with a small program."
    },

    "DBMS": {
        links: [
            "freeCodeCamp — Relational Databases",
            "GeeksforGeeks — DBMS notes"
        ],
        project:
            "Normalise a messy table into 3NF."
    },

    "Testing": {
        links: [
            "Testing Library docs",
            "freeCodeCamp — Testing basics"
        ],
        project:
            "Write tests for a difficult function in an old project."
    },

    "Figma": {
        links: [
            "Figma Learn",
            "Figma Community"
        ],
        project:
            "Design a three-screen mockup before coding your next project."
    },

    "Tailwind CSS": {
        links: [
            "Tailwind CSS documentation",
            "Tailwind Play"
        ],
        project:
            "Rebuild one of your existing pages using Tailwind."
    },

    "HTML": {
        links: [
            "MDN — HTML basics",
            "freeCodeCamp — Responsive Web Design"
        ],
        project:
            "Build a semantic HTML page."
    },

    "CSS": {
        links: [
            "MDN — CSS layout",
            "CSS-Tricks — Flexbox and Grid"
        ],
        project:
            "Recreate a layout from scratch using CSS."
    },

    "JavaScript": {
        links: [
            "javascript.info",
            "MDN — JavaScript guide",
            "Eloquent JavaScript"
        ],
        project:
            "Build an interactive JavaScript quiz app."
    }
};


var DEFAULT_RESOURCE = {
    links: [
        "MDN Web Docs",
        "freeCodeCamp"
    ],

    project:
        "Build one small project that forces you to use this skill directly."
};


function resourceFor(skill) {
    return RESOURCES[skill] || DEFAULT_RESOURCE;
}


function buildResourceCard(skill) {
    var res = resourceFor(skill);

    var card = document.createElement("div");
    card.className = "card res-card";

    var links = "";

    for (var i = 0; i < res.links.length; i++) {
        links +=
            '<a href="#" onclick="return false;">' +
            res.links[i] +
            "</a>";
    }

    card.innerHTML =
        "<h3>" +
        skill +
        "</h3>" +
        '<div class="res-links">' +
        links +
        "</div>" +
        '<div class="project-idea"><b>Project idea — </b>' +
        res.project +
        "</div>";

    return card;
}


/* ============================================================
   7. ROADMAP
   ============================================================ */

function buildRoadStep(skill, index) {
    var res = resourceFor(skill);

    var step = document.createElement("div");
    step.className = "road-step";

    step.innerHTML =
        '<span class="road-num">' +
        (index + 1) +
        "</span>" +
        '<div class="road-body">' +
        "<h3>" +
        skill +
        "</h3>" +
        "<p>" +
        res.project +
        "</p>" +
        '<span class="duration">Suggested: ' +
        (2 + (index % 3)) +
        "–" +
        (4 + (index % 3)) +
        " weeks</span>" +
        "</div>";

    return step;
}


/* ============================================================
   8. VIEW SWITCHING
   ============================================================ */

var panes = document.querySelectorAll(".pane");

var railNodes =
    document.querySelectorAll(
        ".rail-node[data-view]"
    );


function showView(name) {
    for (var i = 0; i < panes.length; i++) {
        if (
            panes[i].id ===
            "view-" + name
        ) {
            panes[i].classList.add("active");
        } else {
            panes[i].classList.remove("active");
        }
    }

    for (var j = 0; j < railNodes.length; j++) {
        if (
            railNodes[j].getAttribute(
                "data-view"
            ) === name
        ) {
            railNodes[j].classList.add("active");
        } else {
            railNodes[j].classList.remove("active");
        }
    }

    if (name === "home") {
        renderHome();
    }

    if (name === "goal") {
        renderGoal();
    }

    if (name === "assessment") {
        renderAssessment();
    }

    if (name === "gap") {
        renderGap();
    }

    if (name === "roadmap") {
        renderRoadmap();
    }

    if (name === "resources") {
        renderResources();
    }

    if (name === "progress") {
        renderProgress();
    }

    markRailProgress();

    window.scrollTo(0, 0);
}


for (var n = 0; n < railNodes.length; n++) {
    railNodes[n].addEventListener(
        "click",
        function () {
            showView(
                this.getAttribute(
                    "data-view"
                )
            );
        }
    );
}


var gotoButtons =
    document.querySelectorAll(
        "[data-goto]"
    );


for (var g = 0; g < gotoButtons.length; g++) {
    gotoButtons[g].addEventListener(
        "click",
        function () {
            showView(
                this.getAttribute(
                    "data-goto"
                )
            );
        }
    );
}


function markRailProgress() {
    for (var i = 0; i < railNodes.length; i++) {
        var view =
            railNodes[i].getAttribute(
                "data-view"
            );

        var done = false;

        if (view === "home") {
            done = !!state.userId;
        }

        if (view === "goal") {
            done = !!state.userId;
        }

        if (
            view === "assessment" &&
            Object.keys(state.have).length > 0
        ) {
            done = true;
        }

        if (
            view === "ai" &&
            state.aiPlan
        ) {
            done = true;
        }

        if (
            done &&
            !railNodes[i].classList.contains(
                "active"
            )
        ) {
            railNodes[i].classList.add(
                "done"
            );
        } else {
            railNodes[i].classList.remove(
                "done"
            );
        }
    }
}


/* ============================================================
   9. START PAGE
   ============================================================ */

document
    .getElementById("start-form")
    .addEventListener(
        "submit",
        async function (e) {
            e.preventDefault();

            var name =
                document.getElementById(
                    "start-name"
                ).value.trim();

            var college =
                document.getElementById(
                    "start-college"
                ).value.trim();

            var sem =
                document.getElementById(
                    "start-sem"
                ).value.trim();

            if (!name) {
                return;
            }

            var submitButton =
                this.querySelector(
                    "button[type='submit']"
                );

            submitButton.disabled = true;
            submitButton.textContent =
                "Creating your graph...";

            try {
                var user =
                    await apiRequest(
                        "/users",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                name: name,
                                college: college,
                                sem: sem,
                                goal: state.goalKey,
                                skills: Object.keys(
                                    state.have
                                )
                            })
                        }
                    );

                state.userId = user.id;

                state.user.name =
                    user.name;

                state.user.college =
                    user.college || "";

                state.user.sem =
                    user.sem || "";

                state.goalKey =
                    user.goal || "frontend";

                document
                    .getElementById(
                        "view-start"
                    )
                    .classList.add(
                        "hidden"
                    );

                document
                    .getElementById(
                        "app-shell"
                    )
                    .classList.remove(
                        "hidden"
                    );

                await refreshProgress();

                showView("home");

            } catch (error) {
                alert(error.message);
            } finally {
                submitButton.disabled = false;
                submitButton.textContent =
                    "Start building my graph";
            }
        }
    );


/* ============================================================
   10. START OVER
   ============================================================ */

document
    .getElementById("exit-btn")
    .addEventListener(
        "click",
        function () {
            state.userId = null;

            state.user = {
                name: "Student",
                college: "",
                sem: ""
            };

            state.goalKey = "frontend";
            state.customGoal = null;

            state.have = {
                "HTML": "Intermediate",
                "CSS": "Intermediate",
                "JavaScript": "Beginner",
                "Git": "Beginner"
            };

            state.customSkills = [];
            state.aiPlan = null;
            state.progress = null;

            document
                .getElementById(
                    "app-shell"
                )
                .classList.add("hidden");

            document
                .getElementById(
                    "view-start"
                )
                .classList.remove(
                    "hidden"
                );

            document
                .getElementById(
                    "start-form"
                )
                .reset();

            window.scrollTo(0, 0);
        }
    );


/* ============================================================
   11. HOME
   ============================================================ */

function renderHome() {
    document.getElementById(
        "home-greeting"
    ).textContent =
        "Welcome, " +
        state.user.name;

    var sub = state.user.college;

    if (state.user.sem) {
        sub = sub
            ? sub + " · " + state.user.sem
            : state.user.sem;
    }

    document.getElementById(
        "home-sub"
    ).textContent =
        sub ||
        "Add your college and semester below.";

    document.getElementById(
        "home-goal-pill"
    ).textContent =
        "Goal: " +
        activeGoalLabel();

    document.getElementById(
        "stat-have"
    ).textContent =
        haveList().length;

    document.getElementById(
        "stat-gap"
    ).textContent =
        gapList().length;

    document.getElementById(
        "stat-ready"
    ).textContent =
        readiness() + "%";


    var chips =
        document.getElementById(
            "home-chips"
        );

    chips.innerHTML = "";

    var names =
        Object.keys(state.have);

    if (names.length === 0) {
        chips.innerHTML =
            '<p class="empty-note">Nothing logged yet — open Skill assessment to add your skills.</p>';
    } else {
        for (
            var i = 0;
            i < names.length;
            i++
        ) {
            var c =
                document.createElement(
                    "span"
                );

            c.className = "chip";

            c.innerHTML =
                names[i] +
                ' <span class="lvl">· ' +
                state.have[names[i]] +
                "</span>";

            chips.appendChild(c);
        }
    }


    document.getElementById(
        "profile-name"
    ).value =
        state.user.name;

    document.getElementById(
        "profile-college"
    ).value =
        state.user.college;

    document.getElementById(
        "profile-sem"
    ).value =
        state.user.sem;


    var gaps = gapList();

    document.getElementById(
        "home-next-step"
    ).textContent =
        gaps.length > 0
            ? gaps[0]
            : "Every skill in this track is covered";
}


/* ============================================================
   12. SAVE PROFILE
   ============================================================ */

document
    .getElementById(
        "save-profile"
    )
    .addEventListener(
        "click",
        async function () {
            if (!state.userId) {
                return;
            }

            var name =
                document.getElementById(
                    "profile-name"
                ).value.trim();

            var college =
                document.getElementById(
                    "profile-college"
                ).value.trim();

            var sem =
                document.getElementById(
                    "profile-sem"
                ).value.trim();

            if (!name) {
                alert("Name cannot be empty.");
                return;
            }

            var button = this;

            button.disabled = true;
            button.textContent = "Saving...";

            try {
                var user =
                    await apiRequest(
                        "/users/" +
                        state.userId +
                        "/profile",
                        {
                            method: "PUT",
                            body: JSON.stringify({
                                name: name,
                                college: college,
                                sem: sem
                            })
                        }
                    );

                state.user.name =
                    user.name;

                state.user.college =
                    user.college || "";

                state.user.sem =
                    user.sem || "";

                renderHome();

            } catch (error) {
                alert(error.message);
            } finally {
                button.disabled = false;
                button.textContent =
                    "Save details";
            }
        }
    );


/* ============================================================
   13. CAREER GOAL
   ============================================================ */

function renderGoal() {
    var grid =
        document.getElementById(
            "goal-grid"
        );

    grid.innerHTML = "";

    var keys =
        Object.keys(GOALS);

    for (
        var i = 0;
        i < keys.length;
        i++
    ) {
        (function (key) {
            var g = GOALS[key];

            var selected =
                !state.customGoal &&
                state.goalKey === key;

            var card =
                document.createElement(
                    "button"
                );

            card.className =
                "goal-card" +
                (selected
                    ? " selected"
                    : "");

            card.innerHTML =
                '<span class="mark">' +
                g.mark +
                "</span>" +
                "<h3>" +
                g.label +
                "</h3>" +
                "<p>" +
                g.blurb +
                "</p>" +
                '<span class="choose">' +
                (selected
                    ? "Current goal"
                    : "Set as goal") +
                "</span>";

            card.addEventListener(
                "click",
                async function () {
                    if (!state.userId) {
                        return;
                    }

                    try {
                        var user =
                            await apiRequest(
                                "/users/" +
                                state.userId +
                                "/goal",
                                {
                                    method: "PUT",
                                    body: JSON.stringify({
                                        goal: key
                                    })
                                }
                            );

                        state.goalKey =
                            user.goal;

                        state.customGoal =
                            null;

                        state.progress =
                            null;

                        await refreshProgress();

                        renderGoal();
                        renderHome();

                    } catch (error) {
                        alert(
                            error.message
                        );
                    }
                }
            );

            grid.appendChild(card);

        })(keys[i]);
    }


    var box =
        document.getElementById(
            "custom-goal-card"
        );

    if (state.customGoal) {
        box.classList.remove(
            "hidden"
        );

        document.getElementById(
            "custom-goal-text"
        ).textContent =
            state.customGoal.label +
            " — applied from the AI planner, tracking " +
            state.customGoal.skills.length +
            " skills. Pick a card above to switch back to a ready-made track.";

    } else {
        box.classList.add(
            "hidden"
        );
    }
}


/* ============================================================
   14. SKILL ASSESSMENT
   ============================================================ */

function renderAssessment() {
    var wrap =
        document.getElementById(
            "assess-form"
        );

    wrap.innerHTML = "";

    var cats =
        Object.keys(
            SKILL_CATALOG
        );

    for (
        var c = 0;
        c < cats.length;
        c++
    ) {
        var group =
            document.createElement(
                "div"
            );

        group.className =
            "assess-group";

        var h =
            document.createElement(
                "h3"
            );

        h.textContent =
            cats[c];

        group.appendChild(h);

        var skills =
            SKILL_CATALOG[
                cats[c]
            ];

        for (
            var s = 0;
            s < skills.length;
            s++
        ) {
            group.appendChild(
                buildAssessRow(
                    skills[s]
                )
            );
        }

        wrap.appendChild(group);
    }

    renderCustomChips();
}


function buildAssessRow(skill) {
    var known =
        !!state.have[skill];

    var row =
        document.createElement(
            "div"
        );

    row.className =
        "assess-row" +
        (known
            ? " checked"
            : "");


    var left =
        document.createElement(
            "label"
        );

    left.className =
        "assess-left";


    var cb =
        document.createElement(
            "input"
        );

    cb.type = "checkbox";
    cb.checked = known;


    var text =
        document.createElement(
            "span"
        );

    text.textContent = skill;

    left.appendChild(cb);
    left.appendChild(text);


    var seg =
        document.createElement(
            "div"
        );

    seg.className = "seg";


    var levels = [
        "Beginner",
        "Intermediate",
        "Advanced"
    ];


    for (
        var i = 0;
        i < levels.length;
        i++
    ) {
        (function (level) {
            var b =
                document.createElement(
                    "button"
                );

            b.type = "button";
            b.textContent = level;
            b.disabled = !known;

            if (
                state.have[skill] ===
                level
            ) {
                b.classList.add(
                    "on"
                );
            }

            b.addEventListener(
                "click",
                function () {
                    state.have[skill] =
                        level;

                    renderAssessment();
                }
            );

            seg.appendChild(b);

        })(levels[i]);
    }


    cb.addEventListener(
        "change",
        function () {
            if (cb.checked) {
                state.have[skill] =
                    state.have[skill] ||
                    "Beginner";
            } else {
                delete state.have[skill];
            }

            renderAssessment();
        }
    );


    row.appendChild(left);
    row.appendChild(seg);

    return row;
}


/* ============================================================
   15. CUSTOM SKILLS
   ============================================================ */

document
    .getElementById(
        "add-custom-skill"
    )
    .addEventListener(
        "click",
        addCustomSkill
    );


document
    .getElementById(
        "custom-skill-input"
    )
    .addEventListener(
        "keydown",
        function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                addCustomSkill();
            }
        }
    );


function addCustomSkill() {
    var input =
        document.getElementById(
            "custom-skill-input"
        );

    var level =
        document.getElementById(
            "custom-skill-level"
        ).value;

    var name =
        input.value.trim();

    if (name === "") {
        return;
    }

    state.have[name] =
        level;

    if (
        state.customSkills.indexOf(
            name
        ) === -1
    ) {
        state.customSkills.push(
            name
        );
    }

    input.value = "";
    input.focus();

    renderCustomChips();
}


function renderCustomChips() {
    var row =
        document.getElementById(
            "custom-chip-row"
        );

    row.innerHTML = "";

    if (
        state.customSkills.length ===
        0
    ) {
        row.innerHTML =
            '<p class="empty-note">No extra skills added yet.</p>';

        return;
    }


    for (
        var i = 0;
        i < state.customSkills.length;
        i++
    ) {
        (function (name) {
            var chip =
                document.createElement(
                    "span"
                );

            chip.className =
                "chip blue";

            chip.innerHTML =
                name +
                ' <span class="lvl">· ' +
                (
                    state.have[name] ||
                    "Beginner"
                ) +
                "</span>";


            var x =
                document.createElement(
                    "button"
                );

            x.className = "x";
            x.type = "button";
            x.textContent = "×";

            x.setAttribute(
                "aria-label",
                "Remove " + name
            );


            x.addEventListener(
                "click",
                function () {
                    delete state.have[
                        name
                    ];

                    var index =
                        state.customSkills.indexOf(
                            name
                        );

                    if (index !== -1) {
                        state.customSkills.splice(
                            index,
                            1
                        );
                    }

                    renderCustomChips();
                }
            );


            chip.appendChild(x);
            row.appendChild(chip);

        })(state.customSkills[i]);
    }
}


/* ============================================================
   16. SAVE ASSESSMENT
   ============================================================ */

document
    .getElementById(
        "save-assessment"
    )
    .addEventListener(
        "click",
        async function () {
            if (!state.userId) {
                return;
            }

            var button = this;

            button.disabled = true;
            button.textContent =
                "Saving...";

            try {
                await apiRequest(
                    "/users/" +
                    state.userId +
                    "/skills",
                    {
                        method: "PUT",
                        body: JSON.stringify({
                            skills: Object.keys(
                                state.have
                            )
                        })
                    }
                );

                await refreshProgress();

                showView("gap");

            } catch (error) {
                alert(error.message);
            } finally {
                button.disabled = false;
                button.textContent =
                    "See my gap analysis";
            }
        }
    );


/* ============================================================
   17. REFRESH USER PROGRESS
   ============================================================ */

async function refreshProgress() {
    if (!state.userId) {
        return;
    }

    try {
        var progress =
            await apiRequest(
                "/users/" +
                state.userId +
                "/progress"
            );

        state.progress =
            progress;

        if (
            !state.customGoal &&
            progress.goalId
        ) {
            state.goalKey =
                progress.goalId;
        }

    } catch (error) {
        console.error(
            "Progress refresh failed:",
            error
        );
    }
}


/* ============================================================
   18. AI PLANNER
   ============================================================ */

function renderAiSuggestions() {
    var wrap =
        document.getElementById(
            "ai-suggest"
        );

    wrap.innerHTML = "";

    for (
        var i = 0;
        i < AI_SUGGESTIONS.length;
        i++
    ) {
        (function (text) {
            var b =
                document.createElement(
                    "button"
                );

            b.type = "button";
            b.textContent = text;

            b.addEventListener(
                "click",
                function () {
                    document.getElementById(
                        "ai-goal-input"
                    ).value = text;

                    runPlanner();
                }
            );

            wrap.appendChild(b);

        })(AI_SUGGESTIONS[i]);
    }
}


renderAiSuggestions();


document
    .getElementById(
        "ai-generate"
    )
    .addEventListener(
        "click",
        runPlanner
    );


document
    .getElementById(
        "ai-goal-input"
    )
    .addEventListener(
        "keydown",
        function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                runPlanner();
            }
        }
    );


async function runPlanner() {
    var goalText =
        document.getElementById(
            "ai-goal-input"
        ).value.trim();

    if (goalText === "") {
        return;
    }

    var statusBox =
        document.getElementById(
            "ai-status"
        );

    var statusText =
        document.getElementById(
            "ai-status-text"
        );

    var result =
        document.getElementById(
            "ai-result"
        );

    result.classList.add(
        "hidden"
    );

    statusBox.classList.remove(
        "hidden"
    );

    statusText.textContent =
        "Reading the skills you've logged…";


    try {
        var plan =
            await apiRequest(
                "/ai/plan",
                {
                    method: "POST",
                    body: JSON.stringify({
                        goalText:
                            goalText,

                        have:
                            Object.keys(
                                state.have
                            )
                    })
                }
            );

        statusText.textContent =
            "Plan generated.";

        state.aiPlan = plan;

        renderAiPlan();

        result.classList.remove(
            "hidden"
        );

        markRailProgress();

    } catch (error) {
        alert(error.message);
    } finally {
        statusBox.classList.add(
            "hidden"
        );
    }
}


/* ============================================================
   19. RENDER AI PLAN
   ============================================================ */

function renderAiPlan() {
    var plan =
        state.aiPlan;

    var box =
        document.getElementById(
            "ai-result"
        );

    box.innerHTML = "";


    var head =
        document.createElement(
            "div"
        );

    head.className = "card";

    head.innerHTML =
        '<span class="pill" style="margin-bottom:12px;">Plan for ' +
        plan.title +
        "</span>" +

        '<p style="font-size:14px; color:var(--ink-soft); max-width:66ch; margin-bottom:18px;">' +
        (
            plan.summary ||
            "Your generated career plan."
        ) +
        "</p>" +

        '<div class="grid-3">' +

        '<div class="stat">' +
        '<span class="num" style="color:var(--teal);">' +
        plan.have.length +
        "</span>" +
        '<span class="lbl">You already have</span>' +
        "</div>" +

        '<div class="stat">' +
        '<span class="num" style="color:var(--amber);">' +
        plan.gaps.length +
        "</span>" +
        '<span class="lbl">Still to learn</span>' +
        "</div>" +

        '<div class="stat">' +
        '<span class="num">' +
        plan.skills.length +
        "</span>" +
        '<span class="lbl">Skills in this role</span>' +
        "</div>" +

        "</div>";

    box.appendChild(head);


    var skillsBlock =
        document.createElement(
            "div"
        );

    skillsBlock.className =
        "card ai-block";


    var chipHtml = "";

    for (
        var i = 0;
        i < plan.skills.length;
        i++
    ) {
        var name =
            plan.skills[i];

        if (state.have[name]) {
            chipHtml +=
                '<span class="chip">' +
                name +
                ' <span class="lvl">· ' +
                state.have[name] +
                "</span></span>";
        } else {
            chipHtml +=
                '<span class="chip gap">' +
                name +
                "</span>";
        }
    }


    skillsBlock.innerHTML =
        "<h3>Skills this role needs</h3>" +
        '<div class="chip-row">' +
        chipHtml +
        "</div>" +
        '<p class="ai-note" style="margin-top:14px;">Green means you have already logged it. Amber is a gap.</p>';

    box.appendChild(
        skillsBlock
    );


    var roadBlock =
        document.createElement(
            "div"
        );

    roadBlock.className =
        "card ai-block";

    roadBlock.innerHTML =
        "<h3>Suggested roadmap</h3>";


    var road =
        document.createElement(
            "div"
        );

    road.className =
        "roadmap";


    if (
        plan.gaps.length ===
        0
    ) {
        road.innerHTML =
            '<p class="empty-note">You already cover every skill listed for this role.</p>';
    } else {
        for (
            var r = 0;
            r < plan.gaps.length;
            r++
        ) {
            road.appendChild(
                buildRoadStep(
                    plan.gaps[r],
                    r
                )
            );
        }
    }


    roadBlock.appendChild(
        road
    );

    box.appendChild(
        roadBlock
    );


    if (
        plan.gaps.length > 0
    ) {
        var resBlock =
            document.createElement(
                "div"
            );

        resBlock.className =
            "ai-block";

        resBlock.innerHTML =
            '<h3 style="margin-bottom:14px;">Where to study each gap</h3>';


        var grid =
            document.createElement(
                "div"
            );

        grid.className =
            "grid-2";


        for (
            var k = 0;
            k < plan.gaps.length;
            k++
        ) {
            grid.appendChild(
                buildResourceCard(
                    plan.gaps[k]
                )
            );
        }


        resBlock.appendChild(
            grid
        );

        box.appendChild(
            resBlock
        );
    }


    var actions =
        document.createElement(
            "div"
        );

    actions.className =
        "btn-row";


    var apply =
        document.createElement(
            "button"
        );

    apply.className =
        "btn-primary";

    apply.textContent =
        "Track this as my goal";


    apply.addEventListener(
        "click",
        function () {
            state.customGoal = {
                label:
                    plan.title,

                skills:
                    plan.skills
            };

            showView("gap");
        }
    );


    var again =
        document.createElement(
            "button"
        );

    again.className =
        "btn-secondary";

    again.textContent =
        "Try another goal";


    again.addEventListener(
        "click",
        function () {
            document.getElementById(
                "ai-goal-input"
            ).value = "";

            document.getElementById(
                "ai-goal-input"
            ).focus();

            document.getElementById(
                "ai-result"
            ).classList.add(
                "hidden"
            );
        }
    );


    actions.appendChild(
        apply
    );

    actions.appendChild(
        again
    );

    box.appendChild(
        actions
    );
}


/* ============================================================
   20. GAP ANALYSIS
   ============================================================ */

function renderGap() {
    document.getElementById(
        "gap-sub"
    ).textContent =
        "What " +
        activeGoalLabel() +
        " needs, against what you have.";


    var skills =
        activeGoalSkills();


    document.getElementById(
        "gap-stat-have"
    ).textContent =
        haveList().length;


    document.getElementById(
        "gap-stat-miss"
    ).textContent =
        gapList().length;


    document.getElementById(
        "gap-stat-total"
    ).textContent =
        skills.length;


    var list =
        document.getElementById(
            "gap-list"
        );

    list.innerHTML = "";


    if (
        skills.length ===
        0
    ) {
        list.innerHTML =
            '<p class="empty-note">Choose a career goal first.</p>';

        return;
    }


    for (
        var i = 0;
        i < skills.length;
        i++
    ) {
        var level =
            state.have[
                skills[i]
            ];

        var row =
            document.createElement(
                "div"
            );

        row.className =
            "gap-row";

        row.innerHTML =
            '<span class="gap-node ' +
            (
                level
                    ? "have"
                    : "miss"
            ) +
            '"></span>' +

            '<span class="name">' +
            skills[i] +
            "</span>" +

            '<span class="tag ' +
            (
                level
                    ? ""
                    : "miss-tag"
            ) +
            '">' +

            (
                level
                    ? level
                    : "Gap — not started"
            ) +

            "</span>";

        list.appendChild(row);
    }
}


/* ============================================================
   21. ROADMAP
   ============================================================ */

function renderRoadmap() {
    var wrap =
        document.getElementById(
            "roadmap-list"
        );

    wrap.innerHTML = "";

    var gaps =
        gapList();


    if (
        gaps.length ===
        0
    ) {
        wrap.innerHTML =
            '<p class="empty-note">No gaps left in this track. Deepen a skill you marked Beginner or choose another goal.</p>';

        return;
    }


    for (
        var i = 0;
        i < gaps.length;
        i++
    ) {
        wrap.appendChild(
            buildRoadStep(
                gaps[i],
                i
            )
        );
    }
}


/* ============================================================
   22. RESOURCES
   ============================================================ */

function renderResources() {
    var grid =
        document.getElementById(
            "resources-grid"
        );

    grid.innerHTML = "";

    var gaps =
        gapList();


    if (
        gaps.length ===
        0
    ) {
        grid.innerHTML =
            '<p class="empty-note">Nothing to recommend — every skill in this track is already logged.</p>';

        return;
    }


    for (
        var i = 0;
        i < gaps.length;
        i++
    ) {
        grid.appendChild(
            buildResourceCard(
                gaps[i]
            )
        );
    }
}


/* ============================================================
   23. PROGRESS
   ============================================================ */

function renderProgress() {
    var pct =
        readiness();


    document.getElementById(
        "ring-percent"
    ).textContent =
        pct + "%";


    var ring =
        document.getElementById(
            "progress-ring"
        );


    var circumference =
        2 *
        Math.PI *
        50;


    ring.setAttribute(
        "stroke-dasharray",
        circumference
    );


    ring.setAttribute(
        "stroke-dashoffset",
        circumference *
        (
            1 -
            pct / 100
        )
    );


    var bars =
        document.getElementById(
            "progress-bars"
        );

    bars.innerHTML = "";


    var skills =
        activeGoalSkills();


    if (
        skills.length ===
        0
    ) {
        bars.innerHTML =
            '<p class="empty-note">Choose a career goal to start tracking.</p>';

        return;
    }


    for (
        var i = 0;
        i < skills.length;
        i++
    ) {
        var level =
            state.have[
                skills[i]
            ];


        var width =
            level
                ? LEVEL_PCT[level]
                : 0;


        var row =
            document.createElement(
                "div"
            );

        row.className =
            "bar-row";


        row.innerHTML =
            '<div class="bar-top">' +
            "<span>" +
            skills[i] +
            "</span>" +

            '<span class="lvl-lbl">' +
            (
                level
                    ? level
                    : "Not started"
            ) +
            "</span>" +

            "</div>" +

            '<div class="bar-track">' +

            '<div class="bar-fill ' +
            (
                level
                    ? "on"
                    : ""
            ) +
            '" style="width:' +
            width +
            '%;"></div>' +

            "</div>";


        bars.appendChild(
            row
        );
    }
}


/* ============================================================
   24. INITIAL RENDER
   ============================================================ */

renderHome();
renderGoal();
renderAssessment();
renderGap();
renderRoadmap();
renderResources();
renderProgress();

markRailProgress();