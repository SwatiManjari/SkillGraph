const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;


// Routes
const goalRoutes = require("./routes/goalRoutes");
const skillRoutes = require("./routes/skillRoutes");
const userRoutes = require("./routes/userRoutes");
const aiRoutes = require("./routes/aiRoutes");
const resourceRoutes = require("./routes/resourcesRoutes");


// Middleware
app.use(express.json());

app.use(
    express.static(
        path.join(__dirname, "public")
    )
);


// Basic API test
app.get("/api", (req, res) => {

    res.json({
        message: "SkillGraph API is working!"
    });

});


// Health check
app.get("/api/health", (req, res) => {

    res.json({
        status: "OK"
    });

});


// API routes
app.use("/api/goals", goalRoutes);

app.use("/api/skills", skillRoutes);

app.use("/api/users", userRoutes);

app.use("/api/ai", aiRoutes);

app.use("/api/resources", resourceRoutes);


// Unknown API route
app.use("/api", (req, res) => {

    res.status(404).json({
        error: "API route not found"
    });

});


// Start server
app.listen(PORT, () => {

    console.log(
        `SkillGraph server running on http://localhost:${PORT}`
    );

});