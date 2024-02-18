import { User } from "../../user/models/modelUser";
import { AuthDTO } from "../dtos/authDTOS";

import { RegisterUserDTO } from "../dtos/registerUserDTO";


export interface AuthRepoInterface {
    auth(authData: AuthDTO): Promise<User | null>
    registerUser(userData: RegisterUserDTO): Promise<User | null>

}
