import { pool } from "../config/database.js";

import { getIO } from "../socket.js";

import {
    evaluateMetricAlert
} from "../services/alert.service.js";

export async function ingestMetrics(req, res) {

    try {

        const tenantId = req.tenantId;

        const {
            node_id,
            cpu_usage,
            memory_usage,
            disk_usage,
            network_in,
            network_out
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO metrics (
                tenant_id,
                node_id,
                cpu_usage,
                memory_usage,
                disk_usage,
                network_in,
                network_out
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `,
            [
                tenantId,
                node_id,
                cpu_usage,
                memory_usage,
                disk_usage,
                network_in,
                network_out
            ]
        );

        const insertedMetric = result.rows[0];

        const io = getIO();

        io.emit("metrics:new", {
            node_id: insertedMetric.node_id,
            tenant_id: insertedMetric.tenant_id,
            cpu_usage: insertedMetric.cpu_usage,
            memory_usage: insertedMetric.memory_usage,
            disk_usage: insertedMetric.disk_usage,
            timestamp: insertedMetric.timestamp
        });

        console.log(
            "ALERT ENGINE RECEIVED:",
            insertedMetric
        );

        await evaluateMetricAlert(
            insertedMetric
        );

        res.status(201).json({
            status: "success",
            metric: insertedMetric
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Failed to ingest metrics"
        });
    }
}