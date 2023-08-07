import { contactsRepository } from "../../data-source";
import {
    TContactRes,
    TContactUpdate,
} from "../../interfaces/contacts.interfaces";
import { contactSchemaRes } from "../../schemas/contacts.schema";

export async function updateContactService(
    data: TContactUpdate,
    contactId: number
): Promise<TContactRes> {
    const oldContact = await contactsRepository.findOneBy({
        id: contactId,
    });

    const newContactData = contactsRepository.create({
        ...oldContact,
        ...data,
    });

    await contactsRepository.save(newContactData);

    return contactSchemaRes.parse(newContactData);
}
