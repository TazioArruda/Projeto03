// -----------------------interface de comunicação -------------------


import { User } from "../../user/models/userModels";
import { AutenticationDTO } from "../dtos/altentication_dto";



export interface IAuthRepo{

    autentication(authData:AutenticationDTO): Promise<User|null> 


}