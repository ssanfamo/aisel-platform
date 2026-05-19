import { pool } from "../config/database.js";

export async function createNode(req, res) {

    try {

        const tenantId = req.tenantId;

        const {
            name,
            type,
            status
        } = req.body;

        const result = await pool.query(
            `
            INSERT INTO infrastructure_nodes (
                tenant_id,
                name,
                type,
                status
            )
            VALUES ($1, $2, $3, $4)
            RETURNING *
            `,
            [
                tenantId,
                name,
                type,
                status
            ]
        );

        res.status(201).json({
            status: "success",
            node: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Failed to create node"
        });
    }
}

export async function getNodes(req, res) {

    try {

        const result = await pool.query(
            `
            SELECT *
            FROM infrastructure_nodes
            WHERE tenant_id = $1
            ORDER BY created_at DESC
            `,
            [req.tenantId]
        );

        res.json({
            status: "success",
            nodes: result.rows
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Failed to retrieve nodes"
        });
    }
}