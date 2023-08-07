import { DeepPartial } from "typeorm";
import { Contact } from "../entities/contacts.entity";
import {
    contactSchemaRes,
    contactsArraySchema,
    contactsSchemaReq,
} from "../schemas/contacts.schema";

export type TContact = Contact;
export type TContactReq = Zod.infer<typeof contactsSchemaReq>;
export type TContactArray = Zod.infer<typeof contactsArraySchema>;
export type TContactRes = Zod.infer<typeof contactSchemaRes>;
export type TContactUpdate = DeepPartial<TContactReq>;
