import { pool } from "../config/database.js";

export async function evaluateMetricAlert(metric) {

    try {

        let severity = null;
        let message = null;

        if (metric.cpu_usage >= 90) {

            severity = "critical";

            message =
                `Critical CPU usage detected (${metric.cpu_usage}%)`;

        } else if (metric.cpu_usage >= 80) {

            severity = "warning";

            message =
                `High CPU usage detected (${metric.cpu_usage}%)`;
        }

        if (!severity) {
            return;
        }

        await pool.query(
            `
            INSERT INTO alerts (
                tenant_id,
                node_id,
                severity,
                message,
                status
            )
            VALUES ($1, $2, $3, $4, $5)
            `,
            [
                metric.tenant_id,
                metric.node_id,
                severity,
                message,
                "active"
            ]
        );

        console.log(
            `ALERT GENERATED: ${message}`
        );

    } catch (error) {

        console.error(
            "Alert evaluation failed:",
            error
        );
    }
}