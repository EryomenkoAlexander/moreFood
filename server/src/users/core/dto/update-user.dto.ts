import {IUser} from "../interfaces/IUser";

export class UpdateUserDto implements IUser {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
    avatar: string
}
