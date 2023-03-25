import {Body, Controller, Delete, Get, Param, Patch, Post, UnauthorizedException} from "@nestjs/common";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./core/dto/create-user.dto";
import {UpdateUserDto} from "./core/dto/update-user.dto";
import {BcryptService} from "../core/services/bcrypt.service";
import {IUser} from "./core/interfaces/IUser";

@Controller('users')
export class UsersController {

    constructor(
        private _usersService: UsersService,
        private _bcryptService: BcryptService,
    ) { }

    @Post()
    private async _createUser(@Body() userDto: CreateUserDto): Promise<IUser> {
        const user: IUser | null = await this._usersService.getUserByEmail(userDto.email)

        if (user) {
            throw new UnauthorizedException('Пользователь с таким email уже существует');
        }

        const hashedPassword = await this._bcryptService.createHash(userDto.password)
        const newUser = {
            ...userDto,
            password: hashedPassword
        }
        return this._usersService.createUser(newUser)
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
        @Body() userDto: UpdateUserDto
    ): Promise<IUser> {
        const userById: IUser | null = await this._usersService.getOneUser(id)

        if (!userById) {
            throw new UnauthorizedException('Пользователь не найден');
        }

        const userByEmail: IUser | null = await this._usersService.getUserByEmail(userDto.email)

        if (userByEmail) {
            if (userById._id.toString() !== userByEmail._id.toString()) {
                throw new UnauthorizedException('Пользователь с таким email уже существует');
            }
        }

        const isPasswordMatch = await this._bcryptService.comparePassword(userDto.password, userById.password);

        if (!isPasswordMatch) {
            const hashedPassword: string = await this._bcryptService.createHash(userDto.password)
            return this._usersService.updateUser(id, {
                ...userDto,
                password: hashedPassword
            })
        }

        return this._usersService.updateUser(id, {
            ...userDto,
            password: userById.password
        })
    }

    @Delete(':id')
    private async _deleteUser(@Param('id') id: string): Promise<IUser> {
        return this._usersService.deleteUser(id)
    }

}
