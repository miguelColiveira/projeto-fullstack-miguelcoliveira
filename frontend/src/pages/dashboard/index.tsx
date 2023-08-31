import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Modal from "react-modal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TContactReq, contactsSchemaReq } from "./validation";
import { SubmitHandler } from "react-hook-form";

export interface IContact {
    id: number;
    email: string;
    fone_number: string;
    full_name: string;
    created_at: Date | string;
    userId: number;
}

Modal.setAppElement("#root");

export function Dashboard() {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    useEffect(() => {
        (async () => {
            const response = await api.get("/contacts");
            setContacts(response.data);
        })();
    }, []);

    const { register, handleSubmit, reset } = useForm<TContactReq>({
        resolver: zodResolver(contactsSchemaReq),
    });

    async function createContact(data: TContactReq) {
        const response = await api.post("/contacts", data);

        setContacts((previousList) => [response.data, ...previousList]);
    }

    const submit: SubmitHandler<TContactReq> = (formData: TContactReq) => {
        createContact(formData);
        reset();
        closeModal();
    };

    return (
        <>
            <header>
                <h1>Dashboard</h1>
                <button type="button" onClick={openModal}>
                    Add new contact
                </button>
            </header>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <h3>{contact.full_name}</h3>
                        <span>{contact.email}</span>
                        <span>{contact.fone_number}</span>
                    </li>
                ))}
            </ul>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Adicionar contato">
                <h3>New contact</h3>
                <form onSubmit={handleSubmit(submit)}>
                    <button type="button" onClick={closeModal}>
                        Close
                    </button>
                    <label htmlFor="full_name">Full name</label>
                    <input type="text" id="full_name" {...register("full_name")} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")} />
                    <label htmlFor="fone_number">Fone number</label>
                    <input type="text" id="fone_number" {...register("fone_number")} />
                    <button type="submit">Add contact</button>
                </form>
            </Modal>
        </>
    );
}
