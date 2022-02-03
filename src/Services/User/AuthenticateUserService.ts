import { OAuth2Client } from "google-auth-library"
import prismaClient  from "../../Prisma"
import { sign } from "jsonwebtoken"

interface IUnity {
  id: string
  name: string
}

interface IUserResponse {
  id: string,
  name: string,
  email: string,
  google_id: string,
  image_url: string,
  administrator?: boolean,
  created_at: Date,
  updated_at: Date,
  unity: IUnity | null
}

interface ITicket {
  name: string,
  email: string,
  sub: string,
  picture: string
}

class AuthenticateUserService {
  async execute(credential: string) {
    const client = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET_ID)
    
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.CLIENT_ID
    })

    const { name, email, sub, picture } = ticket.getPayload() as ITicket

    let user = await prismaClient.user.findFirst({
      where: {
        email
      }, 
      select: {
        id: true,
        name: true,
        email: true,
        image_url: true,
        administrator: true,
        unity: {
          select: {
            id: true,
            name: true
          }
        }
      }
    }) as IUserResponse

    if(!user) {
      user = await prismaClient.user.create({
        data: {
          name,
          email,
          google_id: sub,
          image_url: picture,
          administrator: false
        },
        include: {
          unity: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }) as IUserResponse
    }

    const token = sign(
			{
				user: {
					name: user.name,
					avatar_url: user.image_url,
					id: user.id,
          unity: user.unity,
          administrator: user.administrator
				}
			},
			process.env.JWT_SECRET,
			{
				subject: user.id,
				expiresIn: "1d"
			}
    )    

    return { token, user }
  }
}

export { AuthenticateUserService }