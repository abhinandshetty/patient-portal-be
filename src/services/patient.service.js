const patient = require('../models/patient.schema');
const stream = require('stream')
const csv = require('csv-parser');
const utils = require('../utils');

const savePatients =  async (req, res) => {
  try {
    const csvRows = [];
    await stream.Readable.from(req.file.buffer.toString()) 
      .pipe(csv())
      .on('data', row => csvRows.push(row))
      .on('end', () => console.log('CSV file successfully processed'))
      .on('error', ()=>console.log("Error"));

    await patient.destroyModel();
    
    const PatientSchema = await patient.createPatientModel();
    await PatientSchema.collection.insertMany(csvRows, err => {
      if (err) console.log(err)
      res.status(200).send({message: `${csvRows.length} patient records saved`})
    });

  } catch(e) {
    console.log(e)
    res.status(500).send({message: utils.ERROR_MESSAGE.UPLOAD_PATIENTS});
  }  
};

const getAllPatients =  async (req, res) => {
  try {
    await patient.destroyModel();
    const model = await patient.createPatientModel();

    const patients = await model
      .find(req.query.name ? {name: { $regex : new RegExp(req.query.name, "i") }} : {})
      .sort(utils.getSortDirection(req.query.sort))
      .skip(parseInt(req.query.page)*parseInt(req.query.pageSize))
      .limit(parseInt(req.query.pageSize));
    
    const totalPatients = await model
      .find(req.query.name ? {name: { $regex : new RegExp(req.query.name, "i") }} : {})
    
    await res.status(200).send({
      schema : utils.patientTableSchema,
      data: patients,
      count: totalPatients.length
    });
  } catch(e) {
    console.log(e)
    res.status(500).send({message: utils.ERROR_MESSAGE.GET_ALL_PATIENTS});
  }  
};

const getPatientByUUID = async(req, res) => {
  try {
    await patient.destroyModel();
    const patientProfile = await patient.createPatientModel().findById(req.params.patient_id);
    await res.send({patient: { ...patientProfile._doc }});
  } catch(e) {
    console.log(e)
    res.status(500).send({message: utils.ERROR_MESSAGE.GET_PATIENT_BY_ID});
  }
}


module.exports = {
  savePatients,
  getAllPatients,
  getPatientByUUID
}