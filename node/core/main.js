const mongo = require('../lib/mongo')

const main = new Object()

main.all = (req,res,next)=>{
	res.set({
		"builder-msg":"modlefairy",
		"Access-Control-Allow-Methods":"POST,GET",
		"Access-Control-Max-Age":"3600",
		"Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, client_id, uuid, Authorization",
		"Access-Control-Allow-Origin":"*",
		"Access-Control-Allow-Credentials":true
	})
	next()
}
main.judgeLogin = (req,res,next)=>{
	const client = req.session.user
	if(!client){
		res.send({code:'1',msg:'未登录'})
	}else{
		res.send({code:'0',msg:'已登录'})
	}
}
main.register = (req,res,next)=>{
	const data = req.body
	// console.log(data)
	/*以后密码还要加秘*/
	mongo.insert('users',data)
	.then((result)=>{
		console.log(result)
		if(result.insertedCount==1){
			res.send({code:0,msg:'注册成功'})
		}else{
			res.send({code:1,msg:'注册失败'})
		}
	})
}
main.login = (req,res,next)=>{
	const user = req.body
	const name = user.username
	const pswd = user.password
	mongo.findOne('users',{username:name},{})
	.then((data)=>{
		console.log(data)
		if(!data){
			res.send({code:1,msg:'用户名不存在'})
		}else{
			if(pswd!=data.password){
				res.send({code:-1,msg:'密码不正确'})
			}else{
				delete data.password
				const client_store = data
				//cookie不能跨域,前台访问后台本来就是跨域的,得不到
				req.session.user = data
				res.cookie('user',JSON.stringify(client_store))
				res.send({code:0,msg:'验证成功',user:client_store})
			}
		}
	})
}
main.check_username_url = (req,res)=>{
	const username = req.body.username
	mongo.findOne('users',{username:username},{_id:1})
	.then((data)=>{
		if(data){
			res.send({code:1,msg:'用户已经存在'})
		}else{
			res.send({code:0,msg:'可以创建用户'})
		}
	})
}


module.exports = main
