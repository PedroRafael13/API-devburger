import * as Yup from "Yup"
import Category from "../models/Category"
import User from "../models/User"
class CategoryController {
  async store(request, response ){
    const schema = Yup.object({
      name : Yup.string().required(),
    })

    try{
      schema.validateSync(request.body, { abortEarly : false })
    } catch (err) {
      return response.status(400).json({error: err.errors})
    }

    const { admin : isAdmin } = await User.findByPk(request.userId)

    if(!isAdmin){
      return response.status(401).json()
    }

    const { filename : path } = request.file
    const { name } = request.body

    const categoryExists = await Category.findOne({
      where : { name }
    })

    if(categoryExists){
      return response.status(400).json({error :"User already exists"})
    }

    const { id } = await Category.create({
      name, 
      path,
    })

    return response.status(201).json({id, name})
  }

  async update(request, response ){
    const schema = Yup.object({
      name : Yup.string(),
    })

    try{
      schema.validateSync(request.body, { abortEarly : false })
    } catch (err) {
      return response.status(400).json({error: err.errors})
    }

    const { admin : isAdmin } = await User.findByPk(request.userId)

    if(!isAdmin){
      return response.status(401).json()
    }

    const { id } = request.params

    const findCategory = await Category.findByPk(id)
    if(!findCategory){
      return response.status(400).json({error : "Make sure your product id is correct"})
    }

    let path 
    if(request.file){
      path = request.file.filename
    }

    const { name } = request.body

    if(name){
      const categoryExists = await Category.findOne({
        where : { name }
      })
  
      if(categoryExists && categoryExists.id === +id){
        return response.status(400).json({error :"User already exists"})
      }
    }

    await Category.update({
      name,
      path,
    }, {
      where : {
        id,
      }
    })
  }

  async index (request, response){
    const categories = await Category.findAll()
    
    return response.json(categories)
  }
}

export default new CategoryController()