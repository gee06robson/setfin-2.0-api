import prismaClient  from "../../Prisma"

interface ICreditor {
  name: string,
  code: string
}

class CreateCreditorService {
  async execute({ name, code } : ICreditor) {

    let creditor = await prismaClient.creditor.findFirst({
      where: {
        code
      }
    })

    if(!creditor) {
      creditor = await prismaClient.creditor.create({
        data: {
          name,
          code
        }
      })
    }

    return creditor

  }
}

export { CreateCreditorService }