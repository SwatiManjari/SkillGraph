require("dotenv").config();

const express = require("express");
const path = require("path");

const connectDB = require("./config/db");

const app = express();

const PORT =
    process.env.PORT || 3000;


/* ============================================================
   ROUTES
   ============================================================ */

const goalRoutes =
    require("./routes/goalRoutes");

const skillRoutes =
    require("./routes/skillRoutes");

const userRoutes =
    require("./routes/userRoutes");

const aiRoutes =
    require("./routes/aiRoutes");

const resourceRoutes =
    require("./routes/resourcesRoutes");


/* ============================================================
   MIDDLEWARE
   ============================================================ */

app.use(express.json());

app.use(
    express.static(
        path.join(
            __dirname,
            "public"
        )
    )
);


/* ============================================================
   BASIC API TEST
   ============================================================ */

app.get("/api", (req, res) => {
    res.json({
        message:
            "SkillGraph API is working!"
    });
});


/* ============================================================
   HEALTH CHECK
   ============================================================ */

app.get(
    "/api/health",
    (req, res) => {
        res.json({
            status: "OK"
        });
    }
);


/* ============================================================
   API ROUTES
   ============================================================ */

app.use(
    "/api/goals",
    goalRoutes
);

app.use(
    "/api/skills",
    skillRoutes
);

app.use(
    "/api/users",
    userRoutes
);

app.use(
    "/api/ai",
    aiRoutes
);

app.use(
    "/api/resources",
    resourceRoutes
);


/* ============================================================
   UNKNOWN API ROUTE
   ============================================================ */

app.use(
    "/api",
    (req, res) => {
        res.status(404).json({
            error:
                "API route not found"
        });
    }
);


/* ============================================================
   START SERVER
   ============================================================ */

async function startServer() {
    await connectDB();

    app.listen(
        PORT,
        () => {
            console.log(
                `SkillGraph server running on http://localhost:${PORT}`
            );
        }
    );
}

startServer();