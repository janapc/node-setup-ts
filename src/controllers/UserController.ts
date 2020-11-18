import { Request, Response } from "express";

export default class UserController {
  index(req: Request, res: Response) {
    return res.json({ message: `Hello ${req.query.name}` });
  }
}
