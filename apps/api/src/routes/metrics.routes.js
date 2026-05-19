import express from "express";

import { pool } from "../config/database.js";

import { authenticate } from "../middleware/auth.middleware.js";

import { tenantResolver } from "../middleware/tenant.middleware.js";

import { ingestMetrics } from "../controllers/metrics.controller.js";

const router = express.Router();

router.get(
    "/metrics",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const result = await pool.query(
                `
                SELECT *
                FROM metrics
                WHERE tenant_id = $1
                ORDER BY timestamp DESC
                `,
                [req.tenantId]
            );

            res.json({
                status: "success",
                tenant_id: req.tenantId,
                metrics: result.rows
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message: "Failed to retrieve metrics"
            });
        }
    }
);

router.post(
    "/metrics",
    authenticate,
    tenantResolver,
    ingestMetrics
);

router.get(
    "/nodes/:nodeId/metrics",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const result = await pool.query(
                `
                SELECT *
                FROM metrics
                WHERE tenant_id = $1
                AND node_id = $2
                ORDER BY timestamp DESC
                `,
                [
                    req.tenantId,
                    req.params.nodeId
                ]
            );

            res.json({
                status: "success",
                node_id: req.params.nodeId,
                metrics: result.rows
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message: "Failed to retrieve node metrics"
            });
        }
    }
);

export default router;