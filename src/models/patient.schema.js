const mongoose = require('mongoose');

module.exports =  {
    createPatientModel : () => mongoose.model(
        'patient_details', 
        new mongoose.Schema({
            name: String, 
            age: Number,
            gender: String,
            contact: String
        }), 
        'patient_details'),
    destroyModel : () => delete mongoose.connection.models['patient_details']
}

