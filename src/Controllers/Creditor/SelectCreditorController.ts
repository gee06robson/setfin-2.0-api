import { Request, Response } from "express"
import { SelectCreditorService } from "../../Services/Creditor/SelectCreditorService"


class SelectCreditorController {
  async handle(request: Request, response: Response) {
    const selectCreditorService = new SelectCreditorService()
    const { code } = request.body

    const creditor = await selectCreditorService.execute(code)

    return response.json(creditor)
  }
}

export { SelectCreditorController }