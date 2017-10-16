//require express
const express = require('express');
const app = express();

//to import in the routes directory
const cars = require('./routes/cars');
app.use(cars);

app.listen(4000, function () {
  console.log('connection to port 4000...');
});
