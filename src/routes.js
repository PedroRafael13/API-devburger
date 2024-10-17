import { Router } from 'express'
import multer from 'multer'

import authMiddleware from './app/middlewares/auth'
import multerConfig from './config/multer'

import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import UserController from './app/controllers/UserController'
import CategoryController from './app/controllers/CategoryController'
import OrderController from './app/controllers/OrderController'
import CreatePaymentIntentControllerroller from './app/controllers/Stripe/CreatePaymentIntentController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)
routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), ProductController.update)

routes.post('/order', OrderController.store)
routes.get('/order', OrderController.store)
routes.put('/order/:id', OrderController.updade)
routes.post('/create-payment-intent', CreatePaymentIntentControllerroller.store)

export default routes
