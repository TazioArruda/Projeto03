import { UserController } from '../controller/controllerUser';
import { UserModel } from "../models/modelUser";
import { UserRepo } from "../repos/repoUser";
import { UserService } from "../services/serviceUser";

class UserFactory{
    static getInstance(){
        const userRepo = new UserRepo(UserModel)
        const userService = new UserService(userRepo)
        const userController = new UserController(userService)

        return userController

        }
}

export const userModule = UserFactory.getInstance();