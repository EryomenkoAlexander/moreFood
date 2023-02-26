import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import {LocalAuthGuard} from "./core/guards/local-auth.guard";

@Controller('auth')
export class AuthController {

    constructor() { }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    private async _login(@Request() req) {
        return req.user;
    }

}
