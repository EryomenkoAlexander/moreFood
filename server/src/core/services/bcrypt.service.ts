import {Injectable} from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

    public async createHash(value: string): Promise<string> {
        const salt = await bcrypt.genSalt()
        const hashedValue: string = await bcrypt.hash(value, salt)
        return hashedValue
    }

    public async compare(value_1: string, value_2: string): Promise<boolean> {
        return await bcrypt.compare(value_1, value_2)
    }

}
