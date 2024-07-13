import Jwt from "jsonwebtoken"
import authConfig from "../../config/auth"

function authMiddleware(request, response, next){
  const authToken = request.headers.authorization

  if(!authToken){
    return response.status(401).json({error : "Token not provided"})
  }

  const token  = authToken.split(' ').at(1)

  try{
    Jwt.verify(token, authConfig.secret, (err, decoded) => {
      if(err){
       throw new Error()
      }

      request.userId = decoded.id
      request.userName = decoded.name

    })
  } catch{
    return response.status(401).json({error : "token is invalid"})
  }

  return next()
}

export default authMiddleware