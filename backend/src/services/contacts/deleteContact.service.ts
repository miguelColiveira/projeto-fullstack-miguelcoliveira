import { contactsRepository } from "../../data-source";

export async function deleteContactService(contactId: number): Promise<void> {
    const contact = await contactsRepository.findOneBy({ id: contactId });

    await contactsRepository.remove(contact!);
}
