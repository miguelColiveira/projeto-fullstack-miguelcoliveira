import { z } from "zod";

export const registerSchema = z.object({
    email: z.string().email("Must be a valid e-mail.").nonempty("E-mail required!"),
    password: z.string().nonempty("Password required!"),
    full_name: z.string().nonempty("Name required!"),
    fone_number: z.string().nonempty("Fone number required!"),
});

export type TRegisterData = z.infer<typeof registerSchema>;
