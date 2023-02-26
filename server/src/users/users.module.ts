import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Users, UsersSchema} from "./core/schemas/users.schema";
import {BcryptService} from "../core/services/bcrypt.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Users.name,
                schema: UsersSchema
            }
        ])
    ],
    controllers: [UsersController],
    providers: [
        UsersService,
        BcryptService
    ]
})
export class UsersModule { }
