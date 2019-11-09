# node-dofus-data
[![NPM version](https://img.shields.io/npm/v/node-dofus-data.svg)](http://npmjs.com/package/node-dofus-data)
[![Build Status](https://img.shields.io/circleci/project/louis030195/node-dofus-data/master.svg)](https://circleci.com/gh/louis030195/node-dofus-data)
[![Try it on gitpod](https://img.shields.io/badge/try-on%20gitpod-brightgreen.svg)](https://gitpod.io/#https://github.com/louis030195/node-dofus-data)

expose Dofus data in NodeJS

## Features

- Game actions

## Example

```js
const dofusData = require('node-dofus-data')('official_130')

console.log(JSON.stringify(dofusData.gameAction.server.lifeChange))
```
