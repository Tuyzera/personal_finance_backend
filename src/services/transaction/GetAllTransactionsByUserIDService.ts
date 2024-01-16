import prismaClient from "../../prisma";

class GetAllTransactionByUserIDService{
    async execute(user_id: string){
        
        const allTransactions = await prismaClient.transaction.findMany({
            where:{
                account:{
                    user_id: user_id
                }
            },
            select:{
                id: true,
                date: true,
                description: true,
                type: true,
                value: true,
                category_id: true,
                account:{
                    select:{
                        id: true,
                        name: true,
                        balance: true
                    }
                },
                categories:{
                    select:{
                        id: true,
                        name: true
                    }
                }
                
            }

       

            
        })

      
        return allTransactions;
    }
}

export {GetAllTransactionByUserIDService};