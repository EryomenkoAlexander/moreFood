import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {AuthService} from "./auth.service";
import {LocalStrategy} from "./core/strategies/local.strategy";
import {UsersService} from "../users/users.service";
import {JwtModule} from "@nestjs/jwt";
import {BcryptService} from "../core/services/bcrypt.service";
import {Users, UsersSchema} from "../users/core/schemas/users.schema";
import {MongooseModule} from "@nestjs/mongoose";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UsersModule} from "../users/users.module";
import {JwtStrategy} from "./core/strategies/jwt.strategy";
import {AuthController} from "./auth.controller";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Users.name,
                schema: UsersSchema
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
        PassportModule,
        ConfigModule,
        UsersModule,
        ConfigModule.forRoot(),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        UsersService,
        BcryptService,
        JwtStrategy
    ],
    exports: [
        AuthService
    ],
    controllers: [
        AuthController
    ]
})
export class AuthModule {}
