const router = require('koa-router')()

//引入子路由
const home = require('./home')
const api = require('./api')
const login = require('./login')
const success = require('./success')

router.use('/', home.routes(), home.allowedMethods())

router.use('/api', api.routes(), api.allowedMethods())

router.use('/login', login.routes(), login.allowedMethods())

router.use('/success', success.routes(), success.allowedMethods())

module.exports = router