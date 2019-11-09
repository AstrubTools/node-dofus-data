# node-dofus-data

expose Dofus data in NodeJS

## Features

- Game actions

## Example

```js
const dofusData = require('dofus-data')('official_130')

console.log(JSON.stringify(dofusData.gameAction.server.lifeChange))
```
