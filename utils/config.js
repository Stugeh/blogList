const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

let PORT = process.env.PORT
let MONGOURL = process.env.MONGOURL
 console.log('process.env :>> ', process.env);
if (process.env.NODE_ENV === 'test') {
    MONGOURL = process.env.TEST_MONGOURL
}

module.exports = {
    MONGOURL,
    PORT
}