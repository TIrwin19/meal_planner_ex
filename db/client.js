const { Pool }= require('pg')
const client = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'clim6er',
  database: 'meal_planner_db'
})

module.exports = client