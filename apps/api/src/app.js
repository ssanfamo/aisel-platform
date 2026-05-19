import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import http from "http";

import { initializeSocket }
from "./socket.js";

import { pool }
from "./config/database.js";

import authRoutes
from "./routes/auth.routes.js";

import protectedRoutes
from "./routes/protected.routes.js";

import metricsRoutes
from "./routes/metrics.routes.js";

import nodesRoutes
from "./routes/nodes.routes.js";

dotenv.config();

const app = express();

const server =
    http.createServer(app);

initializeSocket(server);

app.use(cors());

app.use(express.json());

app.get("/", async (req, res) => {

    try {

        const result =
            await pool.query(
                "SELECT * FROM tenants"
            );

        res.json({
            status: "success",
            tenants: result.rows
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message:
                "Database connection failed"
        });
    }
});

app.use(
    "/api/auth",
    authRoutes
);

app.use(
    "/api",
    protectedRoutes
);

app.use(
    "/api",
    metricsRoutes
);

app.use(
    "/api",
    nodesRoutes
);

const PORT =
    process.env.PORT || 4000;

server.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );
});