import { pool } from "../config/database.js";

export async function calculateNodeHealth(nodeId, tenantId) {

    const metricResult = await pool.query(
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

    if (metricResult.rows.length === 0) {

        return {
            health_score: 100,
            status: "healthy"
        };
    }

    const metric = metricResult.rows[0];

    let score = 100;

    if (metric.cpu_usage > 90) {
        score -= 30;
    }

    if (metric.memory_usage > 85) {
        score -= 25;
    }

    if (metric.disk_usage > 85) {
        score -= 25;
    }

    const alertResult = await pool.query(
        `
        SELECT *
        FROM alerts
        WHERE tenant_id = $1
        AND node_id = $2
        AND severity = 'critical'
        AND status = 'active'
        `,
        [tenantId, nodeId]
    );

    if (alertResult.rows.length > 0) {
        score -= 20;
    }

    let status = "healthy";

    if (score < 80) {
        status = "degraded";
    }

    if (score < 50) {
        status = "critical";
    }

    return {
        health_score: score,
        status
    };
}