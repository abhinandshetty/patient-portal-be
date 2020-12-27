const cors = require('cors');
const apis = require('../api/index');

module.exports = async (app) => {
  app.use(cors());

  apis.register(app);
};