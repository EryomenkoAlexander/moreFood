import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDto} from "./core/dto/login.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private _authService: AuthService
    ) { }

    @Post('login')
    private async _login(@Body() loginDto: LoginDto) {
        return this._authService.login(loginDto);
    }
}
