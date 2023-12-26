
import 'express-async-errors';
import express, { Request, Response, NextFunction, Router } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import routes from '@src/routes';
import { error404 } from './middlewares/errors/error404';
import { error500 } from './middlewares/errors/error500';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger/swagger';



const app = express();

app.use(morgan('tiny')); // Remover??

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'DELETE', 'PUT']
  }));
app.use(helmet());
app.use(express.json());

app.disable('x-powered-by')

// Configuração do Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/api/',routes);

app.use(error404)
app.use(error500)

export default app;
