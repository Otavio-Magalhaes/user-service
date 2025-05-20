import { Router } from "express";
import {getAllUsers, getUserByEmail, registerUserController } from "../controllers/userController.mjs";
import { validateUser } from "../schemas/validationUserSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";
import { validateAuth } from "../../infrastructure/middlewares/validateAuth.mjs";
import { validateInternalAPIKey } from "../../infrastructure/middlewares/validateInternalAPIKey.mjs";

const router = Router();

router.post("/api/users", ...schemaValidator(validateUser), registerUserController)

router.get("/api/users", validateAuth,getAllUsers)

router.post("/api/users/email", validateInternalAPIKey,getUserByEmail)


export default router 