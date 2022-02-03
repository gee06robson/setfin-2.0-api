import prismaClient from "../../Prisma"

interface IDataTaxesAndDocument {
  taxe_id: string
  document_id: string
}

class RemoveTaxesDocumentService {
  async execute({ taxe_id, document_id } : IDataTaxesAndDocument) {

    const checkTaxe = await prismaClient.taxe.findUnique({
      where: {
        id: taxe_id
      }
    })

    if (!checkTaxe) {
      throw new Error("informação não existe")
    }

    const checkDocument = await prismaClient.document.findUnique({
      where: {
        id: document_id
      }
    })

    if (!checkDocument) {
      throw new Error("documento informado não existe")
    }

    const removeTaxe = await prismaClient.taxesDocuments.delete({
      where: {
        document_id_taxe_id: {
          document_id,
          taxe_id
        }
      }
    })

    return removeTaxe

  }
}

export { RemoveTaxesDocumentService }