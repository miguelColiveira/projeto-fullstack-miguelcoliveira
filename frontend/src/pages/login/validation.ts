import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Must be a valid e-mail.").nonempty("E-mail required!"),
    password: z.string().nonempty("Password required!"),
});

export type TLoginData = z.infer<typeof loginSchema>;
