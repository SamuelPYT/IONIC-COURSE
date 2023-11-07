import { FileUpload } from "../interfaces/file-upload";
import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';


export default class FileSystem {

    constructor() { };

    guardarImagenTemporal(file: FileUpload, userId: string) {

        return new Promise<void>((resolve, reject) => {

            //Crear archivo
            const path = this.crearCarpertaUsuario(userId);

            //Nombre del archivo
            const nombreArchivo = this.generarNombreUnico(file.name);

            //Mover el archivo temp a nuestra carpeta 
            file.mv(`${path}/${nombreArchivo}`, (err: any) => {
                if(err){
                    reject(err); 
                }else{
                    resolve();  
                }
            });


        });



    }


    private generarNombreUnico(nombreOriginal: string) {
        const nombreArr = nombreOriginal.split('.');
        const extension = nombreArr[nombreArr.length - 1];
        const idUnico = uniqid();

        return `${idUnico}.${extension}`;

    }



    private crearCarpertaUsuario(userId: string) {

        const pathUser = path.resolve(__dirname, '../uploads/', userId);
        const pathUserTemp = pathUser + '/temp';

        const existe = fs.existsSync(pathUser);

        if (!existe) {
            fs.mkdirSync(pathUser);
            fs.mkdirSync(pathUserTemp);
        }

        return pathUserTemp;

    }

    imagenTempPost(userId: string){
        const pathTemp = path.resolve(__dirname, '../uploads/', userId, 'temp');
        const pathPost = path.resolve(__dirname, '../uploads/', userId, 'posts');

        if(!fs.existsSync(pathTemp)){
            return []; 
        }
        
        if(!fs.existsSync(pathPost)){
            fs.mkdirSync(pathPost); 

        }

        const imagenesTemp = this.obtenerImagenesEnTemp(userId);

        imagenesTemp.forEach(imagen => {
            fs.renameSync(`${pathTemp}/${imagen}`, `${pathPost}/${imagen}` )
        }); 

        return imagenesTemp; 

    }

    private obtenerImagenesEnTemp(userId: string){
        const pathTemp = path.resolve(__dirname, '../uploads/', userId, 'temp');
        
        return fs.readdirSync(pathTemp) || []; 
    }

    getFotoUrl(userId: string, img: string){
        //path de la foto 
        const pathFoto = path.resolve(__dirname, '../uploads', userId, 'posts', img);
        
        //si existe la foto 
        const existe = fs.existsSync(pathFoto); 
        if(!existe){
            return path.resolve(__dirname, '../assets/400x250.jpg'); 
        }

        return pathFoto;     
    }

} 