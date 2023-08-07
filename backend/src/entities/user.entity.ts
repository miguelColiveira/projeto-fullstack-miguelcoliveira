import { getRounds, hashSync } from "bcryptjs";
import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar" })
    full_name: string;

    @Column({ type: "varchar", unique: true })
    email: string;

    @Column({ type: "varchar" })
    password: string;

    @Column({ type: "varchar" })
    fone_number: string;

    @CreateDateColumn({ type: "date" })
    created_at: string | Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted = getRounds(this.password);

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}
