const fs = require('fs')
const path = require('path')
const debug = require('debug')('core-system')
const { sliceFileName } = require('../utils')

function fileConfigBootstrap(appendedName, dir, defaultFile = 'index' , fileFormat = '.js') {
  const configFiles = {}

  fs.readdirSync(path.resolve(dir)).filter((item) => {
    if(item.toLocaleLowerCase() !== `${defaultFile}${fileFormat}` && item.includes(fileFormat)) {
      const filename = sliceFileName(item)
      // Look at the router files
      debug(`is checking file on bootstraping ${filename}${appendedName} = ${item}\n`)
      // Add the router files into object
      configFiles[`${filename}${appendedName}`] = require(path.resolve(dir, item))
    }
  })

  return configFiles
}

module.exports = fileConfigBootstrap