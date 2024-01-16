import { Request, Response } from "express";
import { CreateTransactionService } from "../../services/transaction/CreateTransactionService";

class CreateTransactionController{
    async handle(req: Request, res: Response){

        const {date, description, value, type, account_id, category_id} = req.body

        const createTransactionService = new CreateTransactionService()

        const transaction = await createTransactionService.execute({date, description, value, type, account_id, category_id})

        return res.json(transaction)

    }
}

export {CreateTransactionController}