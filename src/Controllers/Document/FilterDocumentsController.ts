import { Request, response, Response } from "express"
import { FilterDocumentsService } from "../../Services/Documents/FilterDocumentsService"

class FilterDocumentsController {
  async handle(request: Request, response: Response) {
    const { id_documents } = request.body
    const filterDocumentsService = new FilterDocumentsService()

    const documents = await filterDocumentsService.execute(id_documents)

    return response.json(documents)
  }
}

export { FilterDocumentsController }