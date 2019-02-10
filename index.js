const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

let output = '['
fs.readdirSync(process.env.DIR).forEach(file => {
  if (path.extname(file).toLowerCase() === (process.env.EXT).toLowerCase()) {
    output = output +
      JSON.stringify(yaml.safeLoad(fs.readFileSync(process.env.DIR + '/' + file, 'utf8'))) + ','
  }
})

console.log(output + ']')
