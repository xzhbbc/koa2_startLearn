> A Koa2 project （实现登录，注册）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
node server / nodemon server.js

# 涉及内容 (为了学习koa2 及 session 做的一个比较简单的注册登录跳转的功能)
koa2 session mongoose 

# 在学习当中遇到的一部分坑
1.想要ctx.render渲染页面，需要配置个中间koa-view
2.在配置session的时候，需要注意，session必须在路由中间件编写的前面，否则不会适应到路由当中。

# 路由方面
1. index.js 总路由
2. api.js  路由相关操作处理（登录操作，注册操作，登出操作）
3. login.js 跳转登录页，登录页渲染路由
4. success.js 跳转

# 优化方面
感觉我的路由设置，还是过多，需要进一步的调整。
koa2的异步和同步方面理解还不够深入。
```

