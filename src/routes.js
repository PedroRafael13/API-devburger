import { Router } from 'express'

const routes = new Router()

routes.get('/', (request, response) => {
  return response.status(201).json({message : "esta tudo certo"})
})

export default routes