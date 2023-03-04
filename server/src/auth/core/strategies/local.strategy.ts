import { Injectable } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from "../../auth.service";
import {Users} from "../../../users/core/schemas/users.schema";

@Injectable()
export class LocalStrategy extends AuthGuard('local') {

    constructor(private _authService: AuthService) {
        super();
    }

    public async validate(email: string, password: string): Promise<Users> {
        const user = await this._authService.validateUser(email, password);

        if (!user) {
            throw new Error('Недействительные учетные данные');
        }

        return user;
    }
}
