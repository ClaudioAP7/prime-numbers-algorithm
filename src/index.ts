import express from 'express'
import { Request, Response, NextFunction } from 'express'

import IndexRoutes from './routes'

// Initializations
const app =  express()

// Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.urlencoded({extended: false}))

app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    // const status = error.statusCode || 500;
    response.send('asd')
    // const message = error.message;
  });

// Routes
app.use('/primes', IndexRoutes)


// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})