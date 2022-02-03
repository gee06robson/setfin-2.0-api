import { Request, Response } from "express"
import { AddTaxesDocumentService } from "../../Services/Taxes/AddTaxesDocumentService"


class AddTaxesDocumentController {
  async handle(request: Request, response: Response) {
    const { document_id, code, calculation_basis, p_a, correction  } = request.body
    const addTaxesDocumentController = new AddTaxesDocumentService()

    const addTaxeDocument = await addTaxesDocumentController.execute({
      document_id,
      code,
      calculation_basis,
      p_a,
      correction
    })

    return response.json(addTaxeDocument)
  }
}

export { AddTaxesDocumentController }