import { compareAsc, parseISO } from "date-fns"
import compareDesc from "date-fns/compareDesc"
import prismaClient from "../../Prisma"
import { HandleDate } from "../../Utils/ultils"

interface IDocument {
  code: string,
  name: string,
  number: string,
  emission: string,
  due_date?: string | null,
  value: number,
  status?: boolean,
  unit_id: string,
  user_id: string
}

interface IUnityOnDocument {
  document_id: string,
  unit_id: string,
  assigned_by: string,
  status?: boolean
}

interface DocumentData {
  id: string
}

class CreateDocumentServcice {
  async execute({ code, name, number, emission, due_date, value, status = false, unit_id, user_id } : IDocument) {
    
    if(value <= 0) {
      throw new Error("o valor do documento não pode ser igual ou menor que zero")
    }

    if(code.length !== 6 && code.length !== 11 && code.length !== 14) {
      throw new Error("o código do credor deve conter 6, 11 ou 14 caracteres")
    }

    if(unit_id === undefined) {
      throw new Error("usuário não vinculado a uma unidade")
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
    
    let checkCreditor = await prismaClient.creditor.findFirst({
      where: {
        code
      }
    })

    if (!checkCreditor) {
      checkCreditor = await prismaClient.creditor.create({
        data: {
          code,
          name
        }
      })
    }

    const checkUser = await prismaClient.user.findUnique({
      where: {
        id: user_id
      }
    })

    if (!checkUser) {
      throw new Error("usuário não existe")
    }

    const checkUnity = await prismaClient.unity.findUnique({
      where: {
        id: unit_id
      }
    })

    if (!checkUnity) {
      throw new Error("unidade não existe")
    }
    
    if (checkUnity.status===false) {
      throw new Error("unidade desabilitada")
    }

    const checkDocument = await prismaClient.document.findFirst({
      where: {
        number,
        emission,
        value,
        creditor: {
          id: checkCreditor.id
        }
      },
      include: {
        creditor: {
          select: {
            code: true,
            name: true
          },
        },
      },
    })

    if (checkDocument) {
      throw new Error("documento já existe")
    }


    const newDocument = await prismaClient.document.create({
      data: {
        number,
        emission,
        due_date,
        value,
        status,
        creditor_id: checkCreditor.id,
      },
      include: {
        creditor: {
          select: {
            code: true,
            name: true
          },
        },
      },
    }) as DocumentData

    await prismaClient.unityOnDocuments.create({
      data:{
        document_id: newDocument.id,
        unit_id: checkUnity.id,
        assigned_by: user_id
      }
    }) as IUnityOnDocument
    
    return newDocument

  }
}

export { CreateDocumentServcice }