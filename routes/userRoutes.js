const express = require("express");
const router = express.Router();

const users = require("../data/users");
const goals = require("../data/goals");

const {
    calculateSkillGaps,
    calculateReadiness,
    getMatchedSkills
} = require("../utils/skillUtils");


/* ============================================================
   CREATE USER
   POST /api/users
   ============================================================ */

router.post("/", (req, res) => {
    const {
        name,
        college = "",
        sem = "",
        goal = "frontend",
        skills = []
    } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
        return res.status(400).json({
            error: "name is required"
        });
    }

    if (!Array.isArray(skills)) {
        return res.status(400).json({
            error: "skills must be an array"
        });
    }

    const normalizedGoal =
        typeof goal === "string"
            ? goal.trim().toLowerCase()
            : "frontend";

    const selectedGoal = goals.find(
        item =>
            item.id === normalizedGoal ||
            item.label.toLowerCase() === normalizedGoal
    );

    const newUser = {
        id: Date.now().toString(),
        name: name.trim(),
        college: typeof college === "string" ? college.trim() : "",
        sem: typeof sem === "string" ? sem.trim() : "",
        goal: selectedGoal ? selectedGoal.id : null,
        skills
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


/* ============================================================
   GET ALL USERS
   GET /api/users
   ============================================================ */

router.get("/", (req, res) => {
    res.json(users);
});


/* ============================================================
   GET ONE USER
   GET /api/users/:userId
   ============================================================ */

router.get("/:userId", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
});


/* ============================================================
   UPDATE PROFILE
   PUT /api/users/:userId/profile
   ============================================================ */

router.put("/:userId/profile", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    const {
        name,
        college,
        sem
    } = req.body;

    if (
        name !== undefined &&
        (typeof name !== "string" || name.trim() === "")
    ) {
        return res.status(400).json({
            error: "name cannot be empty"
        });
    }

    if (name !== undefined) {
        user.name = name.trim();
    }

    if (college !== undefined) {
        user.college =
            typeof college === "string"
                ? college.trim()
                : user.college;
    }

    if (sem !== undefined) {
        user.sem =
            typeof sem === "string"
                ? sem.trim()
                : user.sem;
    }

    res.json(user);
});


/* ============================================================
   UPDATE USER GOAL
   PUT /api/users/:userId/goal
   ============================================================ */

router.put("/:userId/goal", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    const { goal } = req.body;

    if (!goal || typeof goal !== "string") {
        return res.status(400).json({
            error: "goal is required"
        });
    }

    const normalizedGoal = goal.trim().toLowerCase();

    const selectedGoal = goals.find(
        item =>
            item.id === normalizedGoal ||
            item.label.toLowerCase() === normalizedGoal
    );

    if (!selectedGoal) {
        return res.status(404).json({
            error: "Goal not found"
        });
    }

    user.goal = selectedGoal.id;

    res.json(user);
});


/* ============================================================
   UPDATE USER SKILLS
   PUT /api/users/:userId/skills
   ============================================================ */

router.put("/:userId/skills", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    const { skills } = req.body;

    if (!Array.isArray(skills)) {
        return res.status(400).json({
            error: "skills must be an array"
        });
    }

    user.skills = skills;

    res.json(user);
});


/* ============================================================
   GET USER PROGRESS
   GET /api/users/:userId/progress
   ============================================================ */

router.get("/:userId/progress", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    if (!user.goal) {
        return res.status(400).json({
            error: "User has no goal"
        });
    }

    const goal = goals.find(
        goal => goal.id === user.goal
    );

    if (!goal) {
        return res.status(404).json({
            error: "Goal not found"
        });
    }

    const matchedSkills = getMatchedSkills(
        goal.skills,
        user.skills
    );

    const gaps = calculateSkillGaps(
        goal.skills,
        user.skills
    );

    const readiness = calculateReadiness(
        goal.skills,
        user.skills
    );

    res.json({
        userId: user.id,
        name: user.name,
        college: user.college,
        sem: user.sem,
        goal: goal.label,
        goalId: goal.id,
        skills: goal.skills,
        userSkills: user.skills,
        have: matchedSkills,
        gaps,
        readiness
    });
});


module.exports = router;