import prismaClient from "../../Prisma"

class SelectDocumentService {
  async execute(id: string) {

    const document = await prismaClient.document.findUnique({
      where: {
        id
      },
      include: {
        creditor: {
          select: {
            name: true,
            code: true
          }
        },
        taxes: {
          select: {
            code: true,
            amount: true,
            p_a: true,
            calculation_basis: true,
            correction: true,
            taxe_id: true,
            document_id: true,
          }
        },
        units: {
          select: {
            assigned_by: false,
            document_id: false,
            included_in: true,
            status: true,
            unit_id: false,
            user: {
              select: {
                name: true,
                email: true
              }
            }
          },
        },
      }
    })

    if (!document) {
      throw new Error("document does not exists")
    }

    return document
  }
}

export { SelectDocumentService }