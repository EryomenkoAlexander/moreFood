import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User, UserDocument} from "../core/schemas/user.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./core/dto/create-user.dto";
import {UpdateUserDto} from "./core/dto/update-user.dto";
import {IUser} from "./core/interfaces/IUser";

@Injectable()
export class UsersService {

    constructor(
       @InjectModel(User.name) private _usersModel: Model<UserDocument>
    ) { }

    public async createUser(dto: CreateUserDto): Promise<IUser> {
        const newUser = await new this._usersModel(dto)
        return newUser.save()
    }

    public async getUsers(): Promise<IUser[]> {
        return await this._usersModel.find().exec()
    }

    public async getOneUser(id: string): Promise<IUser> {
        return await this._usersModel.findById(id)
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        return await this._usersModel.findOne({ email }).exec()
    }

    public async updateUser(id: string, dto: UpdateUserDto): Promise<IUser> {
        return await this._usersModel.findByIdAndUpdate(id, dto)
    }

    public async deleteUser(id: string): Promise<IUser> {
        return await this._usersModel.findByIdAndDelete(id)
    }

}
