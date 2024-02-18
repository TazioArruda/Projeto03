import { Request, Response } from "express";
import { updateUserValidator } from "../validations/updateUserValidator";

import { getUserByEmailValidator } from "../validations/getUserByEmailValidator";
import { IControllerUser } from "./controllerInterfaceUser";
import { IserviceUser } from "../services/serviceInterfaceUser";
import { userSendGemsValidator } from "../validations/userSendGemsValidator";


export class UserController implements IControllerUser {
  constructor(private userService: IserviceUser) { }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAll();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  
  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(id);
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async softDelete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const deleteUser = await this.userService.softDelete(id);
      res.status(200).json(deleteUser);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  
 
  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { body } = req;
      await updateUserValidator.validate({ body: body }, { abortEarly: true });
      const updadeUser = await this.userService.updateUser(id, body);

      res.status(200).json(updadeUser);
    } catch (error: any) {
      res.status(500).json({ message: error });
    }
  }

  async sendGems(req: Request, res: Response): Promise<void> {
   
    try {
      const { id } = req.params;
      const { sendGems } = req.body;
      await userSendGemsValidator.validate({ sendGems }, { abortEarly: true });
      const userGems = await this.userService.sendGems(id, sendGems);

      res.status(200).json(userGems);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
