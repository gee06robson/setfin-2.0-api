import prismaClient from "../../Prisma"

class ListUnitsService {
  async  execute() {  
    const units = await prismaClient.unity.findMany()

    return units
  }
}

export { ListUnitsService }