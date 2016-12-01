const tpl = ()=>(
	`
		<div id='chatter'>
			<ul>
				<li id='search'>
					<input type='text' placeholder='搜索'><div class='seach-icon'></div>
				</li>
				<li class='recent_list' >
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
					<div class='self_talk talk'>
						<div class='language'>为你我愿意为你,流浪到天际我愿我愿意为你为你我流浪到天际我愿我愿意为你为你我流浪到天际我愿我愿意为你为你我,</div>
						<div class='figure'>
							<img  :src='photo'>
						</div>
					</div>
					<div class='other_talk talk'>
						<div class='figure'>
							<img  :src='photo'>
						</div>
						<div class='language'>我愿意为你,流浪到天际我愿意为你,流浪到天际我愿意为你,流浪到天际我愿意为你,流浪到天际</div>
					</div>
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
