
# node-dofus-data

[![NPM version](https://img.shields.io/npm/v/node-dofus-data.svg)](http://npmjs.com/package/node-dofus-data)
[![Build Status](https://img.shields.io/circleci/project/louis030195/node-dofus-data/master.svg)](https://circleci.com/gh/AstrubTools/node-dofus-data)
[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/AstrubTools/node-dofus-data)

expose Dofus data in NodeJS

## Features

- Game actions
- Cell types
- Maps
- Items (positions)
- Official servers
- Character orientation

## Example

```js
const dofusData = require('node-dofus-data')('official_130')

console.log(dofusData.gameActions.server.lifeChange)
console.log(dofusData.cellTypes.teleportCell)
console.log(dofusData.maps[5])
console.log(dofusData.mapsArray.find(e => e.id === 5))
```
