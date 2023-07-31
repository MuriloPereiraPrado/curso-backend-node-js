import { app } from './app.js';
import {
    IP_SERVER,
    PORT_SERVER,
    DB_HOST,
    DB_USER,
    DB_PASSOWRD
} from './constants.js';
import mongoose from 'mongoose';

const mongodbUrl = `mongodb+srv://${DB_USER}:${DB_PASSOWRD}@${DB_HOST}/`;
const mongodbLocal = `mongodb://localhost/cadastro-geral`;


mongoose.set("strictQuery", false);
mongoose.connect(mongodbUrl, (error) => {
    if(error){
        throw error;
    }else{
    app.listen(PORT_SERVER, () =>{
        console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
        console.log(`servidor está rodando em http://${IP_SERVER}:${PORT_SERVER}`);
        console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");

    });
    }
});


