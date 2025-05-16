import { Router } from "express";
import {registerUserController } from "../controllers/userController.mjs";
import { validateUser } from "../schemas/validationUserSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";

const router = Router();

router.post("/api/users", ...schemaValidator(validateUser), registerUserController)

export default router