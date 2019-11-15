const dofusData = require('..')('official_130')
const assert = require('assert')

assert.deepStrictEqual(dofusData.gameActions.server.lifeChange, 100)
assert.deepStrictEqual(dofusData.cellTypes.teleportCell, 2)
assert.deepStrictEqual(dofusData.maps[5], dofusData.mapsArray.find(e => e.id === 5))
assert.deepStrictEqual(dofusData.orientations.up, [ 0.06, 0.2, 0.15 ])
assert.deepStrictEqual(dofusData.orientationUtils.isDiagonal(dofusData.orientations.up), false)
