import 'dotenv/config'
import UsersEntity from "../users/users.entity";

export const dbConfig = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [UsersEntity]
}