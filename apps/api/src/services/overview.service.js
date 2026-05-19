import { pool } from "../config/database.js";

import { calculateNodeHealth }
from "./health.service.js";

import { generateDiagnostics }
from "./diagnostics.service.js";

import { analyzeNodeTrends }
from "./trend.service.js";

export async function getNodeOverview(
    nodeId,
    tenantId
) {

    const latestMetrics = await pool.query(
        `
        SELECT *
        FROM metrics
        WHERE node_id = $1
        AND tenant_id = $2
        ORDER BY timestamp DESC
        LIMIT 1
        `,
        [nodeId, tenantId]
    );

    const alerts = await pool.query(
        `
        SELECT *
        FROM alerts
        WHERE node_id = $1
        AND tenant_id = $2
        AND status = 'active'
        `,
        [nodeId, tenantId]
    );

    const health =
        await calculateNodeHealth(
            nodeId,
            tenantId
        );

    const diagnostics =
        await generateDiagnostics(
            nodeId,
            tenantId
        );

    const trends =
        await analyzeNodeTrends(
            nodeId,
            tenantId
        );

    return {
        latest_metrics:
            latestMetrics.rows[0] || null,

        active_alerts:
            alerts.rows,

        health,

        diagnostics,

        trends
    };
}