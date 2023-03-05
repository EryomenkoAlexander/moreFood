import {Module} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {UsersService} from "../users/users.service";
import {JwtModule} from "@nestjs/jwt";
import {BcryptService} from "../core/services/bcrypt.service";
import {User, UserSchema} from "../core/schemas/user.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AuthController} from "./auth.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            }
        ]),
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get('JWT_SECRET'),
                signOptions: { expiresIn: '1d' },
            }),
            inject: [ConfigService],
        }),
        ConfigModule.forRoot(),
    ],
    providers: [
        AuthService,
        UsersService,
        BcryptService,
    ],
    exports: [],
    controllers: [
        AuthController
    ]
})
export class AuthModule {}
