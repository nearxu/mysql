
const mysql = require('mysql')

const connection = mysql.createConnection({
  host     : '193.112.166.186',   // 数据库地址
  user     : 'root',    // 数据库用户
  password : '123456789',   // 数据库密码
  database : 'test'  // 选中数据库
})

connection.query('select * from User',(err,result,fields) =>{
  if(err){
    throw err
  }
  console.log('result',result)

  console.log('fields',fields)
  // connection.release()
})