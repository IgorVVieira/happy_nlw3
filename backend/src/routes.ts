import { Router } from 'express';
const routes = Router();

import OrphangesController from './controllers/OrphanagesController';

routes.get('/');

routes.post('/orphanages', OrphangesController.create);

export default routes;