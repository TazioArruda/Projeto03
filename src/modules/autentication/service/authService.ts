import { User } from "../../user/models/userModels";
import { AutenticationDTO } from "../dtos/altentication_dto";
import { IAuthRepo } from "../repo/authRepousitori_interface";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export class AuthService implements AuthService {

    constructor(private authRepo:IAuthRepo){}
    async autentication(authData:AutenticationDTO): Promise<{user: User, token: string} | null>{

        const user = await this.authRepo.autentication(authData)

        if(!user || !user.password) throw new Error("INVALIDE EMAIL!")
        const userPassword = user.password
        const isPaswordValed = await bcrypt.compare(authData.password, user.password)
        
        if(!isPaswordValed) throw new Error("INVALIDE PASSWORD")

        const payload = {...user}
        const secretKey = process.env.JWT_SECRET_KEY as string 
        const options = {expiresIn:"1d"}
        const token = jwt.sign(payload, secretKey, options)

        return{user, token}


}
}