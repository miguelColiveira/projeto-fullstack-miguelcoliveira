import { DeepPartial } from "typeorm";
import { User } from "../entities/user.entity";
import {
    userSchema,
    userSchemaReq,
    userSchemaRes,
} from "../schemas/user.schemas";

export type TUser = Zod.infer<typeof userSchema>;
export type TUserReq = Zod.infer<typeof userSchemaReq>;
export type TUserRes = Zod.infer<typeof userSchemaRes>;
export type TUserUpdate = DeepPartial<TUserReq>;
