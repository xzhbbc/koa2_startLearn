const router = require('koa-router')()

router.get('/', async (ctx) => {
    if (ctx.session.userName != void 0) {
        ctx.redirect('/success')
    }
    await ctx.render('login')
    return
})


module.exports = router