import { DataSource, DataSourceOptions } from "typeorm";
import "reflect-metadata"
import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";

const AppDataSource: DataSource = new DataSource({
    type: "sqlite",
    database: 'db.sql',
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
