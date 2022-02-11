import { Prisma } from "@prisma/client"
import prismaClient from "../../Prisma"

class DeleteDocumentService {
  async execute(id: string) {

    try {

      let checkDocument = await prismaClient.document.findUnique({
        where: {
          id
        }
      })

      if (!checkDocument) {
        throw new Error("document does not exists")
      }

      checkDocument = await prismaClient.document.delete({
        where: {
          id
        }
      })

      return checkDocument

    } catch (e) {

      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        console.log(e.message, e.code)
        throw new Error(`${e.code} - ${e.message}`)
      }
      
      throw e

    }

  }
}

export { DeleteDocumentService }