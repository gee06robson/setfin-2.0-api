import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IUnity {
  id: string
  name: string
}

interface IPayload {
	sub: string
  user: {
    unity: IUnity | null
  }
}

export const ensureAuthenticated = (request: Request, response: Response, next: NextFunction) => {
	const authToken = request.headers.authorization

	if(!authToken) {
		return response.status(401).json({
			error: "token.invalid"
		})
	}

	const [, token] = authToken.split(" ")

	try {
    
		const { sub, user } = verify(token, process.env.JWT_SECRET) as IPayload

    request.user_id = sub,
    request.unit_id = user.unity?.id
    
		return next()
		
	} catch (error) {
		
		return response.status(401).json({
			error: "token.expired"
		})

	}
}
