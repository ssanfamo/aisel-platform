import { pool } from "../config/database.js";

import {
    calculateNodeHealth
} from "./health.service.js";

export async function generateDiagnostics(
    nodeId,
    tenantId
) {

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
            status: "unknown",
            diagnostics: [
                "No telemetry available"
            ],
            recommendations: []
        };
    }

    const metric = metricResult.rows[0];

    const health =
        await calculateNodeHealth(
            nodeId,
            tenantId
        );

    const diagnostics = [];
    const recommendations = [];

    if (metric.cpu_usage > 90) {

        diagnostics.push(
            "CPU usage is critically high"
        );

        recommendations.push(
            "Scale compute resources"
        );

        recommendations.push(
            "Inspect running workloads"
        );
    }

    if (metric.memory_usage > 85) {

        diagnostics.push(
            "Memory usage is elevated"
        );

        recommendations.push(
            "Investigate memory-intensive services"
        );
    }

    if (metric.disk_usage > 85) {

        diagnostics.push(
            "Disk usage is critically high"
        );

        recommendations.push(
            "Increase storage capacity"
        );
    }

    const alertResult = await pool.query(
        `
        SELECT *
        FROM alerts
        WHERE node_id = $1
        AND tenant_id = $2
        AND status = 'active'
        `,
        [nodeId, tenantId]
    );

    if (alertResult.rows.length > 0) {

        diagnostics.push(
            "Active infrastructure alerts detected"
        );
    }

    return {

        health_score:
            health.health_score,

        status:
            health.status,

        diagnostics,

        recommendations
    };
}