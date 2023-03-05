import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./core/dto/create-user.dto";
import {UpdateUserDto} from "./core/dto/update-user.dto";
import {BcryptService} from "../core/services/bcrypt.service";
import {IUser} from "./core/interfaces/IUser";

@Controller('users')
export class UsersController {

    constructor(
        private _usersService: UsersService,
        private _bcryptService: BcryptService
    ) { }

    @Post()
    private async _createUser(@Body() dto: CreateUserDto): Promise<IUser> {
        const hashedPassword = await this._bcryptService.createHash(dto.password)
        const user = {
            ...dto,
            password: hashedPassword
        }
        return this._usersService.createUser(user)
    }

    @Get()
    private async _getUsers(): Promise<IUser[]> {
        return this._usersService.getUsers()
    }

    @Get(':id')
    private async _getOneUser(@Param('id') id: string): Promise<IUser> {
        return this._usersService.getOneUser(id)
    }

    @Patch(':id')
    private async _updateUser(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto
    ): Promise<IUser> {
        return this._usersService.updateUser(id, dto)
    }

    @Delete(':id')
    private async _deleteUser(@Param('id') id: string): Promise<IUser> {
        return this._usersService.deleteUser(id)
    }

}
