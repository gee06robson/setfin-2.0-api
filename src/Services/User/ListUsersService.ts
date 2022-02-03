import prismaClient from "../../Prisma"

class ListUsersService {
  async execute() {
    const users = await prismaClient.user.findMany()

    if (!users) {
      throw new Error("algo deu errado")
    }

    return users
  }
}

export { ListUsersService }