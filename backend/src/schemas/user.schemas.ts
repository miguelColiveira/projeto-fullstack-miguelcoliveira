import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    full_name: z.string(),
    fone_number: z.string(),
    email: z.string().email(),
    password: z.string(),
    created_at: z.date().or(z.string()),
});

export const userSchemaReq = userSchema.omit({ id: true, created_at: true });

export const userSchemaRes = userSchema.omit({ password: true });

export const userUpdateSchema = userSchema
    .omit({ id: true, createdAt: true })
    .partial();
