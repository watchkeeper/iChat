const config = require('../config.js')
const mongodb = require('mongodb')
const mc = mongodb.MongoClient
const assert = require('assert')

const port = config.mongo.port
const hostname = config.mongo.hostname
const db = config.mongo.db

const url = `mongodb://${hostname}:${port}/${db}`

// insert('test',{name:"you",me:'ddd'})
const insert = (collection,data)=>{
	const p = new Promise((resolve,reject)=>{
		mc.connect(url,(err,db)=>{
			assert.equal(null,err)
			const col = db.collection(collection)
			/*仅仅一个对象插入*/
			if(data.length===undefined){
				col.insertOne(data,(err,result)=>{
					assert.equal(null,err)
					// console.log(result)
					resolve(result)
					//有这个命令行才会结束
					db.close()
				})
			}else{
				col.insertMany(data,(err,result)=>{
					assert.equal(null,err)
					// console.log(result)
					resolve(result)
					db.close()
				})
			}
		})
	})
	return p
}

// findOne('test',{name:"wuruijie",girl:'zhongyaji'},{name:1}) first obj is query  second is the fields I select
const findOne = (collection,query,fields)=>{
	const p = new Promise((resolve,reject)=>{
		mc.connect(url,(err,db)=>{
			assert.ok(!err)
			const col = db.collection(collection)
			col.findOne(query,{fields:fields},(err,result)=>{
				assert.ok(!err)
				// console.log(result)
				resolve(result)
				db.close()
			})

		})
	})
	return p
}

// find('test',{name:'wuruijie'})
const find = (collection,query)=>{
	const p = new Promise((resolve,reject)=>{
		mc.connect(url,(err,db)=>{
			assert.ok(!err)
			const col = db.collection(collection)
			col.find({}).toArray((err,result)=>{
				assert.ok(!err)
				// console.log(result)
				resolve(result)
				db.close()
			})
		})
	})
	return p
}


module.exports = {
	insert:insert,
	findOne:findOne,
	find:find
}