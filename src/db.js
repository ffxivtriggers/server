const knex = require('knex');
const config = require ('../knexfile');

exports.db = knex(config[process.env.NODE_ENV]);