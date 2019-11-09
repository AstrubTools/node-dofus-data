module.exports = dofusDataToNode

function dofusDataToNode (dofusData) {
  const indexes = require('./indexes.js')(dofusData)
  return {
    gameAction: dofusData.enums.GameAction
  }
}
