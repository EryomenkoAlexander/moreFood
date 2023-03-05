import {Injectable} from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import {UsersService} from "../users/users.service";
import {BcryptService} from "../core/services/bcrypt.service";
import {IUser} from "../users/core/interfaces/IUser";
import {LoginDto} from "./core/dto/login.dto";

@Injectable()
export class AuthService {

    constructor(
        private _userService: UsersService,
        private _jwtService: JwtService,
        private _bcryptService: BcryptService,
    ) {}

    public async validateUser(email: string, password: string): Promise<any> {
        const user = await this._userService.getUserByEmail(email)

        if (!user) {
            return null
        }

        const isPasswordMatch = await this._bcryptService.comparePassword(password, user.password);

        if (isPasswordMatch) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    public async login(dto: LoginDto) {
        const { email, password } = dto;
        const user = await this.validateUser(email, password);

        if (!user) {
            return null;
        }

        const payload = { sub: user.id };
        return {
            access_token: this._jwtService.sign(payload),
        }
    }
}
