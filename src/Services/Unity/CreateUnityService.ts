import prismaClient from "../../Prisma"

interface IUnity {
  name: string,
  status?: boolean
}
class CreateUnityService {
  async execute({ name, status = false } : IUnity) {
    
    let unity = await prismaClient.unity.findFirst({
      where: {
        name
      }
    })

    if (!unity) {
      unity = await prismaClient.unity.create({
        data: {
          name,
          status
        }
      })
    }

    return unity
  }
}

export { CreateUnityService }