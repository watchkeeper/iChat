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
					<div><img :src='userMsg.photo'></div>
					<p>{{userMsg.state}}</p>
					<p>iChat ID : 0525forever</p>
					<p><button type='button' id='btn'>发消息</button></p>
				</figure>
			</div>
			<div id='top'>
				<div>
					<img :src='userMsg.photo'  @click="jump">
				</div>
				<router-link :to="{name:'chatter'}" class='public_link' id='chat'></router-link>
				<router-link :to="{name:'collection'}" class='public_link' id='collect'></router-link>
				<router-link :to="{name:'contacts'}" class='public_link' id='contact'></router-link>
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
			photo:'/img/photo.jpg',
			state:'Just hope, It is hope',
			name:"your watch keeper",
			/*man is one women is zero*/
			sex:0
		},
		showOrNotIn:false
	}),
	computed:{

	},
	methods:{
		jump(){
			this.showOrNotIn = !this.showOrNotIn

		}
	}
}