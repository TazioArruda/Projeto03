import { UpdateUserDto } from "../dtos/updateUserDto";
import { Request, Response } from "express";

export interface IControllerUser {

  getAll(req: Request, res: Response): Promise<void>;

  getUserById(req: Request, res: Response): Promise<void>;

  softDelete(req: Request, res: Response): Promise<void>;

  updateUser(req: Request, res: Response): Promise<void>;
  
  sendGems(req: Request, res: Response): Promise<void>;
}
