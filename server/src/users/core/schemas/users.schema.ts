import {Document} from "mongoose";
import {Prop, SchemaFactory, Schema} from "@nestjs/mongoose";

export type UsersDocument = Users & Document

@Schema()
export class Users {

    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: string

    @Prop()
    phoneNumber: string

    @Prop()
    password: string

}

export const UsersSchema = SchemaFactory.createForClass(Users)
