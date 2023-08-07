import { loginSchema } from "../schemas/login.schema";

export type TLogin = Zod.infer<typeof loginSchema>;
