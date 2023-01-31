import { DataSource } from "typeorm";
import "reflect-metadata"

const AppDataSource: DataSource = new DataSource({
    type: "sqlite",
    database: process.env.DATABASE,
    entities: ["src/data/entry/**/*.ts"],
    synchronize: true,
    logging: false,
    migrations: ["src/data/migrations/**/*.ts"],
    subscribers: ["src/data/subscribers/**/*.ts"],    
    // cli: {
    //     entitiesDir: "src/data/entities",
    //     migrationsDir: "src/data/migrations",
    //     subscribersDir: "src/data/subscribers"
    //   }
})

export default AppDataSource;
