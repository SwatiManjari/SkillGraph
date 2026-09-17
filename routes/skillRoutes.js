const express = require("express");

const router = express.Router();

const skills = require("../data/skills");

// GET ALL SKILLS BY CATEGORY
router.get("/", (req, res) => {
    res.json(skills);
});

// GET ALL SKILLS AS ONE LIST
router.get("/all", (req, res) => {
    const allSkills = Object.values(skills).flat();

    res.json(allSkills);
});

module.exports = router;