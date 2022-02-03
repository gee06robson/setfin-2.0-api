import { Request, Response } from "express"
import { CreateUnityService } from "../../Services/Unity/CreateUnityService"

class CreateUnityController {
  async handle(request: Request, response: Response) {
    const { name, status } =  request.body
    const createUnityService = new CreateUnityService()

    const unity = await createUnityService.execute({
      name,
      status
    })

    return response.json(unity)
  }
}

export { CreateUnityController }