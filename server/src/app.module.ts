import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {mongoDB_src} from "./core/consts";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
    MongooseModule.forRoot(mongoDB_src),
      UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
