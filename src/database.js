import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://HRControlAdmin:HRControlAdmin@cluster0.hmtz6.mongodb.net/HRControl?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(db => console.log('Conectado'))
    .catch(err => console.log(err));