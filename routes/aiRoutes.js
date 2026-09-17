const express = require("express");

const router = express.Router();

const goals = require("../data/goals");
const aiPresets = require("../data/aiPresets");

const {
    calculateSkillGaps,
    calculateReadiness,
    getMatchedSkills
} = require("../utils/skillUtils");


router.post("/plan", (req, res) => {

    const { goalText, have = [] } = req.body;


    // Validate goalText
    if (!goalText || typeof goalText !== "string") {
        return res.status(400).json({
            error: "goalText is required"
        });
    }


    // Make the goal easier to compare
    const normalizedGoal = goalText.trim().toLowerCase();


    let title;
    let skills;


    // Check AI/custom goal presets first
    if (aiPresets[normalizedGoal]) {

        title = aiPresets[normalizedGoal].title;
        skills = aiPresets[normalizedGoal].skills;

    } else {

        // Check predefined career goals
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


    // If no predefined goal matches,
    // create a basic roadmap for the custom goal
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


    // Make sure user's skills are stored as an array
    const userSkills = Array.isArray(have)
        ? have
        : [];


    // Find skills the user already has
    const matchedSkills = getMatchedSkills(
        skills,
        userSkills
    );


    // Find skills the user still needs
    const gaps = calculateSkillGaps(
        skills,
        userSkills
    );


    // Calculate percentage of required skills already completed
    const readiness = calculateReadiness(
        skills,
        userSkills
    );


    res.json({
        title,
        summary: `A learning roadmap for becoming a ${title}.`,
        skills,
        have: matchedSkills,
        gaps,
        readiness
    });
});


module.exports = router;