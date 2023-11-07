import {Schema, Document, model} from 'mongoose'; 

const postSchema = new Schema({

    created: {
      type: Date
    },
    mensaje: {
      type: String
    },
    imgs: [{
        type: String
    }],
    coords: {
        type: String // coordenadas 
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: [true, 'Debe existir una referencia al usuario'] 
    }
}); 

postSchema.pre<IPost>('save', function(next){
    this.created = new Date(); 
    next(); 
}); 

interface IPost extends Document{
    created: Date; 
    mensaje: string; 
    img: string[]; 
    coords: string; 
    usuario: string; 

}

export const Post = model<IPost>('Post', postSchema);  
