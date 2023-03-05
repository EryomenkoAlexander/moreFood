import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {AuthModule} from "./auth/auth.module";
import {UsersModule} from "./users/users.module";

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_SRC),
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
