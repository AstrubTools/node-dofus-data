const fs = require('fs')
const path = require('path')

function appendLine (filePath, whatToAdd) {
  fs.readFile(filePath, 'utf8', (err, result) => {
    if (err) {
      throw Error(err)
    }
    let lines = result.split('\n')

    let newContent = lines.map((line) => {
      return line + whatToAdd
    }).join('\n')
    fs.writeFile(filePath, newContent, 'utf8', (err) => {
      if (err) {
        throw Error(err)
      }
      console.log('The file has been saved!')
    })
  })
}

appendLine('data/official_130/items.js', ',')
