module.exports = dofusDataToNode

function dofusDataToNode (dofusData) {
  const indexes = require('./indexes.js')(dofusData)
  return {
    gameActions: dofusData.enums.GameAction,
    cellTypes: dofusData.enums.CellType,
    servers: dofusData.enums.Server,
    orientations: dofusData.enums.Orientation,
    orientationUtils: { isDiagonal: dofusData.enums.isDiagonal,
      opposite: dofusData.enums.opposite,
      getNearestNeighborWithoutDiagonal: dofusData.enums.getNearestNeighborWithoutDiagonal },
    itemPositions: dofusData.itemPositions,

    maps: indexes.mapsById,
    mapsArray: dofusData.maps
  }
}
