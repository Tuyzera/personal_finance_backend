import { Request, Response } from "express";
import { GetAccountDetailsService } from "../../services/account/GetAccountDetailsService";

class GetAccountDetailsController{
    async handle(req: Request, res: Response){

        const  user_id  = req.query.user_id as string

        console.log(user_id)

        const getAccountDetailsService = new GetAccountDetailsService()

        const account = await getAccountDetailsService.execute(user_id)

        return res.json(account)

    }
}

export {GetAccountDetailsController}