import { Schema, model, Document} from "mongoose";
import bcrypt from 'bcrypt';


const usuarioSchema: Schema<IUsuario>= new Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es necesario'] 
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es necesaria']
    }

}); 

usuarioSchema.method('compararPassword', function(password: string = ''): boolean{

    if(bcrypt.compareSync(password, this.password)){
        return true; 
    }else{
        return false; 
    }; 


}); 



interface IUsuario extends Document{
    nombre: string; 
    avatar: string; 
    email: string; 
    password: string; 
    
    compararPassword(password: string): boolean; 
}



export const Usuario = model<IUsuario>('Usuario', usuarioSchema);  
