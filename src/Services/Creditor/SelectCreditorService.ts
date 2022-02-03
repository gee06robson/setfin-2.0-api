import prismaClient from "../../Prisma"

class SelectCreditorService {
  async execute(code: string) {

    const creditor = await prismaClient.creditor.findFirst({
      where: {
        code
      }
    })

    if (!creditor) {
      throw new Error("creditor does not exists")
    }

    return creditor
  }
}

export { SelectCreditorService }