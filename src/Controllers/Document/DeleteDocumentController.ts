import { Request, Response } from "express"
import { DeleteDocumentService } from "../../Services/Documents/DeleteDocumentService"

class DeleteDocumentController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    const deleteDocumentService = new DeleteDocumentService()

    const document = await deleteDocumentService.execute(id)

    return response.json(document)
  }
}

export { DeleteDocumentController }