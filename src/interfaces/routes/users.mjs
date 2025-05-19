import { Router } from "express";
import {getAllUsers, registerUserController } from "../controllers/userController.mjs";
import { validateUser } from "../schemas/validationUserSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";
import { validateAuth } from "../../infrastructure/middlewares/validateAuth.mjs";

const router = Router();

router.post("/api/users", ...schemaValidator(validateUser), registerUserController)

router.get("/api/users", validateAuth,getAllUsers)


export default router