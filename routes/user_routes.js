const user_router = require('express').Router()
const User = require('../models/User')
// const client = require('../db/client')

// Register user
user_router.post('/auth/register', async (req, res) => {
  try{
    const data = req.body
    // Create a user in the db
    await User.create(data)

    // Store info to server so we have active record of user data (AUTHENTICATION)


  } catch (error){
    console.log(error)
    // Redirect user back to the register page
    res.redirect('/register')
  }
})

module.exports = user_router