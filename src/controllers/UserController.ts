import User from "../models/User";
import { Request, Response } from "express";

class UserController {
    constructor() {}

    public async create(req: Request, res: Response): Promise<Response> {
        const user = await User.create(req.body);

        return res.json(user);
    }

    public async view(req: Request, res: Response): Promise<Response> {
        const users = await User.find();

        return res.json(users);
    }

    public async remove(req: Request, res: Response): Promise<Response> {
        console.log(req.params.id);

        const users = await User.deleteOne({ _id: req.params.id });

        return res.json(users);
    }

    public async update(req: Request, res: Response): Promise<Response> {
        console.log(req.params.id);

        const users = await User.update(
            { _id: req.params.id },
            {
                $set: {
                    email: req.body.email,
                    fisrtNmae: req.body.fisrtNmae,
                    lastName: req.body.lastName
                }
            }
        );

        return res.json(users);
    }
}

export default new UserController();
