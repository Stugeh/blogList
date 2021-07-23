const express = require('express')
require('express-async-errors')

const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

logger.info('connecting to', process.env.MONGOURL)
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => logger.error('err', err))

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)

if (process.env.NODE_ENV === 'test') {
  // eslint-disable-next-line global-require
  const testingRouter = require('./controllers/tests')
  app.use('/api/tests', testingRouter)
}

app.get('/health', (req, res) => {
  res.send('ok')
})

// app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
