import {Injectable, UnauthorizedException} from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import {UsersService} from "../users/users.service";
import {BcryptService} from "../core/services/bcrypt.service";
import {LoginDto} from "./core/dto/login.dto";
import {IUser} from "../users/core/interfaces/IUser";
import {JwtPayload} from "jsonwebtoken";
import {ILoginResponse} from "./core/interfaces/ILoginResponse";

@Injectable()
export class AuthService {

    constructor(
        private _usersService: UsersService,
        private _jwtService: JwtService,
        private _bcryptService: BcryptService,
    ) {}

    public async validateUser(email: string, password: string): Promise<IUser | null> {
        const user: IUser | null = await this._usersService.getUserByEmail(email)

        if (!user) {
            throw new UnauthorizedException('Неверные учетные данные');
        }

        const isPasswordMatch = await this._bcryptService.comparePassword(password, user.password);

        if (!isPasswordMatch) {
            throw new UnauthorizedException('Неверные учетные данные');
        }

        return user
    }

    public async login(loginDto: LoginDto): Promise<ILoginResponse | Error> {
        const { email, password } = loginDto;
        const user: IUser | null = await this.validateUser(email, password);

        if (!user) {
            throw new UnauthorizedException('Неверные учетные данные');
        }

        const payload: JwtPayload = { sub: user._id };

        return {
            _id: user._id,
            access_token: this._jwtService.sign(payload),
        }
    }
}
