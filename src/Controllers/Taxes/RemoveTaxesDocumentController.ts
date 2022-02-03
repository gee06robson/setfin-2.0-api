import { Request, Response } from "express"
import { RemoveTaxesDocumentService } from "../../Services/Taxes/RemoveTaxesDocumentService"

class RemoveTaxesDocumentController {
  async handle(request: Request, response: Response) {
    const { taxe_id, document_id } = request.body
    const removeTaxesDocumentService = new RemoveTaxesDocumentService()

    const removeTaxe = await removeTaxesDocumentService.execute({
      taxe_id,
      document_id
    })

    return response.json(removeTaxe)
  }
}

export { RemoveTaxesDocumentController }