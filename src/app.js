import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'

import empleado from './routes/Employees'
import login from './routes/login'
import {createRoles, createAreas} from "./libs/initialSetup";

const app = express();
createRoles();
createAreas();

app.use(morgan('dev'));
app.use(express.json());

app.set('pkg', pkg); 

app.get('/', (req,res) => {
    res.json({
        author: app.get('pkg').author, 
        name: app.get('pkg').name
    });
});

app.use('/api/employee', empleado)
app.use('/api/login', login);


export default app;