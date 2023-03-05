import {Injectable} from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {

    public async createHash(value: string | Buffer, saltRounds: number = 10): Promise<string> {
        const salt = await bcrypt.genSalt(saltRounds);
        return await bcrypt.hash(value, salt)
    }

    public async comparePassword(password: string, hash: string | Buffer): Promise<boolean> {
        return await bcrypt.compare(password, hash)
    }

}
