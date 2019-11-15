const dofusDataToNode = require('./src/loader')
const fs = require('fs')

function readJsonDir (directoryPath) {
  const files = fs.readdirSync(directoryPath)
  return files.filter(f => f.includes('json')).map(f => JSON.parse(fs.readFileSync(`${directoryPath}/${f}`), 'utf8'))
}

module.exports = function (dofusVersion) {
  const enums = require(`./data/${dofusVersion}/enums`)
  const itemPositons = require(`./data/${dofusVersion}/itemPositions.js`)
  const dofusData = {
    enums: enums,
    maps: readJsonDir(`${__dirname}/data/${dofusVersion}/maps`),
    itemPositons
  }
  return dofusDataToNode(dofusData)
}
