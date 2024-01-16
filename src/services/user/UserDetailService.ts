import prismaClient from "../../prisma";



class UserDetailService{
    async execute(user_id: string){
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            select:{
                id: true,
                name: true,
                email: true,
                avatarUrl: true
            }
        })

        if(!user){
            throw new Error("Usuario não existe, ou não está logado");
            
        }

        return user;
    }
}
export {UserDetailService}