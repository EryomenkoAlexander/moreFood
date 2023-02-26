import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./core/services/auth.service";
import {LocalStrategy} from "./core/strategies/local.strategy";
import {UsersService} from "../users/users.service";
import {JwtModule} from "@nestjs/jwt";
import {BcryptService} from "../core/services/bcrypt.service";
import {Users, UsersSchema} from "../users/core/schemas/users.schema";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Users.name,
                schema: UsersSchema
            }
        ]),
        JwtModule.register({
            secret: 'secret',
            signOptions: { expiresIn: '60s' },
        }),
        PassportModule,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        UsersService,
        BcryptService,
    ],
    exports: [
        AuthService
    ],
})
export class AuthModule {}
