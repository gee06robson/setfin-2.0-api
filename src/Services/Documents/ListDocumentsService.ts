import { Prisma } from "@prisma/client"
import prismaClient from "../../Prisma"

interface IDataDocuments {
  unit_id: string
  take?: number
}

class ListDocumentsService {
  async execute({ unit_id, take } : IDataDocuments) {

    try {
      
      const documents = await prismaClient.document.findMany({
        orderBy: {
          created_at: "desc"
        },
        include: {
          creditor: {
            select: {
              code: true,
              name: true
            },
          }
        },
        where: {
          units: {
            every: {
              OR: [
                {
                  unit_id
                }
              ]
            }
          }
        },
        take
      })
  
      return documents

    } catch (e) {
      
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e.message, e.code)
        throw new Error(`${e.code} - ${e.message}`)
      }

      throw e
    }
  }
}

export { ListDocumentsService }