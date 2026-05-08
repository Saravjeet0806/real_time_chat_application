import express from "express";
import {isAuthenticated} from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to protected chat route",
        user: req.user,
    });
});

export default router;