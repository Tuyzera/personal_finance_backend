import prismaClient from "../../prisma";


class GetCategoryService{
    async execute(){

        const category = await prismaClient.category.findMany({
            select:{
                id: true,
                name: true
            }
        })
        return category
    }
}

export {GetCategoryService}