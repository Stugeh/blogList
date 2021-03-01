const config = require('./utils/config')
const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const blogRouter = require('./controllers/blogs')
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

logger.info('connecting to', process.env.MONGOURL)
mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((err) => console.log('err', err))

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)
app.use('/api/login', loginRouter)
if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controllers/tests')
    app.use('/api/tests', testingRouter)
  }

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./build'));
}
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

module.exports = app