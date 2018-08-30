// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const loginMiddleware = require('./login-middleware.js')

server.use(middlewares)
server.use(loginMiddleware)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running, access it via http://localhost:3000')
})