import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { pool } from "../config/database.js";

dotenv.config();

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1 LIMIT 1",
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                status: "error",
                message: "Invalid credentials"
            });
        }

        const user = result.rows[0];

        // TEMPORARY DEV MODE
        // password check skipped initially

        const token = jwt.sign(
            {
                id: user.id,
                tenant_id: user.tenant_id,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.json({
            status: "success",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                tenant_id: user.tenant_id,
                role: user.role
            }
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            status: "error",
            message: "Login failed"
        });
    }
}