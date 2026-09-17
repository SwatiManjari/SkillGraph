const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// IMPORT ROUTES
const goalRoutes = require("./routes/goalRoutes");
const skillRoutes = require("./routes/skillRoutes");
const userRoutes = require("./routes/userRoutes");
const aiRoutes = require("./routes/aiRoutes");

// MIDDLEWARE

// Allows Express to read JSON request bodies
app.use(express.json());

// Serves files from public/
app.use(express.static(path.join(__dirname, "public")));

// BASIC API ROUTE

app.get("/api", (req, res) => {
    res.json({
        message: "SkillGraph API is working!"
    });
});

// HEALTH CHECK

app.get("/api/health", (req, res) => {
    res.json({
        status: "OK"
    });
});

// GOALS API

app.use("/api/goals", goalRoutes);

// SKILLS API

app.use("/api/skills", skillRoutes);

// USERS API

app.use("/api/users", userRoutes);

// AI API

app.use("/api/ai", aiRoutes);

// API 404 HANDLER

app.use("/api", (req, res) => {
    res.status(404).json({
        error: "API route not found"
    });
});

// START SERVER

app.listen(PORT, () => {
    console.log(
        `SkillGraph server running on http://localhost:${PORT}`
    );
});