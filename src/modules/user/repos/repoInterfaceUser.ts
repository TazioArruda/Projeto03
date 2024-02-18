import { UpdateUserDto } from "../dtos/updateUserDto";
import { User } from "../models/modelUser";

export interface IUserRepo {


    getAll(): Promise<Array<User>>

    softDelete(id: string): Promise<User | null>

    getUserById(id: string): Promise<User | null>

    updateUser(id: string, newUserData: UpdateUserDto): Promise<User | null>

    sendGems(id: string, sendGems: number): Promise<User | null>

}

