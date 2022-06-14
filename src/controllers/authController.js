import empleado from '../models/Empleado'
import jwt from 'jsonwebtoken';
import conf from '../config';
import Role from '../models/Roles'
import Areas from '../models/Areas'

export const signup = async (req, res) => {
    const {name, email, pwd, tlfFijo, tlfMovil, roles, area} = req.body;
    
    //const userFound = await empleado.find({email});

    const emp = new empleado({
        name,
        email,
        tlfFijo,
        tlfMovil,
        pwd: await empleado.encryptPassword(pwd)
    });
    //compruebo que los roles existen en bbdd
    if(roles){
        const foundRoles = await Role.find({rol: {$in: req.body.roles}});
        emp.roles = foundRoles.map(roles => roles._id);
        console.log(emp.roles)
    } else {
        const role = await Role.findOne({name: 'user'});
        emp.roles = [role._id];
    }

    //compruebo que el área existe en bbdd
    if(area){
        const foundAreas = await Areas.find({name: {$in: area}});
        emp.area = foundAreas.map(area => area._id);
    } else {
        const areas = await Areas.findOne({name: 'Sistemas'});
        emp.area = [areas._id];
    }

    const savedEmployee = await emp.save(); 
    
    const token = jwt.sign({id: savedEmployee._id}, conf.SECRET, {
        expiresIn: 86400 //24 horas
    });
    res.status(200).json({token})
    
}

export const signin = async (req, res) => {
    const userFound = await empleado.findOne({email: req.body.email}).populate("roles");

    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"})

    const pwdOk = await empleado.compararPassword(req.body.pwd, userFound.pwd)
    if(!pwdOk) return res.status(400).json({token: null, message: "Password incorrecto"})

    const token = jwt.sign({id: userFound._id}, conf.SECRET, {
        expiresIn: 86400
    })
    const userId = userFound._id;
    res.json({token, userId})
}
