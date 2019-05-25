const koa = require('koa')
const db = require('./db')

const app = new koa()

app.listen(3000,() => {
  console.log('port 3000')
})