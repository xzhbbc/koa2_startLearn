const router = require('koa-router')()

router.get('/', async (ctx) => {
    if (ctx.session.userName != void 0) {
        ctx.cookies.set('user',ctx.session.userName,{
            domain: 'localhost',    // 写 cookie 所在的域名
            path: '/',              // 写 cookie 所在的路径
            maxAge: 86400000,      // cookie 有效时长
            httpOnly: false,         // 是否只用于 http 请求中获取
            overwrite: true        // 是否允许重写
        })
        await ctx.render('success')
        return
    } else {
        await ctx.render('login')
        return
    }
    
})

module.exports = router