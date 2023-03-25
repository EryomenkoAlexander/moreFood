import {Document} from "mongoose";
import {Prop, SchemaFactory, Schema} from "@nestjs/mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

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

    @Prop()
    avatar: string

}

export const UserSchema = SchemaFactory.createForClass(User)
