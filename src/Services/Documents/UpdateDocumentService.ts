import prismaClient from "../../Prisma"
import { HandleDate } from "../../Utils/ultils"
import { parseISO, compareDesc, compareAsc }from "date-fns"


interface IUpdateDocument {
  id: string
  number: string
  emission: string
  due_date?: string | null
  value: number
  status: boolean
}

class UpdateDocumentService {
  async execute({ id, number, emission, due_date, value, status } : IUpdateDocument) {

    if(number.length === 0) {
      throw new Error("o número do documento não pode ser vazio")
    }
    
    if(value <= 0) {
      throw new Error("o valor do documento não pode ser igual ou menor que zero")
    }

    emission = HandleDate(emission)
    
      if(compareAsc(parseISO(emission), new Date()) === 1) {
        throw new Error("a data de emissão não pode ser posterior à data atual")
      }


    if(due_date) {
      due_date = HandleDate(due_date)

      if(compareDesc(parseISO(emission), parseISO(due_date)) !== 1) {
        throw new Error("a data de vencimento não pode ser inferior ou igual a data de emissão")
      }

    }

    const checkDocument = await prismaClient.document.findUnique({
      where: {
        id
      },
      include: {
        creditor: {
          select: {
            id: true,
          }
        }
      }
    })

    if (!checkDocument) {
      throw new Error("documento não existe")
    }
    
    const document = await prismaClient.document.update({
      where: {
        id: checkDocument.id
      },
      data: {
        number,
        emission,
        due_date,
        value, 
        status
      }
    })
    
    return document
  }
}

export { UpdateDocumentService }