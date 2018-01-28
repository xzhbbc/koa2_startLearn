const mongoose = require('mongoose')

//用户表结构
module.exports = mongoose.model('User', new mongoose.Schema({
    //用户名
    user: {type: String, require: true},
    //密码
    password: {type: String, require: true}
}))