const routes = require('express').Router()

const view_router = require('./view_routes')
const user_router = require('./user_routes')
const meal_router = require('./meal_routes')

routes.use('/', [user_router, meal_router, view_router])

module.exports = routes