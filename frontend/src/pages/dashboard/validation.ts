import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    fone_number: z.string(),
    email: z.string().email(),
    password: z.string(),
    created_at: z.date().or(z.string()),
});

export const contactSchema = z.object({
    id: z.number(),
    email: z.string().email(),
    full_name: z.string(),
    fone_number: z.string(),
    created_at: z.date().or(z.string()),
    user: userSchema,
});

export const contactsSchemaReq = contactSchema.omit({
    id: true,
    created_at: true,
    user: true,
});

export type TContactReq = z.infer<typeof contactsSchemaReq>;
