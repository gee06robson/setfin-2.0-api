import { Response, Request } from "express";
import { CreateTaxesService } from "../../Services/Taxes/CreateTaxesService";


class CreateTaxesController {
  async handle(request: Request, response: Response) {
    const { code, p_a } = request.body
    const createTaxesService = new CreateTaxesService()

    const newTaxe = await createTaxesService.execute({
      code,
      p_a
    })

    return response.json(newTaxe)
  }
}

export { CreateTaxesController }