const express = require("express");

const router = express.Router();

const resources = require("../data/resources");


// Get resources for one skill
router.get("/:skill", (req, res) => {

    const skill = req.params.skill;

    const skillResources = resources[skill];

    if (!skillResources) {
        return res.status(404).json({
            error: "No resources found for this skill"
        });
    }

    res.json({
        skill,
        resources: skillResources
    });
});


// Get resources for multiple skills
router.post("/multiple", (req, res) => {

    const { skills } = req.body;

    if (!Array.isArray(skills)) {
        return res.status(400).json({
            error: "skills must be an array"
        });
    }

    const result = {};

    skills.forEach(skill => {

        if (resources[skill]) {
            result[skill] = resources[skill];
        }

    });

    res.json(result);
});


module.exports = router;