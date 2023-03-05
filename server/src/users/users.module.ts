import {Module} from "@nestjs/common";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "../core/schemas/user.schema";
import {BcryptService} from "../core/services/bcrypt.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [UsersController],
    exports: [],
    providers: [
        UsersService,
        BcryptService
    ]
})
export class UsersModule { }
