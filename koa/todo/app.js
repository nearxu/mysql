const koa = require('koa')
const views = require('koa-views')
const router = require('koa-route')
const bodyParser = require('koa-bodyparser')
const db = require('./db')
const app = new koa();

app.use(
  views(__dirname+'/views',{
    map:{
      html:'nunjucks'
    }
  })
)

app.use(bodyParser())

app.use(
  router.post('/edit',async function(ctx){
    try{
      const todo = ctx.request.body;
      console.log(todo,'todo')
      await db.update(todo)
      ctx.redirect('/')
    }catch(err){
      ctx.body = err.stack
    }
  })
)

app.use(
  router.post('/remove',async function(ctx){
    const id = ctx.request.body.id;
    try{
      console.log(`remove id '${id}'`)
      await db.remove(id);
      ctx.body = {
        status:0,
        error_message:""
      }
    }catch(err){
      ctx.body = err.stack
    }
  })
)

app.use(
  router.get('/',async function(ctx){
    const todos = await db.getAll();
    await ctx.render('list',{
      list:todos
    })
  })
)

app.use(
  router.get('/add',async function(ctx){
    await ctx.render('form',{todo:{}})
  })
)
app.use(
  router.get('/edit',async function(ctx){
    const id = ctx.query.id;
    if(!id){
      throw new Error('id is not')
    }
    const todo = await db.getTodoById(id)
    if(!todo){
      ctx.body = 'item not found'
    }else {
      await ctx.render('form',{todo})
    }
  })
)


app.use(async ctx => {
  // ctx.body = 'hello world'
  await ctx.render('form',{
    todo:{}
  })
})

app.listen(3000,() => {
  console.log('port 3000')
})