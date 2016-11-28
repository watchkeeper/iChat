import 'style'
/*must set in webpack.config.js*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import {Chatter} from './components/Chatter.js'
import {Menu} from './components/Menu.js'
import {Contacts} from './components/Contacts.js'
import {Collection} from './components/Collection.js'

/*here*/
Vue.use(VueRouter)

Vue.component('nav-bar',Menu)
/*one*/
const routes = [
	/*main page也设定为chatter，用别名来设定*/
	{path:'/chatter', components: {App:Chatter}, alias: '/'},
	{path:'/chatter',components:{App:Chatter},name:'chatter'},
	{path:'/contacts',components:{App:Contacts},name:'contacts'},
	{path:'/collection',components:{App:Collection},name:'collection'}
]
/*two*/
const router = new VueRouter({
	routes
})
/*three*/
const app = new Vue({
	el:'#root',
	router:router,
	data:{
		
	},
	computed:{

	},
	methods:{

	}
})