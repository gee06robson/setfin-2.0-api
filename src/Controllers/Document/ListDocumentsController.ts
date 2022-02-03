import { Request, Response } from "express"
import { ListDocumentsService } from "../../Services/Documents/ListDocumentsService"

class ListDocumentsController {
  async handle(request: Request, response: Response) {
    const { unit_id } = request
    const { take } = request.body
    
    const listDocumentsService = new ListDocumentsService()

    const documents = await listDocumentsService.execute({
      unit_id, 
      take
    })

    return response.json(documents)
  }
}

export { ListDocumentsController }