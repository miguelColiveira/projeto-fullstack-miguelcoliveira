import { userRepository } from "../../data-source";
import { contactsSchemaRes } from "../../schemas/contacts.schema";

export async function listContactsService(userId: number): Promise<any> {
    const user = await userRepository.findOne({
        where: { id: userId },
        relations: { contacts: true },
    });

    return contactsSchemaRes.parse(user?.contacts);
}
