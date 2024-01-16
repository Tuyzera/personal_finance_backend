import { Request, Response } from "express";
import { GetCategoryService } from "../../services/category/GetCategoryService";

class GetCategoryController{
    async handle(req: Request, res: Response){

        const getCategoryService = new GetCategoryService();

        const category = await getCategoryService.execute();

        return res.json(category);
    }
}
export {GetCategoryController}