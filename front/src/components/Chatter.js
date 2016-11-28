const tpl = ()=>(
	`
		<ul>
			<li>thisisme</li>
			<li>thisisme</li>
			<li>thisisme</li>
			<li>thisisme</li>
		</ul>
	`
)

export const Chatter = {
	template:tpl(),
	data:()=>({
		name:"chatter"
	}),
	methods:{
		show(){
			console.log('hello')
		}
	}
}
