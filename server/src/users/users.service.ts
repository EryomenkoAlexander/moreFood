import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Users, UsersDocument} from "./core/schemas/users.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./core/dto/create-user.dto";
import {UpdateUserDto} from "./core/dto/update-user.dto";
import {UpdatePasswordDto} from "./core/dto/update-password.dto";

@Injectable()
export class UsersService {

    constructor(
       @InjectModel(Users.name) private _usersModel: Model<UsersDocument>
    ) { }

    public async createUser(dto: CreateUserDto): Promise<Users> {
        const newUser = new this._usersModel(dto)
        return newUser.save()
    }

    public async getUsers(): Promise<Users[]> {
        return this._usersModel.find().exec()
    }

    public async getOneUser(id: string): Promise<Users> {
        return this._usersModel.findById(id)
    }

    public async updateUser(id: string, dto: UpdateUserDto): Promise<Users> {
        return this._usersModel.findByIdAndUpdate(id, dto)
    }

    public async updatePassword(id: string, password: string): Promise<Users> {
        return this._usersModel.findByIdAndUpdate(id, {password})
    }

    public async deleteUser(id: string): Promise<Users> {
        return this._usersModel.findByIdAndDelete(id)
    }

}
