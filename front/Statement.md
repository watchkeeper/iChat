tool:
	(1) webpack 
	(2)vue2.0--这个东西不是很熟悉,先从基层的试用起来【先来基础一发,再升级高级一发】
	(3)node env 6.0++

develope command:
	(1) npm test


point：
	**less：
		【1】extend：
			一个选择器中使用拓展，等于拓展的对象选择器中再加上这个选择器，也就是它有了拓展对象的样式：
			.modle:extend(.fairy){
				color:'red'
			}
			或者写成:
			.modle{
				&:extend(.fariy)
				color:'red'
			}
			.fairy{
				width:30px
			}
			编译后就是
			.modle{color:'red'}   	.fairy,.modle{width:30px}
		【2】@import (less[more choice]) 'path'  导入外部的文件作为less使用不管是什么后缀
		【3】麻批的less里面配合webpack用@import报错,待研究
	**webpack:
		【1】麻批的被坑了半天，忘记文件目录安装webpack-dev-server我日麻批，一直报鸡毛的babel has moved to 
			‘babel-core' , 麻批简直乱报，现在仅仅安装babel-core就行了哦，babel被替代了
		【2】webpack-dev-server的index.html指向的entry要对我日麻批，是虚拟的编辑文件，若是没有指定配置文件
			中的pulicPath,直接就是编译后的文件名