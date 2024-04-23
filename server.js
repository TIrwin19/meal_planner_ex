const express = require('express')
const {engine} = require('express-handlebars')

const app = express()
const routes = require('./routes')

const client = require('./db/client')

const PORT = process.env.PORT || 3333

// Create a GET route for every file in public
app.use(express.static('public'))

// allow url encoded data
app.use(express.urlencoded({ extended: false }))

// set up handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

// Load all Routes
app.use('/', routes)

// Contact db
client.connect()
  .then(()=>{
    // Start listening to start server
    app.listen(PORT, () => console.log('Server listening on port', PORT))
  })

