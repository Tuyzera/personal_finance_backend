import { Request, Response } from "express";
import { GetAllTransactionService} from "../../services/transaction/GetAllTransactionService";


class GetAllTransactionController{
    async handle(req: Request, res: Response){


        const {account_id} = req.params;

        const getAllTransactionService = new GetAllTransactionService();

        const transaction = await getAllTransactionService.execute(account_id);

        return res.json(transaction)

    }
}

export {GetAllTransactionController};