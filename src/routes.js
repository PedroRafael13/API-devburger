import {  Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)
routes.post('/products', upload.single('file') ,ProductController.store)

export default routes