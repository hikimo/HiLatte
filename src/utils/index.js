const path = require('path')
const debug = require('debug')('helpers:main')
require('dotenv').config()

const rootPath = path.dirname(process.mainModule.filename)

function sliceFileNameFromFormat(fileName, fileFormat = ".js") {
  debug(`--- in sliceName Helper Logs ---`)
  
  if(fileName.includes(fileFormat)) {
    debug(`confirmed ${fileName} have ${fileFormat} format, can be trimmed!`)

    const indexFormat = fileName.indexOf(fileFormat)
    const realFileName = fileName.slice(0, indexFormat)

    return realFileName
  } 

  debug(`This file doesn't have ${fileName} format, skiped`)
  return false
}

module.exports = {
  sliceFileName: sliceFileNameFromFormat,
  rootPath,
}