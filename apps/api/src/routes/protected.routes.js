import express from "express";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get(
    "/dashboard",
    authenticate,
    async (req, res) => {

        res.json({
            status: "success",
            message: "Protected dashboard access granted",
            user: req.user
        });
    }
);

export default router;