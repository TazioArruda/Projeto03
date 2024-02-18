import { UpdateUserDto } from "../dtos/updateUserDto";
import { User } from "../models/modelUser";
import { IUserRepo } from "../repos/repoInterfaceUser";
import { IserviceUser } from "./serviceInterfaceUser";

//regra de negocio
export class UserService implements IserviceUser  {
  constructor(private userRepo: IUserRepo) { }

  async getAll(): Promise<User[]> {
    const users = await this.userRepo.getAll();

    if (!users || users.length === 0) {
      throw new Error("User not found");
    }
    return users;
  }

  
  async getUserById(id: string): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    return user;
  }

  async softDelete(id: string): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const deleteUser = await this.userRepo.softDelete(id);

    if (!deleteUser) throw new Error("User not found");

    return deleteUser;
  }

  

  async updateUser(id: string, newUserData: UpdateUserDto): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    const updateUser = await this.userRepo.updateUser(id, newUserData);

    if (!updateUser) throw new Error("User not update");

    return updateUser;
  }

  async sendGems(id: string, sendGems: number): Promise<User> {
    const user = await this.userRepo.getUserById(id);

    if (!user) throw new Error("User not found");

    if (sendGems < 0) throw new Error("add value bigger then zero");

    if (sendGems > 100) throw new Error("maximum gems value is 100 ");

    const gems: number = user.gems;

    const newGems = gems + sendGems;

    const sendGemsUser = await this.userRepo.sendGems(id, newGems);

    if (!sendGemsUser) throw new Error("Error adding gems");

    return sendGemsUser;
  }

}
