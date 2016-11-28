import 'style'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import {Chatter} from './components/Chatter.js'


const tpl = ()=>(
	`
		<div id='box'>
			hello wolrd
		</div>
	`
)

const App = {
	template:tpl(),
	data:()=>({

	}),
	methods:{

	}
}
console.log(App)

const routes = [
	{
		path:'/',
		component:App
	}
]
const router = new VueRouter({
	routes
})

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