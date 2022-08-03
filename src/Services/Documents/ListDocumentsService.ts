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
          },
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
  
      return documents.map(response => {
        return {
          id: response.id,
          creditor_id: response.creditor_id,
          number: response.number,
          emission: response.emission,
          due_date: response.due_date,
          value: response.value,
          status: response.status,
          created_at: response.created_at,
          updated_at: response.updated_at,
          creditor: { code: response.creditor.code, name: response.creditor.name },
          searchEngine: `${response.number} ${response.value} ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(Number(response.value))} ${response.creditor.code} ${response.creditor.name}`
        }
      })

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