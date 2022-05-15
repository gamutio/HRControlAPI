import roles from '../models/Roles';
import area from '../models/Areas';

export const createRoles = async () => {
    try {
        const count = await roles.estimatedDocumentCount();

    if(count > 0) return;
    
    const values = await Promise.all([
        new roles({rol: 'admin'}).save(),
        new roles({rol: 'user'}).save(),
        new roles({rol: 'reportes'}).save()
    ]);

    console.log(values);
    } catch (error) {
        console.error(error);
    }
}

export const createAreas = async () => {
    try {
        const count = await area.estimatedDocumentCount();

    if(count > 0) return;
    
    const values = await Promise.all([
        new area({area: 'Administracion'}).save(),
        new area({area: 'Sistemas'}).save()
    ]);

    console.log(values);
    } catch (error) {
        console.error(error);
    }
}