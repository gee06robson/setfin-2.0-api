import { Request, Response } from "express"
import { UpdateDocumentService } from "../../Services/Documents/UpdateDocumentService"


class UpdateDocumentController {
  async handle(request: Request, response: Response) {
    const { id, number, emission, due_date, value, status } = request.body

    const updateDocumentService = new UpdateDocumentService()

    const document = await updateDocumentService.execute({
      id,
      number,
      emission,
      due_date,
      value,
      status
    })
    
    return response.json(document)
  }
}

export { UpdateDocumentController }