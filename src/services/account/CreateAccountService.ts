import prismaClient from "../../prisma";

interface AccountRequest{
    type: string,
    balance: number,
    user_id: string,
    name: string
}

class CreateAccountService{
    async execute({type, balance, user_id, name}: AccountRequest){

        const findAccount = await prismaClient.account.findFirst({
            where:{
                user_id: user_id,
                name: name
            }
        })

        console.log("CONTA" + findAccount)

        if(findAccount){
            throw new Error("Conta ja existente");
            return
        }
        else{
            const account = await prismaClient.account.create({
                data:{
                    type: type,
                    balance: balance,
                    user_id: user_id,
                    name: name
                }
            })
            return account;
        }
        


    }
}

export {CreateAccountService}