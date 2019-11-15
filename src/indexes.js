const indexer = require('./indexer.js')

module.exports = function (dofusData) {
  return {
    mapsById: indexer.buildIndexFromArray(dofusData.maps, 'id')
  }
}
