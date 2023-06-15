import 'dotenv/config'

import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsersController} from './users/users.controller';
import {PostsController} from './posts/posts.controller';
import {HashTagsController} from './hashtags/hashtags.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {dbConfig} from "./config/db.config";
import UsersEntity from "./users/users.entity";
import {PostsEntity} from "./posts/posts.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            username: process.env.DB_USER,
            password: process.env.DB_PASSWWORD,
            database: process.env.DB_NAME,
            synchronize: true,
            entities: [UsersEntity, PostsEntity]
        })
    ],
    controllers: [AppController, UsersController, PostsController, HashTagsController],
    providers: [AppService],
})
export class AppModule {
}
