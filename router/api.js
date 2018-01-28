const router = require('koa-router')()

const session = require('koa-session')

//用户表
const User = require('../modelSchemas/User')

//注册路由
router.post('/register', async (ctx) => {
    const { user, pass } = ctx.request.body

    let checkUser = await User.findOne({ user })
    if (!checkUser) {
        const users = new User({
            user,
            password: pass
        })
        const doc = await users.save()
        if (!doc.errors) {
            ctx.body = { code: 0, meg: '注册成功' }
        } else {
            ctx.body = { code: 1, meg: '注册失败' }
        }
    } else {
        ctx.body = { code: 0, meg: '已经注册过该账号！' }
    }

})

//登录路由
router.post('/login', async (ctx) => {
    const { user, pass } = ctx.request.body
    if (ctx.session.userName != void 0) {
        ctx.body = { code: 2, meg: '你已经登录过了' }
        return
    }
    let checkUser = await User.findOne({ user, password: pass })
    if (checkUser) {
        ctx.session.userName = checkUser.user
        ctx.session.userId = checkUser._id
        ctx.body = { code: 0, meg: '登录成功' }
    } else {
        ctx.body = { code: 1, meg: '账号或密码不正确' }
        return
    }
})

//退出登录
router.get('/logout', async (ctx) => {
    ctx.session = {}
    ctx.cookies.set('session-id', '')
    ctx.cookies.set('user', '')
    ctx.redirect('/login')
})

module.exports = router