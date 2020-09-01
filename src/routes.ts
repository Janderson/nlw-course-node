import express from 'express';
import ClassesController from './controllers/classes_controller';
import ConnectionsController from './controllers/connection_controller';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/', (request, response) => {
    return response.json({message: "Hello Word"});
});


routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;
