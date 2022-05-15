import jwt from 'jsonwebtoken'
import config from '../config'
import User from '../models/Empleado'
import Role from '../models/Roles'

export const verifyToken = async (req, res, next) => {
    
    //recibo el token del usuario
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).json({message: 'Usuario no logueado'});

    //compruebo que el token corresponde a un usuario de la bbdd
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId);
    if(!user) return res.status(403).json({message: 'El usuario no existe'});

    //compruebo que el usuario tiene roles de administración

    next();
}

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId);

    const roles = await Role.find({_id: {$in: user.roles}})
    console.log('tiene estos roles: ' + roles);
    for(let i=0; i< roles.length; i++){
        console.log('bucle for num: ' + i);
        if(roles[i].rol === 'admin'){
            console.log('tiene admin')
            next();
            return;
        }
    }
    
    res.status(403).json({message: 'El usuario no tiene permisos'})
}

export const isReport = async (req, res, next) => {
    const user = await User.findById(req.userId);

    const roles = await Role.find({_id: {$in: user.roles}})
    console.log('tiene estos roles: ' + roles);
    for(let i=0; i< roles.length; i++){
        console.log('bucle for num: ' + i);
        if(roles[i].rol === 'reportes'){
            console.log('tiene reportes')
            next();
            return;
        }
    }
    
    res.status(403).json({message: 'El usuario no tiene permisos'})
}