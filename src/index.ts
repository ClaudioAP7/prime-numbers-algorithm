import express from 'express'
import routes from './routes/router'

// Initializations
const app =  express()

// Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/primes', routes)


// Starting the server
export const server = app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})

// Exports
export default app