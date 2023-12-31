import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import {
    authRoutes,
    userRoutes
} from './routes/index.js';

const app = express();

//Configuração do body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuração pasta statica do projeto
app.use(express.static('uploads'));

//Configuração do CORS
app.use(cors());

//Configuração morgan
app.use(morgan('dev'));

//Configuração das rotas
app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);

export {app}
