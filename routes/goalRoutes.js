const express = require("express");

const router = express.Router();

const goals = require("../data/goals");

// GET ALL GOALS
router.get("/", (req, res) => {
    res.json(goals);
});

// GET ONE GOAL
router.get("/:goalId", (req, res) => {
    const goal = goals.find(
        goal => goal.id === req.params.goalId
    );

    if (!goal) {
        return res.status(404).json({
            error: "Goal not found"
        });
    }

    res.json(goal);
});

module.exports = router;