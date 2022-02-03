import { Decimal } from "@prisma/client/runtime";
import prismaClient from "../../Prisma";

interface IDataCheck {
  document_id: string
  code: string
  calculation_basis: number
  p_a:  number
  correction?:  number
}

interface IDataDocument {
  id: string
  number: string
  value: Decimal
}

interface IDataAddTaxe {
  data: {
    document_id: string
    taxe_id: string
    p_a: number
    code: string
    calculation_basis: number
    correction?: number
    amount: number
  }
}

class AddTaxesDocumentService {
  async execute({ document_id, code, calculation_basis, p_a, correction } : IDataCheck) {


    if (Number(p_a) > 100 || Number(p_a) <= 0) {
      throw new Error("percentual não pode ser maior que 100% ou menor que 0%")
    } 

    if (code.length > 4 || code.length < 4 ) {
      throw new Error("o código deve conter 4 caractres. exemplo - 9999")
    } 

    const checkDocument = await prismaClient.document.findUnique({
      where: {
        id: document_id
      }
    }) as IDataDocument
    
    if (!checkDocument) {
      throw new Error("documento não existe")
    }

    if (Number(calculation_basis) > Number(checkDocument.value) || Number(calculation_basis) <= 0) {
      throw new Error("o valor da base cálculo não pode ser maio que o valor do documento ou menor que zero")
    }

    let checkTaxe = await prismaClient.taxe.findFirst({
      where: {
        code,
        p_a
      }
    })

    if (!checkTaxe) {
      checkTaxe = await prismaClient.taxe.create({
        data: {
          code,
          p_a
        }
      })
    }

    const checkTaxesOnDocument = await prismaClient.taxesDocuments.findFirst({
      where: {
        taxe_id: checkTaxe.id,
        document_id: checkDocument.id
      }
    })

    if (checkTaxesOnDocument) {
      throw new Error("você já aplicou essa alíquota")
    }

    const newTaxeDocument = await prismaClient.taxesDocuments.create<IDataAddTaxe>({
      data: {
        document_id: checkDocument.id,
        taxe_id: checkTaxe.id,
        p_a,
        code,
        calculation_basis,
        correction,
        amount: (((p_a/100)*calculation_basis))
      }
    })

    return newTaxeDocument

  }
}

export { AddTaxesDocumentService }