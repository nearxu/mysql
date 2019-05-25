
const mysql = require('mysql')
const { query } = require('./util/db')

async function getAll(){
  return await query("select * from todo")
}

async function getTodoById(id) {
  const result = await query(`select * from todo where todo.id='${id}'`);
  if (result[0]) {
    return result[0];
  }
  return null;
}

async function remove(id){
  console.log(id)
  return await query(`delete from todo where todo.id='${id}'`)
}

async function update(todo){
  console.log(todo)
  todo.is_done = todo.is_done == undefined ? 0:todo.is_done;
  if(todo.id){
    console.log(todo.id)
    Object.assign(getTodoById(todo.id),todo)
    return await query(`
      update todo
      set content = '${todo.content}',is_done = '${todo.is_done}'
      where todo.id = ${todo.id}
    `)
  }else {
    console.log('insert')
    todo.date = new Date().toJSON().slice(0, 10);
    return await query(`
    INSERT INTO todo (content,date,is_done) 
    VALUES ('${todo.content}','${todo.date}','${todo.is_done}')
    `);
  }
}

module.exports = {
  getAll,
  update,
  remove,
  getTodoById
}
