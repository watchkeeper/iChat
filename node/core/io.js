
let connect_count = 0
const user_sockets = {}

const socket_io = (io)=>{
	/*一对一*/
	io.on('connection',(socket)=>{

		connect_count++
		console.log(`有${connect_count}人想要一对一聊天`)

		socket.on('user_in',(from_user)=>{
			user_sockets[from_user['webjj']] = socket
			socket.emit('user_in_info',`'${from_user['nickname']}'连接成功......`)
			socket.on('send_msg',(msg,to_user)=>{
				console.log(to_user)
				let reply = ''
				if(!user_sockets[to_user['webjj']]){
					reply = `由于系统不完善,此时'${to_user['nickname']}'不在线,暂时无法发送信息!`
					socket.emit('send_msg_info',reply,false)
					return
				}else{
					user_sockets[to_user['webjj']].emit('accept_msg',msg,from_user)
					socket.emit('send_msg_info',reply,true)
					return
				}
			})
		})

	})
}

exports.reflect = socket_io