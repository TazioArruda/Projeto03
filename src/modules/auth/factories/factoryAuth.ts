import { AuthController } from '../controllers/controllerAuth';
import { UserModel } from "../../user/models/modelUser";
import { AuthRepo } from "../repo/repoAuth";
import { AuthService } from "../services/serviceAuth";

class AuthFactury {
    static getInstance(){
        const authRepo = new AuthRepo(UserModel)
        const authService = new AuthService(authRepo)
        const authController = new AuthController(authService)

        return authController
    }
}

export const authModule = AuthFactury.getInstance();