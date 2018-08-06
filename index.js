const express = require('express')
const app = express()

app.get('/', function(req, res)
	{
		res.sendFile(__dirname + '/views/login_screen/index.html')
	});
app.post('/login', 
	passport.authenticate('local'),
	function(req, res)
	{
		res.redirect('/users/' + req.user.username);
	});

app.listen(3000, () => console.log('listen port is 3000'))
