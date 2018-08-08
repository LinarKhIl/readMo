const express = require('express');
const passport = require('passport');
const app = express();
var mongo = require('./mongodb')

function start()
{
	app.get('/', (req, res) => res.sendFile(__dirname + '/views/main_page/index.html'));
	app.get('/login', function (req, res) 
		{
			res.sendFile(__dirname + '/views/login_screen/index.html');
			console.log(req.query)
		}
	);
	app.get('/register', function(req, res)
		{
			res.sendFile(__dirname + '/views/register_screen/index.html');
			if(req.query.login && req.query.mail && req.query.password)
			{
				var userData = 
					({
						email: req.query.mail,
						login: req.query.login,
						password: req.query.password
					});
				mongo.createNewUser(req.query.mail, req.query.login, req.query.password, function(err)
					{
						throw err;
						console.log("Sccu");
					});
				console.log(req.query);
			}

		});
	app.listen(3000, () => console.log("server started"));
}

exports.start = start;
