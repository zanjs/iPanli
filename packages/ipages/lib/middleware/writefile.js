const path = require('path')
const fs = require('fs')
const { log } = require('../utils/utils')

let appRootPath = process.cwd()

module.exports = (address, template = '') => {
  fs.writeFileSync(path.resolve(appRootPath, './', address), template, 'utf8')
  log('create: ' + address)
}
