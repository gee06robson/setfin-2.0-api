import prismaClient from "../../Prisma"


class FilterDocumentsService {
  async execute(id_documents: Array<string>) {
    const documents = await prismaClient.document.findMany({
      where: {
        id: {
          in: id_documents
        }
      },
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
        taxes: {
          select: {
            code: true,
            amount: true,
            p_a: true,
            calculation_basis: true,
            correction: true,
          }
        }
      },
    })

    return documents
  }
}

export { FilterDocumentsService }