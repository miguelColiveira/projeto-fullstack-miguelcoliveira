import { contactsRepository, userRepository } from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { AppError } from "../../errors/AppError";
import { TContact, TContactRes } from "../../interfaces/contacts.interfaces";
import { contactSchemaRes } from "../../schemas/contacts.schema";

export async function createContactService(
    data: TContact,
    userId: number
): Promise<TContactRes> {
    const user = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    if (!user) {
        throw new AppError("user not found", 404);
    }

    const newContact: Contact = contactsRepository.create({ ...data, user });

    await contactsRepository.save(newContact);

    return contactSchemaRes.parse(newContact);
}
