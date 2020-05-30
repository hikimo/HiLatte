const path = require('path')
require('dotenv').config()
const { DEBUG_MODE } = process.env

const rootPath = path.dirname(process.mainModule.filename)

function sliceFileNameFromFormat(fileName, fileFormat = ".js") {
  debug(`--- Slice File Name Helper Logs ---`)
  
  if(fileName.includes(fileFormat)) {
    debug(`The ${fileName} have ${fileName} format, can be trimmed`)

    const indexFormat = fileName.indexOf(fileFormat)
    const realFileName = fileName.slice(0, indexFormat)

    return realFileName
  } 

  debug(`The doesn't have ${fileName} format, will skipped`)
  return false
}

function debug(text) {
  DEBUG_MODE.toLocaleLowerCase() == 'true' && 
  console.log('\x1b[33m%s\x1b[0m', text)
}

module.exports = {
  sliceFileName: sliceFileNameFromFormat,
  rootPath,
  debug
}