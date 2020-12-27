const mongoose = require('mongoose');
const dotenv = require('dotenv');

module.exports = async () => {
  dotenv.config();
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
  const dbConnection = await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true });
  return dbConnection.connection.db;
};