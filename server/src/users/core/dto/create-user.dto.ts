import {IUser} from "../interfaces/IUser";

export class CreateUserDto implements IUser {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    password: string
}
