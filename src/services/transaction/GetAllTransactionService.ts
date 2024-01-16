import prismaClient from "../../prisma";

class GetAllTransactionService{
    async execute(account_id: string){
        
        const allTransactions = await prismaClient.transaction.findMany({
            where:{
                account_id: account_id
            },
            select:{
                id: true,
                date: true,
                description: true,
                type: true,
                value: true,
                category_id: true
            }

       

            
        })

        if(!allTransactions){
            throw new Error("Conta ja existente");
            return
        }
        return allTransactions;
    }
}

export {GetAllTransactionService};