const os = require('os')
const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 3000

// Routes import
const { 
  testRouter, 
  defaultRouter
} = require('./src/routes')


// API Router import
const { testApiRouter } = require('./src/routes/api')

// Global Config
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'src', 'views'))

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

// API Router implement
app.use('/api/v1/test', testApiRouter)

// Router implement
app.use('/', testRouter)
app.use(defaultRouter)


// Run server
app.listen(port, () => console.log(`Successfully starting the server at localhost:${port}`))