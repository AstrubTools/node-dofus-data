const fs = require('fs')
const path = require('path')

function xmlMapsToJson (directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }
    files.forEach((file) => {
      if (file.includes('xml')) {
        let xml = fs.readFileSync(path.join(directoryPath, file), { encoding: 'utf-8' })
        let convert = require('xml-js')
        let res = convert.xml2js(xml, { compact: true, spaces: 4 })
        let obj = {}
        obj = { id: parseInt(res.RECORD.ID._text),
          width: parseInt(res.RECORD.ANCHURA._text),
          height: parseInt(res.RECORD.ALTURA._text),
          x: parseInt(res.RECORD.X._text),
          y: parseInt(res.RECORD.Y._text),
          cells: res.RECORD.MAPA_DATA._text }

        fs.writeFile(`data/official_130/maps/${file.split('.')[0]}.json`, JSON.stringify(obj, null, 2), 'utf8', () => {})
      }
    })
  })
}

xmlMapsToJson('/home/louis/Downloads/map')

function xmlItemsToJson (directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }
    files.forEach((file) => {
      if (file.includes('xml')) {
        let xml = fs.readFileSync(path.join(directoryPath, file), { encoding: 'utf-8' })
        let convert = require('xml-js')
        let res = convert.xml2js(xml, { compact: true, spaces: 4 })
        let obj = {}

        obj = { id: parseInt(res.RECORD.ID._text),
          type: parseInt(res.RECORD.TIPO._text),
          name: res.RECORD.NOMBRE._text,
          level: parseInt(res.RECORD.NIVEL._text),
          pods: parseInt(res.RECORD.PODS._text),
          ethereal: parseInt(res.RECORD.ES_ETEREO._text) === 1,
          requirements: res.RECORD.CONDICIONES._text,
          stats: res.RECORD.STATS_ARMA._text ? res.RECORD.STATS_ARMA._text.split(',') : '' }
        fs.writeFile(`data/official_130/items/${file.split('.')[0]}.json`, JSON.stringify(obj, null, 2), 'utf8', () => {})
      }
    })
  })
}

xmlItemsToJson('/home/louis/Downloads/items')
