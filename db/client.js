const { Sequelize } = require('sequelize')
const client = new Sequelize(
  'meal_planner_db', // Database name
  'postgres', //Postgress server password
  'clim6er', { // Postgres server password
  host: 'localhost',
  dialect: 'postgres'
})
module.exports = client