const express = require("express");

const router = express.Router();

const users = require("../data/users");

// CREATE USER
router.post("/", (req, res) => {
    const { name, goal, skills } = req.body;

    const newUser = {
        id: Date.now().toString(),
        name: name || "User",
        goal: goal || null,
        skills: skills || []
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// GET ALL USERS
router.get("/", (req, res) => {
    res.json(users);
});

// GET ONE USER
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

// UPDATE USER GOAL
router.put("/:userId/goal", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    user.goal = req.body.goal;

    res.json(user);
});

// UPDATE USER SKILLS
router.put("/:userId/skills", (req, res) => {
    const user = users.find(
        user => user.id === req.params.userId
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    if (!Array.isArray(req.body.skills)) {
        return res.status(400).json({
            error: "skills must be an array"
        });
    }

    user.skills = req.body.skills;

    res.json(user);
});

module.exports = router;