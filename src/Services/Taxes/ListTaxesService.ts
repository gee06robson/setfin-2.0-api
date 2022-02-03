import prismaClient from "../../Prisma";


class ListTaxesService {
  async execute() {
    const taxes = await prismaClient.taxe.findMany()

    return taxes
  }
}

export { ListTaxesService }