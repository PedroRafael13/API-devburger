import * as Yup from "yup"
import User from "../models/User"

class SessionController {
  async store(resquest, response){
    const schema = Yup.object({
      email : Yup.string().email().required(),
      password : Yup.string().required().min(6),
    })

    const isValid = await schema.isValid(resquest.body)

    const emailOrPasswordIncorrect = () => {
      response.status(401).json({error : "make sure your email or password are correct"})
    }

    if(!isValid){
      return emailOrPasswordIncorrect()
    }

    const { email, password } = resquest.body

    const user = await User.findOne({
      where : {
        email,
      }
    })

    if(!user){
      return emailOrPasswordIncorrect()
    }

    const isSamePassword = user.correctPassword(password)

    if(!isSamePassword){
      emailOrPasswordIncorrect()
    }

    return response.status(201).json({
      id : user.id,
      name : user.name,
      email,
      admin : user.admin,
    })
  }
}

export default new SessionController()