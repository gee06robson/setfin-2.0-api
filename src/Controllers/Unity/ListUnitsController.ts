import { Request, Response } from "express"
import { ListUnitsService } from "../../Services/Unity/ListUnitsService"

class ListUnitsController {
  async handle(request: Request, response: Response) {
    const listUnitsService = new ListUnitsService()

    const units = await listUnitsService.execute()

    return response.json(units)
  }
}

export { ListUnitsController }