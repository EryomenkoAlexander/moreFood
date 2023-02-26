import {BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./core/dto/create-user.dto";
import {Users} from "./core/schemas/users.schema";
import {UpdateUserDto} from "./core/dto/update-user.dto";
import {UpdatePasswordDto} from "./core/dto/update-password.dto";
import {BcryptService} from "../core/services/bcrypt.service";
import {CurrentUser} from "../core/decorators/current-user.decorator";
import {IUser} from "./core/interfaces/IUser";

@Controller('users')
export class UsersController {

    constructor(
        private _usersService: UsersService,
        private _bcryptService: BcryptService
    ) { }

    @Post()
    private async _createUser(@Body() dto: CreateUserDto): Promise<Users> {
        const hashedPassword = await this._bcryptService.createHash(dto.password)
        const user = {
            ...dto,
            password: hashedPassword
        }
        return this._usersService.createUser(user)
    }

    @Get()
    private async _getUsers(): Promise<Users[]> {
        return this._usersService.getUsers()
    }

    @Get(':id')
    private async _getOneUser(@Param('id') id: string): Promise<Users> {
        return this._usersService.getOneUser(id)
    }

    @Patch(':id')
    private async _updateUser(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto
    ): Promise<Users> {
        return this._usersService.updateUser(id, dto)
    }

    @Patch('password')
    private async _updatePassword(
        @Body() dto: UpdatePasswordDto,
        @CurrentUser() user: IUser
    ): Promise<Users> {
        const { oldPassword, newPassword } = dto

        const storedUser = await this._usersService.getOneUser(user._id)
        const isMatch = this._bcryptService.compare(oldPassword, storedUser.password)

        if (!isMatch) {
            throw new BadRequestException('Неверный текущий пароль');
        }
        const hashedPassword = await this._bcryptService.createHash(newPassword)

        return this._usersService.updatePassword(user._id, hashedPassword)
    }

    @Delete(':id')
    private async _deleteUser(@Param('id') id: string): Promise<Users> {
        return this._usersService.deleteUser(id)
    }

}
