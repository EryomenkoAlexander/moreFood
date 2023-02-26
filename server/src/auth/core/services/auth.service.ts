import {Injectable} from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import {UsersService} from "../../../users/users.service";
import {BcryptService} from "../../../core/services/bcrypt.service";
import {IUser} from "../../../users/core/interfaces/IUser";

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

        if (this._bcryptService.compare(password, user.password)) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    public async login(user: IUser) {
        const payload = { email: user.email, sub: user._id };
        return {
            access_token: this._jwtService.sign(payload),
        }
    }
}
