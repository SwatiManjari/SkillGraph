const express = require("express");
const router = express.Router();

const User = require("../models/User");
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

router.post("/", async (req, res) => {
    try {
        const {
            name,
            college = "",
            sem = "",
            goal = "frontend",
            skills = []
        } = req.body;

        if (
            !name ||
            typeof name !== "string" ||
            name.trim() === ""
        ) {
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

        const user = await User.create({
            name: name.trim(),

            college:
                typeof college === "string"
                    ? college.trim()
                    : "",

            sem:
                typeof sem === "string"
                    ? sem.trim()
                    : "",

            goal: selectedGoal
                ? selectedGoal.id
                : null,

            skills
        });

        res.status(201).json({
            id: user._id.toString(),
            name: user.name,
            college: user.college,
            sem: user.sem,
            goal: user.goal,
            skills: user.skills
        });

    } catch (error) {
        console.error(
            "Create user error:",
            error
        );

        res.status(500).json({
            error: "Failed to create user"
        });
    }
});


/* ============================================================
   GET ALL USERS
   GET /api/users
   ============================================================ */

router.get("/", async (req, res) => {
    try {
        const users =
            await User.find().sort({
                createdAt: -1
            });

        res.json(users);

    } catch (error) {
        console.error(
            "Get users error:",
            error
        );

        res.status(500).json({
            error: "Failed to get users"
        });
    }
});


/* ============================================================
   GET ONE USER
   GET /api/users/:userId
   ============================================================ */

router.get("/:userId", async (req, res) => {
    try {
        const user =
            await User.findById(
                req.params.userId
            );

        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        res.json({
            id: user._id.toString(),
            name: user.name,
            college: user.college,
            sem: user.sem,
            goal: user.goal,
            skills: user.skills
        });

    } catch (error) {
        console.error(
            "Get user error:",
            error
        );

        res.status(400).json({
            error: "Invalid user ID"
        });
    }
});


/* ============================================================
   UPDATE PROFILE
   PUT /api/users/:userId/profile
   ============================================================ */

router.put(
    "/:userId/profile",
    async (req, res) => {
        try {
            const {
                name,
                college,
                sem
            } = req.body;

            if (
                name !== undefined &&
                (
                    typeof name !== "string" ||
                    name.trim() === ""
                )
            ) {
                return res.status(400).json({
                    error: "name cannot be empty"
                });
            }

            const updates = {};

            if (name !== undefined) {
                updates.name =
                    name.trim();
            }

            if (college !== undefined) {
                updates.college =
                    typeof college === "string"
                        ? college.trim()
                        : "";
            }

            if (sem !== undefined) {
                updates.sem =
                    typeof sem === "string"
                        ? sem.trim()
                        : "";
            }

            const user =
                await User.findByIdAndUpdate(
                    req.params.userId,
                    updates,
                    {
                        new: true,
                        runValidators: true
                    }
                );

            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }

            res.json({
                id: user._id.toString(),
                name: user.name,
                college: user.college,
                sem: user.sem,
                goal: user.goal,
                skills: user.skills
            });

        } catch (error) {
            console.error(
                "Update profile error:",
                error
            );

            res.status(400).json({
                error: "Invalid user ID"
            });
        }
    }
);


/* ============================================================
   UPDATE USER GOAL
   PUT /api/users/:userId/goal
   ============================================================ */

router.put(
    "/:userId/goal",
    async (req, res) => {
        try {
            const { goal } = req.body;

            if (
                !goal ||
                typeof goal !== "string"
            ) {
                return res.status(400).json({
                    error: "goal is required"
                });
            }

            const normalizedGoal =
                goal.trim().toLowerCase();

            const selectedGoal =
                goals.find(
                    item =>
                        item.id ===
                            normalizedGoal ||
                        item.label.toLowerCase() ===
                            normalizedGoal
                );

            if (!selectedGoal) {
                return res.status(404).json({
                    error: "Goal not found"
                });
            }

            const user =
                await User.findByIdAndUpdate(
                    req.params.userId,
                    {
                        goal:
                            selectedGoal.id
                    },
                    {
                        new: true
                    }
                );

            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }

            res.json({
                id: user._id.toString(),
                name: user.name,
                college: user.college,
                sem: user.sem,
                goal: user.goal,
                skills: user.skills
            });

        } catch (error) {
            console.error(
                "Update goal error:",
                error
            );

            res.status(400).json({
                error: "Invalid user ID"
            });
        }
    }
);


/* ============================================================
   UPDATE USER SKILLS
   PUT /api/users/:userId/skills
   ============================================================ */

router.put(
    "/:userId/skills",
    async (req, res) => {
        try {
            const { skills } = req.body;

            if (!Array.isArray(skills)) {
                return res.status(400).json({
                    error:
                        "skills must be an array"
                });
            }

            const user =
                await User.findByIdAndUpdate(
                    req.params.userId,
                    {
                        skills
                    },
                    {
                        new: true
                    }
                );

            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }

            res.json({
                id: user._id.toString(),
                name: user.name,
                college: user.college,
                sem: user.sem,
                goal: user.goal,
                skills: user.skills
            });

        } catch (error) {
            console.error(
                "Update skills error:",
                error
            );

            res.status(400).json({
                error: "Invalid user ID"
            });
        }
    }
);


/* ============================================================
   GET USER PROGRESS
   GET /api/users/:userId/progress
   ============================================================ */

router.get(
    "/:userId/progress",
    async (req, res) => {
        try {
            const user =
                await User.findById(
                    req.params.userId
                );

            if (!user) {
                return res.status(404).json({
                    error: "User not found"
                });
            }

            if (!user.goal) {
                return res.status(400).json({
                    error:
                        "User has no goal"
                });
            }

            const goal =
                goals.find(
                    item =>
                        item.id ===
                        user.goal
                );

            if (!goal) {
                return res.status(404).json({
                    error: "Goal not found"
                });
            }

            const matchedSkills =
                getMatchedSkills(
                    goal.skills,
                    user.skills
                );

            const gaps =
                calculateSkillGaps(
                    goal.skills,
                    user.skills
                );

            const readiness =
                calculateReadiness(
                    goal.skills,
                    user.skills
                );

            res.json({
                userId:
                    user._id.toString(),

                name:
                    user.name,

                college:
                    user.college,

                sem:
                    user.sem,

                goal:
                    goal.label,

                goalId:
                    goal.id,

                skills:
                    goal.skills,

                userSkills:
                    user.skills,

                have:
                    matchedSkills,

                gaps,

                readiness
            });

        } catch (error) {
            console.error(
                "Progress error:",
                error
            );

            res.status(400).json({
                error: "Invalid user ID"
            });
        }
    }
);


module.exports = router;