const tpl = ()=>(
	`
		<nav id='left_bar'>
			<div id='personal' v-show="showOrNotIn">
				<figure>
					<figcaption>
						{{userMsg.name}} 
						<span :style="{color:userMsg.sex?'blue':'pink'}">
							{{userMsg.sex?'male':'female'}}
						</span>
					</figcaption>
					<div><img :src='userMsg.photo' ></div>
					<p>{{userMsg.state}}</p>
					<p>iChat ID : {{userMsg.webjj}}</p>
					<p><button type='button' id='btn'>发消息</button></p>
				</figure>
			</div>
			<div id='top'>
				<div>
					<img :src='userMsg.photo'  @click="jump" :_id="userMsg._id">
				</div>
				<router-link 
					:to="{name:'chatter'}" 
					class='public_link' id='chat' 
					:style="init_light=='chatter'?light_chat:''" 
				>
				</router-link>
				<router-link 
					:to="{name:'collection'}" 
					class='public_link' id='collect' 
					:style="init_light=='collection'?light_collect:''" 
					>
				</router-link>
				<router-link 
					:to="{name:'contacts'}" 
					class='public_link' id='contact' 
					:style="init_light=='contacts'?light_contact:''" 
					>
				</router-link>
			</div>
			<a href='javascript:void(0)' class='public_link' id='setting'></a>
		</nav>
	`
)

export const Menu = {
	template:tpl(),
	props:[""],
	data:()=>({
		userMsg:{
			photo:'',
			state:'',
			name:'',
			/*man is one women is zero*/
			sex:0,
			webjj:'',
			_id:''
		},
		showOrNotIn:false,
		init_light:'',
		light_chat:{
			"background-position-y":"-2500px"
		},
		light_collect:{
			"background-position-y":"-2610px"	
		},
		light_contact:{
			"background-position-y":"-2720px"	
		},

	}),
	created(){
		this.get_init_data()
	},
	computed:{
		init_light(){
			return this.$route.name
		}
	},
	methods:{
		jump(){
			console.info(this.$route)
			this.showOrNotIn = !this.showOrNotIn
		},
		get_init_data(){
			const user = JSON.parse(sessionStorage.user)
			// console.info(user)
			this.userMsg.photo = user.photo
			this.userMsg.state = user.saying
			this.userMsg.sex = user.sex
			this.userMsg.name = user.nickname
			this.userMsg.webjj = user.webjj
			this.userMsg._id = user._id
		}
	}

}