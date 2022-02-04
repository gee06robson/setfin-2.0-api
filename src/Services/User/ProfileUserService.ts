import { Prisma } from "@prisma/client"
import prismaClient from "../../Prisma"

class ProfileUserService {
  async execute(user_id: string) {

    try {

      const user = await prismaClient.user.findFirst({
        where: {
          id: user_id
        },
        select: {
          id: true,
          name: true,
          email: true,
          image_url: true, 
          administrator: true,
          unity: {
            select: {
              id: true,
              name: true
            }
          }
        }
      })
  
      return user

    } catch (e) {

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e.message, e.code)
        throw new Error(`${e.code} - ${e.message}`)
      }
      
      throw e

    }
  }
}

export { ProfileUserService }