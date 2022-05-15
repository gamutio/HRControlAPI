import roles from '../models/Roles'

export const createRole = async (req, res) => {

    const {rol, Description} = req.body;
    
    const nuevoRol = new roles({rol, Description});

    const rolesRecibido = await nuevoRol.save();

    res.status(201).json(rolesRecibido);
}
export const getRoles = async(req, res) => {
    const roless = await roles.find();
    res.status(200).json(roless);
}

export const getRoleById = async (req, res) => {
    const roless = await roles.findById(req.params.id)
    res.json(roless);    
}

