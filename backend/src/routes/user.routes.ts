import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaReq, userUpdateSchema } from "../schemas/user.schemas";
import {
    deleteUserController,
    patchUserController,
    postUserController,
} from "../controllers/user.controllers";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { ensureAccountOwner } from "../middlewares/user/ensureAccountOwner.middleware";

export const userRoutes = Router();

userRoutes.post("/", ensureDataIsValid(userSchemaReq), postUserController);
userRoutes.patch(
    "/:id",
    ensureDataIsValid(userUpdateSchema),
    verifyToken,
    ensureAccountOwner,
    patchUserController
);
userRoutes.delete(
    "/:id",
    verifyToken,
    ensureAccountOwner,
    deleteUserController
);
