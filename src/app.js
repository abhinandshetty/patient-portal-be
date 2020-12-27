const express = require('express');
const loaders = require('./loaders');

const PORT = process.env.PORT || 4000;

startServer = async () => {
  const app = express();

  await loaders(app);

  app.listen(4000, err => {
    if (err) return err;
    console.log(`App running on port : ${PORT}`);
  });
}

startServer();