import { Request, Response } from "express"
import { AuthenticateUserService } from "../../Services/User/AuthenticateUserService"

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { credential } = request.body
    const authenticateUserService = new AuthenticateUserService()

    try {

      const user = await authenticateUserService.execute(credential)
      
      return response.json(user)

    } catch (error) {
      return response.status(400).json({
        error: "authentication.failed"
      })
    }

  }
}

export { AuthenticateUserController }