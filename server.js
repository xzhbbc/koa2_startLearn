const Koa = require('koa')
const app = new Koa()
const mongoose = require('mongoose')
const convert = require('koa-convert')
const koaStatic = require('koa-static')
const path = require('path')
const routers = require('./router/index')

const MongooseStore = require('koa-session-mongoose')
const session = require('koa-session-minimal')

const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

app.use(bodyParser())

//配置静态资源中间件
app.use(convert(koaStatic(
    path.join(__dirname, './static')
)))

// 配置服务端模板渲染引擎中间件
app.use(views(path.join(__dirname, './static'), {
    extension: 'html'
}))


//数据库配置
const db = require('./config')

mongoose.Promise = global.Promise

mongoose.connect(db.database, function (err) {
    if (err) {
        console.log('数据库连接失败')
    } else {
        app.listen(3000)
        console.log('数据库连接成功')
    }
})

app.use(session({
    key: 'session-id',          // cookie 中存储 session-id 时的键名, 默认为 koa:sess
    cookie: {                   // 与 cookie 相关的配置
        domain: 'localhost',    // 写 cookie 所在的域名
        path: '/',              // 写 cookie 所在的路径
        maxAge: 86400000,      // cookie 有效时长
        httpOnly: true,         // 是否只用于 http 请求中获取
        overwrite: false        // 是否允许重写
    }
}))

//初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())


