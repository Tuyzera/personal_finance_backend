//Controllers se comunicam diretamente com as routes

import { Request, Response} from 'express'
import {GetAllTransactionByUserIDService} from '../../services/transaction/GetAllTransactionsByUserIDService'

class GetAllTransactionByUserIDController {
    async handle(req: Request, res: Response){
   
        const user_id = req.query.user_id as string;

        const getAllTransactionsByUserIDService = new GetAllTransactionByUserIDService()

        const user = await getAllTransactionsByUserIDService.execute(user_id)

        return res.json(user)
    }
}

export { GetAllTransactionByUserIDController}