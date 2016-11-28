tool:
	(1) webpack 
	(2)vue2.0--这个东西不是很熟悉,先从基层的试用起来【先来基础一发,再升级高级一发】
	(3)node env 6.0++

develope command:
	(1) npm test
build command
	(1)npm run build


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
	**vue:
		【1】这种es6架构有问题，如此架构不号，但是面临不是很熟悉的问题，先用普通的，熟悉哈，再采用装逼架构
		【2】什么架构都有问题沃日妈批 2.0 版本简直坑，是有一个StandAlone 和 runtimeOnly build。 webpack属于
			后者，不带有模板编译器，前者有。
		【3】在es6的协同中，Vue使用VueRouter需要有一句  Vue.use(VueRouter)才使得<router-view></router-view>生效
		【4】router-view中有id,template中的最外层被影射为router-view中的id,否则使用template最外层的
		【5】router-view设定了name,则意思为在匹配时候必须在components[默认是component]输入名字来匹配模板,routes中的name是为了router-link中的:to链接而设定的
		【6】vue的字模板的props的属性的得到,还是this.propsName,但是，仅仅是mehods和computed中可以，data中就是undefined
		【7】computed里面申明的是没有有的data属性，否则会报错，监听属性变化而触发运算
	**接口记录: