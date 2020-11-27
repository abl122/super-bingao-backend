import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import EventController from './app/controllers/EventController';
import ValidatedCardController from './app/controllers/ValidatedCardController';
import OrderController from './app/controllers/OrderController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(authMiddleware);
routes.post('/users', UserController.store);

routes.post('/event', EventController.store);
routes.get('/events', EventController.show);

routes.post('/validate', ValidatedCardController.store);

routes.get('/orders', OrderController.index);


export default routes;