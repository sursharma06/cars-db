const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);

//require express
const express = require('express');
const app = express();

app.listen(4000, function () {
  console.log('connection to port 4000...');
});
