import express from 'express';
import controller from '../controllers/gradeController.js';

const app = express();

app.post('/grade/', controller.create); //feito
app.get('/grade/', controller.findAll); // feito
app.get('/grade/:id', controller.findOne); //feito
app.put('/grade/:id', controller.update);//feito
app.delete('/grade/:id', controller.remove);//feito
app.delete('/grade/', controller.removeAll);//feito

export { app as gradeRouter };
