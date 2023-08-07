import { userRepository } from "../../data-source";
import { User } from "../../entities/user.entity";
import { TUser, TUserRes } from "../../interfaces/user.interfaces";
import { userSchemaRes } from "../../schemas/user.schemas";

export async function createUserService(data: TUser): Promise<TUserRes> {
    const newUser: User = userRepository.create(data);

    await userRepository.save(newUser);

    return userSchemaRes.parse(newUser);
}
