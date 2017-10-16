//connecting knex n queries to eachother, theyre in the same folder
const knex = require('./knex');

module.exports = {
  cars: {
    getAll: function () {
      return knex('car');
    },
  },
};
