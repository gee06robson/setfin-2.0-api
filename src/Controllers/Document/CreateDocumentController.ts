import { Request, Response } from "express"
import { CreateDocumentServcice } from "../../Services/Documents/CreateDocumentService"

class CreateDocumentController {
  async handle(request: Request, response: Response) {
    const { user_id, unit_id } = request
    const { number, emission, due_date, value, status, code, name } = request.body
    const createDocumentService = new CreateDocumentServcice()

    const document = await createDocumentService.execute({
      code,
      name: name.toUpperCase(),
      number,
      emission,
      due_date,
      value,
      status,
      user_id,
      unit_id
    })

    return response.json(document)
  }
}

export { CreateDocumentController }