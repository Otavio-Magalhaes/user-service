import { Router } from "express";
import {getAllUsers, getUserByEmail, getUserById, registerUserController } from "../controllers/userController.mjs";
import { validateUser } from "../schemas/validationUserSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";
import { validateAuth } from "../../infrastructure/middlewares/validateAuth.mjs";
import { validateInternalAPIKey } from "../../infrastructure/middlewares/validateInternalAPIKey.mjs";
import { checkRole } from "../../infrastructure/middlewares/checkRole.mjs";

const router = Router();

router.get("/api/users", validateAuth, checkRole('ADMIN'), getAllUsers)

router.get("/api/users/:id", validateAuth, getUserById)

router.post("/api/users", ...schemaValidator(validateUser), registerUserController)

router.post("/api/users/email", validateInternalAPIKey,getUserByEmail)

export default router 