import jwt from "jsonwebtoken";
import config from "../config/config.js";
import userModel from "../models/userModel.js";
import sessionModel from "../models/sessionModel.js";

export async function isAuthenticated(req, res, next) {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Unauthorized"
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, config.JWT_SECRET);

        // check session
        const session = await sessionModel.findById(decoded.sessionId);

        if (!session || session.revoked) {
            return res.status(401).json({
                message: "Session expired"
            });
        }

        const user = await userModel
            .findById(decoded.id)
            .select("-password");

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        req.user = user;

        next();

    } catch (error) {

        return res.status(401).json({
            message: error.message
        });

    }
}