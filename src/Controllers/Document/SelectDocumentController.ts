import { Request, Response } from "express"
import { SelectDocumentService } from "../../Services/Documents/SelectDocumentService"

class SelectDocumentController {
  async handle(request: Request, response: Response) {
    const selectDocumentService = new SelectDocumentService()
    const { id } = request.params

    const document = await selectDocumentService.execute(id)

    return response.json(document)
  }
}

export { SelectDocumentController }