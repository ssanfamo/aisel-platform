import express from "express";

import {
    createNode,
    getNodes
} from "../controllers/nodes.controller.js";

import {
    calculateNodeHealth
} from "../services/health.service.js";

import {
    generateDiagnostics
} from "../services/diagnostics.service.js";

import {
    analyzeNodeTrends
} from "../services/trend.service.js";

import {
    authenticate
} from "../middleware/auth.middleware.js";

import {
    tenantResolver
} from "../middleware/tenant.middleware.js";

import { getNodeOverview } from "../services/overview.service.js";

const router = express.Router();

router.post(
    "/nodes",
    authenticate,
    tenantResolver,
    createNode
);

router.get(
    "/nodes",
    authenticate,
    tenantResolver,
    getNodes
);

router.get(
    "/nodes/:nodeId/health",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const health =
                await calculateNodeHealth(
                    req.params.nodeId,
                    req.tenantId
                );

            res.json({
                status: "success",
                node_id: req.params.nodeId,
                health
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message:
                    "Failed to calculate health"
            });
        }
    }
);

router.get(
    "/nodes/:nodeId/diagnostics",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const diagnostics =
                await generateDiagnostics(
                    req.params.nodeId,
                    req.tenantId
                );

            res.json({
                status: "success",
                node_id: req.params.nodeId,
                diagnostics
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message:
                    "Failed to generate diagnostics"
            });
        }
    }
);

router.get(
    "/nodes/:nodeId/trends",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const trends =
                await analyzeNodeTrends(
                    req.params.nodeId,
                    req.tenantId
                );

            res.json({
                status: "success",
                node_id: req.params.nodeId,
                trends
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message:
                    "Failed to analyze trends"
            });
        }
    }
);

router.get(
    "/nodes/:nodeId/overview",
    authenticate,
    tenantResolver,

    async (req, res) => {

        try {

            const overview =
                await getNodeOverview(
                    req.params.nodeId,
                    req.tenantId
                );

            res.json({
                status: "success",
                node_id: req.params.nodeId,
                overview
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                status: "error",
                message:
                    "Failed to generate overview"
            });
        }
    }
);

export default router;