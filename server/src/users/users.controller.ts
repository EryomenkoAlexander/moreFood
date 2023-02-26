import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Users} from "./schemas/users.schema";
import {UpdateUserDto} from "./dto/update-user.dto";
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {

    constructor(
        private _usersService: UsersService
    ) { }

    @Post()
    private async _createUser(@Body() dto: CreateUserDto): Promise<Users> {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(dto.password, salt)
        const user = {
            ...dto,
            password: hashedPassword
        }
        return this._usersService.createUser(user)
    }

    @Get()
    private _getUsers(): Promise<Users[]> {
        return this._usersService.getUsers()
    }

    @Get(':id')
    private _getOneUser(@Param('id') id: string): Promise<Users> {
        return this._usersService.getOneUser(id)
    }

    @Patch(':id')
    private _updateUser(
        @Param('id') id: string,
        @Body() dto: UpdateUserDto
    ): Promise<Users> {
        return this._usersService.updateUser(id, dto)
    }

    @Delete(':id')
    private _deleteUser(@Param('id') id: string): Promise<Users> {
        return this._usersService.deleteUser(id)
    }

}
