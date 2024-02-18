import { User } from "../../user/models/modelUser";
import { AuthDTO } from "../dtos/authDTOS";
import { RegisterUserDTO } from "../dtos/registerUserDTO";


export interface AuthServiceInterface {
    auth(authData: AuthDTO): Promise<{ user: User, token: string } | null>
    registerUser(newUser: RegisterUserDTO): Promise<User>

    loggedUser(token: string): Promise<User | null>

}