import { Model } from "mongoose";
import { User } from "../../user/models/userModels";
import { IAuthRepo } from "./authRepousitori_interface";
import { AutenticationDTO } from "../dtos/altentication_dto";



export class AuthRepositori implements IAuthRepo {
    constructor(private userModule: Model<User>){}
   async autentication(authData:AutenticationDTO): Promise<User | null>{

       const {email}=authData
        const user = await this.userModule.findOne({email}).select("+password")
        return user


        
    }


}