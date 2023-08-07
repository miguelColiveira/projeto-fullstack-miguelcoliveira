import { Router } from "express";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import {
    contactsSchemaReq,
    contactsUpdateSchemaReq,
} from "../schemas/contacts.schema";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import {
    createController,
    deleteController,
    getAllController,
    patchContactController,
} from "../controllers/contacts.controller";

export const contactsRoutes = Router();

contactsRoutes.post(
    "/",
    ensureDataIsValid(contactsSchemaReq),
    verifyToken,
    createController
);
contactsRoutes.get("/", verifyToken, getAllController);
contactsRoutes.patch(
    "/:id",
    ensureDataIsValid(contactsUpdateSchemaReq),
    verifyToken,
    patchContactController
);
contactsRoutes.delete("/:id", verifyToken, deleteController);
