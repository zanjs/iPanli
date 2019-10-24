const fs = require('fs')
const path = require('path')

const matchName = str => str.match(/[^\/]+$/)[0]

let appRootPath = process.cwd()

const readdir = dir => {
  let results = [path.resolve(dir)]
  const files = fs.readdirSync(dir, 'utf8')
  files.forEach(file => {
    file = path.resolve(dir, file)

    const stats = fs.statSync(file)
    if (stats.isFile()) {
      // results.push(file)
    } else if (stats.isDirectory()) {
      results = results.concat(readdir(file))
    }
  })
  return results
}
const getDirectoryName = () => {
  const filePaths = readdir(path.resolve(appRootPath, './', 'src/views/'))
  return filePaths.map(item => {
    return matchName(item)
  })
}

module.exports = {
  getDirectoryName
}
