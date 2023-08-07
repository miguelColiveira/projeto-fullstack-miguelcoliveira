import { userRepository } from "../../data-source";
import { TUserRes, TUserUpdate } from "../../interfaces/user.interfaces";
import { userSchemaRes } from "../../schemas/user.schemas";

export async function patchUserService(
    data: TUserUpdate,
    userId: number
): Promise<TUserRes> {
    const oldUser = await userRepository.findOneBy({ id: userId });

    const newUser = userRepository.create({
        ...oldUser,
        ...data,
    });
    await userRepository.save(newUser);
    return userSchemaRes.parse(newUser);
}
