//Controllers se comunicam diretamente com as routes

import { Request, Response} from 'express'
import { UserDetailService } from '../../services/user/UserDetailService';

class detailUserController {
    async handle(req: Request, res: Response){
   
        const user_id = req.user_id;

        const detailUserService = new UserDetailService()

        const user = await detailUserService.execute(user_id)

        return res.json(user)
    }
}

export { detailUserController}