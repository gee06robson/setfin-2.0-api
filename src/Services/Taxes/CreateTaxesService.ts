import prismaClient from "../../Prisma"


interface IDataTaxe {
  code: string
  p_a: number
}

class CreateTaxesService {
  async execute({ code, p_a } : IDataTaxe) {

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


    return checkTaxe
  }
}

export { CreateTaxesService } 