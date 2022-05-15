import {User} from '../models/Empleado'


export const checkMailUser = async (req, res, next) => {

    const email = await User.findOne({email: req.body.email});
    if(email) return res.status(400).json({message: 'El mail ya se encuentra en la base de datos'});

    const name = await User.findOne({email: req.body.name});
    if(name) return res.status(400).json({message: 'El Nombre ya se encuentra en la base de datos'});
    
    next();
}