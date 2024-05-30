import {  Router } from 'express'
import User from './app/models/User'
import { v4 } from 'uuid'

const routes = new Router()

routes.get('/', async (request, response) => {
  const users = await User.create({
    id : v4(),
    name : 'pedro2',
    email : 'pedrorafa2el@email.com',
    password_hash : "sdfkjfhd",
  })

  return response.status(201).json(users)
})

export default routes