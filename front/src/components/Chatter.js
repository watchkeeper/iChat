const tpl = ()=>(
	`
		<div id='chatter'>
			<ul>
				<li id='search'>
					<input type='text' placeholder='搜索'><div class='seach-icon'></div>
				</li>
				<li class='recent_list'>
					<div>
						<img :src='photo'>
					</div>
					<article>
						<p>
							<span>nickname</span>
							<span>time</span>
						</p>
						<p>
							<span>this is recent msg</span>
							<span>flag</span>
						</p>
					</article>
				</li>
			</ul>
			<div id='chat'>
				<p>
					<span>nickname</span>
					<span>pull down</span>
				</p>
				<div id='chat_box'>
					<p class='self_talk'>
						<div>
							<img  src=''>
							<div class='language'></div>
						</div>
					</p>
					<p class='other_talk'>
						<div>
							<img  src=''>
							<div class='language'></div>
						</div>
					</p>
				</div>
				<div id='toolbar'>
					<span>表情</span>
					<span>文件</span>
					<span>语音</span>
				</div>
				<textarea id='input_box'></textarea>
				<p>
					<button type='button' id='post'>发送</button>
				</p>
			</div>
		</div>
	`
)

export const Chatter = {
	template:tpl(),
	data:()=>({
		photo:'/img/photo.jpg'
	}),
	computed:{

	},
	methods:{

	}
}
