const express = require('express');
const router = express.Router();
const patientService = require('../services/patient.service');
const multer  = require('multer')
const upload = multer()

router.get('/', async (req, res) => {
  await patientService.getAllPatients(req, res);
});

router.get('/:patient_id', async (req, res) => {
  await patientService.getPatientByUUID(req, res);
})

router.post('/', upload.single("patients"), async (req, res) => {
  await patientService.savePatients(req, res);
})


module.exports = router;