import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Project } from "./entity/Project"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Project],
    migrations: [],
    subscribers: [],
})
