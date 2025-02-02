import { Router } from "express";
import { enableTwoFactorAuthentication } from "../controllers/twoFactorAuthController";
import { validateTwoFactorAuthentication } from "../controllers/validateTwoFactorAuthentication";   
import { authenticateUser } from "../middlewares/authMiddleware"; // Middleware de autenticación

const router = Router();

router.post("/enable-2fa", authenticateUser as any, enableTwoFactorAuthentication as any);
router.post("/validate-2fa", authenticateUser as any, validateTwoFactorAuthentication as any);

export default router;
