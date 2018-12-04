'use strict'
const config = require('../package.json')
module.exports = {
  NODE_ENV: '"production"',
  VERSION: `"${config.version}"`,
  TYPE: `'${process.env.NODE_TYPE}'`
}
