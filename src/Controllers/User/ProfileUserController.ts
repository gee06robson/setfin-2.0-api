import { Request, Response } from "express"
import { ProfileUserService } from "../../Services/User/ProfileUserService"


class ProfileUserController {
  async handle(request: Request, response: Response) {
    const profileUserService = new ProfileUserService()
    const { user_id } = request

    const user = await profileUserService.execute(user_id)

    return response.json(user)
  }
}

export { ProfileUserController }