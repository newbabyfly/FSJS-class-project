// src/server.js

const express = require('express');
const config = require('./config');

const app = express();

app.use('/doc', function(req, res, next) {
  res.end(`Documentation http://expressjs.com/`);

  // Write a fucntion below

});

app.use(function(req, res, next) {
  res.end("Hello world! I'm live!");
});

app.listen(config.port, function() {
  console.log(`${config.appName} is listening on port ${config.port}`);
});
