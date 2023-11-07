"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const post_1 = __importDefault(require("./routes/post"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const server = new server_1.default();
//body parser 
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//CORS config
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//fileUpload
server.app.use((0, express_fileupload_1.default)());
//Rutas de mi aplicación 
server.app.use('/user', usuario_1.default);
server.app.use('/posts', post_1.default);
//Conectar DB
mongoose_1.default.connect('mongodb://127.0.0.1:27017/fotosgram').then(() => {
    console.log('Base de datos online');
}).catch((err) => {
    if (err)
        throw err;
});
//Levantar express
server.start(() => {
    console.log(`Servidor corriendo en el puerto: ${server.port}`);
});
