import { Router } from "express";
import {deleteUser, getAllUsers, getUserByEmail, getUserById, registerUserController, updateUserController } from "../controllers/userController.mjs";
import { validateUpdateUser, validateUser } from "../schemas/validationUserSchema.mjs";
import { schemaValidator } from "../../infrastructure/middlewares/schemaValidator.mjs";
import { validateAuth } from "../../infrastructure/middlewares/validateAuth.mjs";
import { validateInternalAPIKey } from "../../infrastructure/middlewares/validateInternalAPIKey.mjs";
import { checkRole } from "../../infrastructure/middlewares/checkRole.mjs";

const router = Router();

router.get("/api/users", validateAuth, checkRole, getAllUsers)

router.get("/api/users/:id", validateAuth, getUserById)

router.post("/api/users", ...schemaValidator(validateUser), registerUserController)

router.post("/api/users/email", validateInternalAPIKey,getUserByEmail)

router.patch("/api/users/:id", validateAuth,...schemaValidator(validateUpdateUser) ,updateUserController)

router.delete("/api/users/:id", validateAuth, checkRole, deleteUser)

export default router 