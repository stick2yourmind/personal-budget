import express from 'express'
import SERVER_CFG from './config/server.config'
import appRoutes from './routes/app.routes'
import cookieParser from 'cookie-parser'

const app = express()

// App middlewares
// Middleware for binding req.headers.cookie to req.cookies
app.use(cookieParser())

// Middleware to handle JSON
app.use(express.json())
// Middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/', appRoutes)

if (SERVER_CFG.PORT && SERVER_CFG.HOST) {
  const server = app.listen(SERVER_CFG.PORT, SERVER_CFG.HOST, () => {
    console.log(`Server is up and running on port => ${SERVER_CFG.PORT}`)
  })

  server.on('error', (error) => {
    console.log('There was an unexpected error in the server')
    console.log(error)
  })
} else console.log('Missing SERVER_CFG.PORT or SERVER_CFG.HOST')
