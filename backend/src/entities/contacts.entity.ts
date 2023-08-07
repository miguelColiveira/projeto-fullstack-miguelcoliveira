import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("contacts")
export class Contact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar" })
    full_name: string;

    @Column({ type: "varchar" })
    email: string;

    @Column({ type: "varchar" })
    fone_number: string;

    @CreateDateColumn({ type: "date" })
    created_at: string | Date;

    @ManyToOne(() => User, { eager: true })
    user: User;
}
