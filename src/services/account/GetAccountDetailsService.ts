import prismaClient from "../../prisma";


class GetAccountDetailsService{
    async execute(user_id: string){

        const account = await prismaClient.account.findMany({
            where:{
                user_id: user_id,
            },
            select:{
                id: true,
                name: true,
                balance: true
            }
        })
        
        return account
    }
}

export {GetAccountDetailsService}