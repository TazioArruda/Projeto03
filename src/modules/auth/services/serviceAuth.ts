import { User } from '../../user/models/modelUser';
import jwt from 'jsonwebtoken';

import { AuthRepoInterface } from "../repo/repoInterfaceAuth";

import bcrypt from "bcrypt"
import "dotenv/config"
import { RegisterUserDTO } from '../dtos/registerUserDTO';
import { AuthServiceInterface } from './serviceInterfaceAuth';
import { AuthDTO } from '../dtos/authDTOS';



export class AuthService implements AuthServiceInterface {
    constructor(private authRepo: AuthRepoInterface) { }

    async auth(authData: AuthDTO): Promise<{ user: User, token: string } | null> {
        const user = await this.authRepo.auth(authData)


        if (!user || !user.password) throw new Error('Invailed email')

        const userPassword = user.password
        const isPasswordValid = await bcrypt.compare(authData.password, userPassword)

        if (!isPasswordValid) throw new Error('Invalid Password')

        const payload = { ...user }
        const secret = process.env.JWT_SECRET as string
        const option = { expiresIn: '1d' }
        const token = jwt.sign(payload, secret, option)
        return { user, token }
    }


    async registerUser(newData: RegisterUserDTO): Promise<User> {
        newData.password = await bcrypt.hash(newData.password, 10)


        const newUser = await this.authRepo.registerUser(newData)

        if (!newUser) throw new Error('Invalid User')

        return newUser
    }

    async loggedUser(token: string): Promise<User | null> {
        if (!token) throw new Error('token invalid, expires or user not logged!')
        const decodingUser: any = jwt.verify(token, process.env.JWT_SECRET as string)
        const user: User = { ...decodingUser._doc }

        return user


    }


}
