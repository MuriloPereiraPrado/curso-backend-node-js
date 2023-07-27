import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";

import {
    userRoutes
} from './routes/auth.js';

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static('uploads'));

app.use(cors());

app.use(morgan('dev'));

app.use('/api/v1', userRoutes);

export {app}
