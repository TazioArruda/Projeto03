import { Model } from "mongoose";
import { User } from "../../user/models/modelUser";
import { AuthRepoInterface } from "./repoInterfaceAuth";
import { RegisterUserDTO } from "../dtos/registerUserDTO";
import { AuthDTO } from "../dtos/authDTOS";

export class AuthRepo implements AuthRepoInterface {
  constructor(private userModule: Model<User>) { }

  async auth(authData: AuthDTO): Promise<User | null> {
    const { email } = authData
    const user = await this.userModule.findOne({ email }).select("+password")
    return user
  }

  async registerUser(userData: RegisterUserDTO): Promise<User | null> {
    const newUser = await this.userModule.create(userData)
    return newUser;

  }


}
