import { z } from "zod";
import { userSchema } from "./user.schemas";

export const contactsSchema = z.object({
    id: z.number(),
    email: z.string().email(),
    full_name: z.string(),
    fone_number: z.string(),
    created_at: z.date().or(z.string()),
    user: userSchema,
});

export const contactsSchemaReq = contactsSchema.omit({
    id: true,
    created_at: true,
    user: true,
});

export const contactsUpdateSchemaReq = contactsSchema.omit({ id: true, created_at: true, user: true }).partial();

export const contactsArraySchema = z.array(contactsSchema);

export const contactSchemaRes = contactsSchema.omit({ user: true });

export const contactsSchemaRes = z.array(contactSchemaRes);
