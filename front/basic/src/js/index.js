/*tpl*/
class tpl{
	static frame(){
		return
		`
			<div>hello</div>
		`
	}
}
/*component*/
class com{
	static frame(){
		return {
			template:tpl.frame(),
			data:()=>({

			}),
			methods:{

			}
		}
	}
}
/*operation*/
class app{
	constructor(){
		this.main()
	}
	routes(){
		return [
			{path:'/',component:com.frame()}
		]
	}
	router(){
		const router = new VueRouter({
			routes:this.routes()
		})
		return router
	}
	main(){
		const app = new Vue({
			el:'#root',
			router:this.router(),
			data:{

			},
			methods:{

			}
		})
	}
}
const run = new app()