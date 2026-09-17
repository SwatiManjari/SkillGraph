const express = require("express");

const router = express.Router();

const users = require("../data/users");
const goals = require("../data/goals");

const {
    calculateSkillGaps,
    calculateReadiness,
    getMatchedSkills
} = require("../utils/skillUtils");


// Create a new user
router.post("/", (req, res) => {

    const { name, goal, skills = [] } = req.body;

    if (!name) {
        return res.status(400).json({
            error: "name is required"
        });
    }

    if (!Array.isArray(skills)) {
        return res.status(400).json({
            error: "skills must be an array"
        });
    }

    const newUser = {
        id: Date.now().toString(),
        name,
        goal: goal || null,
        skills
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


// Get all users
router.get("/", (req, res) => {
    res.json(users);
});


// Get one user
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


// Update user's goal
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

    if (!goal) {
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


// Update user's skills
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


// Get user's skill gap and readiness
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
        goal: goal.label,
        skills: goal.skills,
        have: matchedSkills,
        gaps,
        readiness
    });
});


module.exports = router;