import { Router, Request, Response } from "express";
import { Usuario } from '../models/usuario.model';
import bcrypt from 'bcrypt';
import Token from "../clases/token";
import { verificaToken } from "../middlewares/autenticacion";



const userRoutes = Router();


//login de usuario
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;

    Usuario.findOne({ email: body.email }).then(userDB => {
        if (!userDB) {
            return res.json({
                ok: false,
                mensage: 'Usuario/contraseña no son correctos'
            });
        };

        if (userDB.compararPassword(body.password)) {

            const userToken = Token.getJwtToke({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
                avatar: userDB.avatar
            });

            res.json({
                ok: true,
                token: userToken
            });
        } else {
            return res.json({
                ok: false,
                mensage: 'Usuario/contraseña no son correctos******'
            });
        }


    }).catch(err => {
        throw err;
    })


});


//crear un usuario 
userRoutes.post('/create', (req: Request, res: Response) => {

    const user = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    }


    Usuario.create(user).then(userDB => {

        const userToken = Token.getJwtToke({
            _id: userDB._id,
            nombre: userDB.nombre,
            email: userDB.email,
            avatar: userDB.avatar
        });

        res.json({
            ok: true,
            token: userToken
        });


    }).catch(err => {
        res.json({
            ok: false,
            err
        });
    })


});

//Actualizar usuario
userRoutes.post('/update', verificaToken, (req: any, res: Response) => {

    const user = {
        nombre: req.body.nombre || req.usuario.nombre,
        email : req.body.email  || req.usuario.email,
        avatar: req.body.avatar || req.usuario.avatar
    };

    Usuario.findByIdAndUpdate(req.usuario._id, user, { new: true })
        .then(userDB => {
            if (!userDB) {
                res.json({
                    ok: false,
                    mensaje: 'No existe un usuario con ese ID'
                });
            }

            const userToken = Token.getJwtToke({
                _id: userDB._id,
                nombre: userDB.nombre,
                email: userDB.email,
                avatar: userDB.avatar
            });

            res.json({
                ok: true,
                token: userToken
            });

        }).catch(err => {
            throw err;
        });

});


userRoutes.get('/', [verificaToken], (req: any, res: Response) => {

    const usuario = req.usuario; 

    res.json({
        ok: true,
        usuario
    }); 
}); 



export default userRoutes; 
