import { Request, Response } from "express";
import { CreateAccountService } from "../../services/account/CreateAccountService";

class CreateAccountController{
    async handle(req: Request, res: Response){

        const {type, balance, user_id, name} = req.body;

        const createAccountService = new CreateAccountService()

        const account = await createAccountService.execute({type,balance,user_id, name})

        return res.json(account)

    }
}

export {CreateAccountController}