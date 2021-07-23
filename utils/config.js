const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const { PORT } = process.env
let { MONGOURL } = process.env
if (process.env.NODE_ENV === 'test') {
  MONGOURL = process.env.TEST_MONGOURL
}

module.exports = {
  MONGOURL,
  PORT,
}
