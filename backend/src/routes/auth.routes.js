import { Router } from "express";
import { isAuthenticated } from "../middleware/protectRoute.js";
import * as authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", authController.register);

authRouter.post("/login", authController.login);

authRouter.get("/test", isAuthenticated, authController.test);

authRouter.get("/refresh-token", isAuthenticated, authController.refreshToken);

authRouter.get("/logout", isAuthenticated, authController.logout);

authRouter.get("/logout-all", isAuthenticated, authController.logoutAll);


export default authRouter;