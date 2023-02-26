import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {Users} from "./schemas/users.schema";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('users')
export class UsersController {

    constructor(
        private _usersService: UsersService
    ) { }

    @Get()
    private _getUsers(): Promise<Users[]> {
        return this._usersService.getUsers()
    }

    @Get(':id')
    private _getOneUser(@Param('id') id: string): Promise<Users> {
        return this._usersService.getOneUser(id)
    }

    @Post()
    private _createUser(@Body() dto: CreateUserDto): Promise<Users> {
        return this._usersService.createUser(dto)
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
