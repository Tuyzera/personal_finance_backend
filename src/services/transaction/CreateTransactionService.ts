import prismaClient from "../../prisma";

interface TransactionRequest{
    date: string,
    description: string,
    value: number,
    type: string,
    account_id: string,
    category_id: string
}

class CreateTransactionService{
    async execute({date, description, value, type, account_id, category_id}: TransactionRequest){

        try {
            const transaction = await prismaClient.transaction.create({
                data:{
                    date: date,
                    description: description,
                    value: value,
                    type: type,
                    account_id: account_id,
                    category_id: category_id
                }
            })

            var account = await prismaClient.account.findFirst({
                where:{
                    id: account_id
                }
            })

            if(transaction.type == "Entrada"){
                account = await prismaClient.account.update({
                    where:{
                        id: account_id
                    },
                    data:{
                        balance: {
                            increment: transaction.value
                        }
                    }
                })
            } else{
                account = await prismaClient.account.update({
                    where:{
                        id: account_id
                    },
                    data:{
                        balance: {
                            decrement: transaction.value
                        }
                    }
                })
            }
            return transaction;
        } catch (error) {
            console.log("deu merda")
        }
        

        

    }
}
export {CreateTransactionService}