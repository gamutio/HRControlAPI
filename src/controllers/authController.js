import Empleado from '../models/Empleado';
import empleado from '../models/Empleado'

export const createEmployee = async (req, res) => {
    console.log(req.body)
    const {name, fechaAlta, activo, tlfFijo, tlfMovil, email, pwd} = req.body;
    /*const imagePath = req.file.filename;*/
    const nuevoEm = new empleado({name, fechaAlta, activo, tlfFijo, tlfMovil, email, pwd/*, imagePath*/});

    const empleadoRecibido = await nuevoEm.save();

    res.status(201).json(empleadoRecibido);
}
export const getEmployees = async(req, res) => {
    const empleados = await empleado.find();
    res.status(200).json(empleados);
}

export const getEmployeeById = async (req, res) => {
    const empleados = await empleado.findById(req.params.id)
    res.json(empleados);    
}

export const updateEmployeeByID = async (req, res) => {
    console.log("estoy actualizando")
    const {name, email, pwd, tlfFijo, tlfMovil, roles} = req.body;
    console.log("pwd vale: " + pwd)
    let emp = 'test';
    if(pwd != undefined || pwd != ''){
        let pword= await empleado.encryptPassword(pwd);
        emp = (
            {
                name,
                email,
                pwd: pword,
                tlfFijo,
                tlfMovil, 
                roles
            }
        );
        console.log(emp);
    } else {
        emp = (
            {
                name,
                email,
                tlfFijo,
                tlfMovil, 
                roles
            }
        );
        console.log(emp);
    }
   
    const updatedEmployee = await empleado.findByIdAndUpdate(req.params.id, emp, {new: true});
    res.status(200).json(updatedEmployee);
}
export const deleteEmployeeByID = async (req, res) => {
    const deletedEmployee = await empleado.findByIdAndDelete(req.params.id);  
    res.status(204).json(deletedEmployee);
}
