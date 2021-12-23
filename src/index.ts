import express from 'express'

import IndexRoutes from './routes'

// Initializations
const app =  express()

// Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/primes', IndexRoutes)


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})