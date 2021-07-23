const http = require('http')
const logger = require('./utils/logger')
const config = require('./utils/config')
const app = require('./server')

const server = http.createServer(app)

server.listen(config.PORT || 3003, () => {
  logger.info(`Server running on port ${config.PORT}`)
})
