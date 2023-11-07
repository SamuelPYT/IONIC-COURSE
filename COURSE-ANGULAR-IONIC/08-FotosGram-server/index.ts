import Server from "./clases/server";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cors from 'cors'; 


import userRoutes from "./routes/usuario";
import postRoutes from "./routes/post";
import fileUpload from 'express-fileupload'; 

const server = new Server(); 


//body parser 
server.app.use(bodyParser.urlencoded({extended: true})); 
server.app.use(bodyParser.json()); 

//CORS config
server.app.use(cors({ origin: true, credentials: true })); 


//fileUpload
server.app.use(fileUpload());

//Rutas de mi aplicación 
server.app.use('/user', userRoutes); 
server.app.use('/posts', postRoutes); 
 

//Conectar DB
mongoose.connect('mongodb://127.0.0.1:27017/fotosgram').then(() =>{
    console.log('Base de datos online');
}).catch((err) => {
    if(err) throw err; 
}); 

//Levantar express
server.start(() =>{
    console.log(`Servidor corriendo https en el puerto: ${server.port}`);
}); 

