import { DataSource, DataSourceOptions, Repository } from "typeorm";
import path from "node:path";
import "dotenv/config";
import { User } from "./entities/user.entity";
import { Contact } from "./entities/contacts.entity";

const DataSourceConfig = (): DataSourceOptions => {
    const entitiesPath = path.join(__dirname, "entities/**.{js,ts}");
    const migrationsPath = path.join(__dirname, "migrations/**.{js,ts}");

    if (!process.env.DATABASE_URL) {
        throw new Error("Env var DATABASE_URL does not exists");
    }

    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        entities: [entitiesPath],
        migrations: [migrationsPath],
    };
};

export const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export const userRepository = AppDataSource.getRepository(User);

export const contactsRepository = AppDataSource.getRepository(Contact);
