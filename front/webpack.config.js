const webpack = require('webpack')
const path = require('path')

const root = __dirname

module.exports = {
	entry:{
			index:path.resolve(root,'src/index.js')
	},
	output:{
		path:path.resolve(root,'dest'),
		filename:'[name].bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:path.resolve(root,'node_modules'),
				loader:'babel',
				query:{
					presets:['es2015']
				}
			},
			{
				test:/\.less$/,
				loader:'style!css!less',
				include:path.resolve(root,'src')
			},
			{
				test:/\.(png|jpg|gif|jpeg)$/,
				loader:`url?limit=${5*1024*1024}`
			}
		]
	},
	devServer:{
		historyApiFallback: true,
		quiet:false,
		progress:true,
		contentBase:'./',
		color:true,
		port:8989,
		compress:true
	},
	plugins:[
		new webpack.ProvidePlugin({
			$_: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	],
	resolve:{
		root:root,
		extension:['less','js'],
		alias:{
			style:path.resolve(root,'src/less/index.less'),
			'vue$': 'vue/dist/vue.common.js'
		}
	}
}