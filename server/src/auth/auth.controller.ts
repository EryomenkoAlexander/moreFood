import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./core/guards/local-auth.guard";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {

    constructor(
        private _authService: AuthService
    ) { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    private async login(@Request() req) {
        return this._authService.login(req.user);
    }

}
