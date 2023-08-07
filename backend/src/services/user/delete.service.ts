import { userRepository } from "../../data-source";

export async function deleteUserService(userId: number): Promise<void> {
    const user = await userRepository.findOneBy({ id: userId });
    await userRepository.remove(user!);
}
