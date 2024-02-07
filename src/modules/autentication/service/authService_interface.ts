import { User } from "../../user/models/userModels";
import { AutenticationDTO } from "../dtos/altentication_dto";



export interface IAuthService{

    autentication(login:AutenticationDTO): Promise<User | null>


}

