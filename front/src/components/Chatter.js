import Vue from 'vue'

const node = {
	get_list_url:"http://localhost:622/get_list",
	chat_server:"ws://localhost:525"
}
let ws,self,wither

const tpl = ()=>(
	`
		<div id='chatter'>
			<ul>
				<li id='search'>
					<input type='text' placeholder='搜索'><div class='seach-icon'></div>
				</li>
				<li class='recent_list' v-for="x in self_msg" :webjj="x.webjj" @click="chat(x)">
					<div>
						<img :src='x.photo'>
					</div>
					<article>
						<p style="padding-top:5px">
							<span>{{x.nickname}}</span>
							<span>20:20</span>
						</p>
						<p style="padding-bottom:5px">
							<span>this is recent msg</span>
							<span>{{x.sex==0?'femail':'male'}}</span>
						</p>
					</article>
				</li>
			</ul>
			<div id='chat'>
				<strong v-show="!chating">WebJJ,让你们亲密无间</strong>
				<p id='header' v-show="chating">
					<span>{{chat_other?chat_other.nickname:''}}</span>&emsp;
					<span class='down-icon'></span>
				</p>

				<div id='chat_box' v-show="chating" v-append-msg:chat="send_ok" >
					<span v-for="d in all_msg">
						<div class='self_talk talk' v-show="d.id=='post'?true:false">
							<img src='/img/loading.gif' style='margin-top:12px;' v-show="!send_ok">
							<div class='language'>{{d.msg}}</div>
							<div class='figure'>
								<img  :src="chat_self?chat_self.photo:''">
							</div>
						</div>
						<div class='other_talk talk' v-show="d.id=='get'?true:false">
							<div class='figure'>
								<img  :src="d.user.photo">
							</div>
							<div class='language'>{{d.msg}}</div>
						</div>
					</span>
				</div>

				<div id='footer' v-show="chating">
					<div id='toolbar'>
						<span>表情</span>
						<span>文件</span>
						<span>语音</span>
					</div>
					<textarea id='input_box' v-model="content" @keyup.enter="send" ></textarea>
					<p id='send'>
						Ctrl+Enter换行&emsp;<button type='button' id='post' @click='send'>发送</button>
					</p>
				</div>
			</div>
		</div>
	`
)
/*定义指令*/
Vue.directive('append-msg',{
	bind(){

	},
	update(el,binding){
	}
})
export const Chatter = {
	template:tpl(),
	created(){
		this.get_user()
	},
	data:()=>({
		self_msg:null,
		chating:false,
		chat_self:null,
		chat_other:null,
		send_ok:true,
		content:null,
		all_msg:[],
	}),
	computed:{
		
	},
	methods:{
		get_user(){
			const user = JSON.parse(sessionStorage.user)
			this.self_msg = user
			$_.ajax({
				url:node.get_list_url,
				data:{webjj:user.webjj},
				dataType:'json',
				type:'get'
			}).done((list)=>{
				this.self_msg = list.data
				// console.info(this.self_msg)

				/*开始连接*/

				//自己
				self = JSON.parse(sessionStorage.user)
				this.chat_self = self

				// console.log('client begin connect...')
				ws = new io(node.chat_server)
				//begin talk
				/*listeners this all point vue,进来就要监听所有*/
				ws.on('connect',()=>{
					console.info(`${self.nickname}已经链接到聊天服务器!`)
				})
				ws.on('disconnect',()=>{
					console.info(`${self.nickname}已经从聊天服务器断开!`)
				})
				ws.on('user_in_info',(msg)=>{
					console.info(msg)
				})
				ws.on('send_msg_info',(msg,flag)=>{
					// console.info(msg,flag)
					/*消息发送成功之后的返回*/
					if(flag){
						this.send_ok = true
					}else{
					/*对方不在线时候的提示*/
						alert(msg)
					}
				})
				/*接受到的消息的格式*/
				ws.on('accept_msg',(msg,from_user)=>{
					/*如果是自己,那么就发一条就行了,前面发了,这里不用了*/
					if(from_user.webjj==self.webjj){
						return
					}
					/*有时候连天框框还没出来隐藏的*/
					console.log('chating...'+this.chating)
					if(!this.chating){
						console.log('close chating')
						this.chating = true
						this.chat_other = from_user
						/*刚开始若是没有打开聊天框,那么,谁发来,谁就是去的对象*/
						wither = from_user
					}
					const accept_format = {
						msg:msg,
						user:from_user,
						id:'get'
					}
					console.warn(accept_format)
					this.all_msg.push(accept_format)
				})
				/*开始自己必须加入,否则,别人来了,找不到*/
				ws.emit('user_in',self)
			})
		},
		chat(x){
			/*这里面是点击用户了才能进行,有的不点击就要进行,所以在user加载完就要监听*/
			const len = this.all_msg.length
			/*splice用来模拟清空数组*/
			this.all_msg.splice(0,len)
			/*显示聊天框*/
			this.chating = true
			//对方
			wither = x
			this.chat_other = wither
			
		},
		send(){
			if(this.chating===false){
				return
			}
			const information = this.content
			ws.emit('send_msg',information,wither)
			this.send_ok = false

			const send_format = {
				msg:information,
				user:self,
				id:'post'
			}
			this.content = ''
			// console.info(send_format)
			/*推入自我消息,更改试图*/
			this.all_msg.push(send_format)
			
		}
	}
}
