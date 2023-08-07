import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
// import { listContactsService } from "../services/contacts/listContacts.service";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";

export async function createController(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.id;
    const newContact = await createContactService(req.body, userId);

    return res.status(201).json(newContact);
}

export async function getAllController(req: Request, res: Response): Promise<Response> {
    const userId = Number(res.locals.id);

    const contacts = await listContactsService(userId);

    return res.status(201).json(contacts);
}

export async function patchContactController(req: Request, res: Response): Promise<Response> {
    const contactIdId = Number(req.params.id);
    const updateContact = await updateContactService(req.body, contactIdId);
    return res.status(201).json(updateContact);
}

export async function deleteController(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    await deleteContactService(id);

    return res.status(201).send();
}
