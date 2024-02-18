import { UpdateUserDto } from "../dtos/updateUserDto";
import { User } from "../models/modelUser";

export interface IserviceUser {

  getAll(): Promise<Array<User>>;

  softDelete(id: string): Promise<User>;

  getUserById(id: string): Promise<User>;

  updateUser(id: string, newUserData: UpdateUserDto): Promise<User>;

  sendGems(id: string, sendGems: number): Promise<User>;

}
