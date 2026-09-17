const express = require("express");

const router = express.Router();

const goals = require("../data/goals");
const aiPresets = require("../data/aiPresets");

// GENERATE A SKILL PLAN
router.post("/plan", (req, res) => {
    const { goalText, have = [] } = req.body;

    if (!goalText || typeof goalText !== "string") {
        return res.status(400).json({
            error: "goalText is required"
        });
    }

    const normalizedGoal = goalText.trim().toLowerCase();

    let title;
    let skills;

    // CHECK CUSTOM AI PRESETS
    if (aiPresets[normalizedGoal]) {
        title = aiPresets[normalizedGoal].title;
        skills = aiPresets[normalizedGoal].skills;
    }

    // CHECK BUILT-IN GOALS
    else {
        const goal = goals.find(
            goal =>
                goal.id === normalizedGoal ||
                goal.label.toLowerCase() === normalizedGoal
        );

        if (goal) {
            title = goal.label;
            skills = goal.skills;
        }
    }

    // GENERIC GOAL
    if (!skills) {
        title = goalText.trim();

        skills = [
            "Programming Fundamentals",
            "Data Structures",
            "Git",
            "Problem Solving",
            "Domain Fundamentals",
            "One Specialist Tool",
            "Portfolio Projects",
            "Communication"
        ];
    }

    const userSkills = Array.isArray(have)
        ? have
        : [];

    const gaps = skills.filter(
        skill => !userSkills.includes(skill)
    );

    res.json({
        title,
        summary: `A learning roadmap for becoming a ${title}.`,
        skills,
        have: userSkills,
        gaps
    });
});

module.exports = router;