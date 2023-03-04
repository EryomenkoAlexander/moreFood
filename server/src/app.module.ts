import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UsersModule} from "./users/users.module";
import {mongoDB_src} from "./core/consts/mongoDB";
import {AuthModule} from "./auth/auth.module";
import {PassportModule} from "@nestjs/passport";

@Module({
  imports: [
    MongooseModule.forRoot(mongoDB_src),
    AuthModule,
    UsersModule,
    PassportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
