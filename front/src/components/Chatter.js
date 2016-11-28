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
						<p style="padding-top:5px">
							<span>某言</span>
							<span>20:20</span>
						</p>
						<p style="padding-bottom:5px">
							<span>this is recent</span>
							<span>flag</span>
						</p>
					</article>
				</li>
			</ul>
			<div id='chat'>
				<p id='header'>
					<span>nickname</span>&emsp;
					<span class='down-icon'></span>
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
				<div id='footer'>
					<div id='toolbar'>
						<span>表情</span>
						<span>文件</span>
						<span>语音</span>
					</div>
					<textarea id='input_box'></textarea>
					<p id='send'>
						Ctrl+Enter换行&emsp;<button type='button' id='post'>发送</button>
					</p>
				</div>
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
