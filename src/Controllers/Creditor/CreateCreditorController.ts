import { Request, Response } from "express"
import { CreateCreditorService } from "../../Services/Creditor/CreateCreditorService"

class CreateCreditorController {
  async handle(request: Request, response: Response) {
    const { name, code } = request.body
    const createCreditorService = new CreateCreditorService()

    const creditor = await createCreditorService.execute({
      name,
      code
    })

    return response.json(creditor)

  }
}

export { CreateCreditorController }