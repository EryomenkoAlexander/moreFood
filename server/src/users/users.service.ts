import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Users, UsersDocument} from "./schemas/users.schema";
import {Model} from "mongoose";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

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

    public async deleteUser(id: string): Promise<Users> {
        return this._usersModel.findByIdAndDelete(id)
    }

}
