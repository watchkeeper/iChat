const main = require('./core/main')

const reflect = (app)=>{
	/* all are port */
	app.all('*',main.all)
	app.post('/register',main.register)
	app.post('/login',main.login)
	app.post('/check_username_url',main.check_username_url)
	app.get('/judgeLogin',main.judgeLogin)
}


exports.reflect = reflect