const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

let output = '{'
fs.readdirSync(process.env.DIR).forEach(file => {
  let filepath = path.parse(file)
  if (filepath.ext.toLowerCase() === (process.env.EXT).toLowerCase()) {
    output = output + `"${filepath.name}":` +
      JSON.stringify(yaml.safeLoad(fs.readFileSync(process.env.DIR + '/' + file, 'utf8'))) + ','
  }
})
console.log(output.substring(0, output.length - 1) + '}')
