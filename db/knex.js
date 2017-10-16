const env = 'development';
const config = require('../knexfile.js')[env]; //Have to use 2 dots here before knexfile
const knex = require('knex')(config);

module.exports = knex;
