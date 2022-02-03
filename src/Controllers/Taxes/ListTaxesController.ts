import { Request, Response } from "express";
import { ListTaxesService } from "../../Services/Taxes/ListTaxesService"

class ListTaxesController {
  async handle(request: Request, response: Response) {
    const listTaxesService = new ListTaxesService()

    const taxes = await listTaxesService.execute()

    return response.json(taxes)
  }
}

export { ListTaxesController }