const dofusDataToNode = require('./src/loader')

module.exports = function (dofusVersion) {
  const enums = require(`./data/${dofusVersion}/enums`)
  const dofusData = {
    enums: enums
  }
  return dofusDataToNode(dofusData)
}
