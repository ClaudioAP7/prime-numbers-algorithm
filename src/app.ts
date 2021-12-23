//import express from 'express'

const express = require('express')

// Initializations
const app =  express()
// Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.urlencoded({extended: false}))

// Starting the server
const server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

//export default { app, server }
//module.exports = app
export default app