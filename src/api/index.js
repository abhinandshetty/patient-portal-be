const patients = require('./patients.controller');


module.exports =  {
  register : app => {
    app.use('/api/patients', patients);
  }
};