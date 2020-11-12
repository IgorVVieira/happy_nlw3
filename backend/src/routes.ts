import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphangesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

// Rotas CRUD
routes.get('/orphanages', OrphangesController.index);
routes.get('/orphanages/:id', OrphangesController.show);
routes.post('/orphanages', upload.array('images'), OrphangesController.create);

export default routes;

// {
// 	"name": "Lar dos meninos",
// 	"latitude": -19.8110891,
// 	"longitude": -43.1673998,
// 	"about": "Sobre o orfanato",
// 	"instructions": "Venha fazer uma visita",
// 	"opening_hours": "Das 8h até as 18h",
// 	"open_on_weekends": true
// }