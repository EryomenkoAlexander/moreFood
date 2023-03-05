import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./core/guards/local-auth.guard";
import {AuthService} from "./auth.service";
import {LoginDto} from "./core/dto/login.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private _authService: AuthService
    ) { }

    @Post('login')
    private async login(@Body() dto: LoginDto) {
        return this._authService.login(dto);
    }
}
