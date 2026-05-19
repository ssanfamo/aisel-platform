import { pool } from "../config/database.js";

export async function analyzeNodeTrends(
    nodeId,
    tenantId
) {

    const result = await pool.query(
        `
        SELECT *
        FROM metrics
        WHERE node_id = $1
        AND tenant_id = $2
        ORDER BY timestamp DESC
        LIMIT 10
        `,
        [nodeId, tenantId]
    );

    const metrics = result.rows;

    if (metrics.length === 0) {

        return {
            trend: "unknown"
        };
    }

    const cpuAverage =
        metrics.reduce(
            (sum, m) => sum + Number(m.cpu_usage),
            0
        ) / metrics.length;

    const memoryAverage =
        metrics.reduce(
            (sum, m) => sum + Number(m.memory_usage),
            0
        ) / metrics.length;

    const diskAverage =
        metrics.reduce(
            (sum, m) => sum + Number(m.disk_usage),
            0
        ) / metrics.length;

    let trend = "stable";

    const latest = metrics[0];
    const oldest = metrics[metrics.length - 1];

    if (
        latest.cpu_usage >
        oldest.cpu_usage
    ) {
        trend = "worsening";
    }

    if (
        latest.cpu_usage <
        oldest.cpu_usage
    ) {
        trend = "improving";
    }

    return {

        cpu_average:
            Number(cpuAverage.toFixed(1)),

        memory_average:
            Number(memoryAverage.toFixed(1)),

        disk_average:
            Number(diskAverage.toFixed(1)),

        trend
    };
}