const express = require('express')
const socket_io = require('socket.io')
const http = require('http')
const config = require('./config')

const app = express()
const http_server = http.createServer(app)
const chat_server = socket_io(http_server)

const CHAT_PORT = config.CHAT_PORT
const HTTP_PORT = config.HTTP_PORT

/*server basic setting*/
const cookieParser = require('cookie-parser')
app.use(cookieParser())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const session = require('express-session')
app.use(session({
	cookie:{
		path:'/',
		httpOnly:true,
		secure:false,
		maxAge:config.cookieAge
	},
	name:'NODESESSIONID',
	//I'd alway change session
	resave:false,
	secret:config.sessionKey,
	saveUninitialized:false
}))

const io = require('./core/io')
io.reflect(chat_server)

const router = require('./router')
router.reflect(app)

http_server.listen(HTTP_PORT)
console.log(`Http server has ran at port ${HTTP_PORT}......`)
chat_server.listen(CHAT_PORT)
console.log(`Chat server has ran at port ${CHAT_PORT}......`)