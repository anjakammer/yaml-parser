const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')

fs.readdirSync(process.env.DIR).forEach(file => {
  if (path.extname(file).toLowerCase() === (process.env.EXT).toLowerCase()) {
    console.log(
      JSON.stringify(yaml.safeLoad(fs.readFileSync(process.env.DIR + '/' + file, 'utf8'))) + ','
    )
  }
})
