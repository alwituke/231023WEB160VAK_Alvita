const path = require('path')

export default {
    //kur bus saugomas failas 
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}