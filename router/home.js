const router = require('koa-router')()

router.get('/', async (ctx) => {
  if (ctx.session.userName != void 0) {
    ctx.redirect('/success')
  } else {
    await ctx.render('register')
    return
  }
})

module.exports = router