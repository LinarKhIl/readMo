var mongoose = require('mongoose');
/*mongoose.connect('mongodb://localhost/mongoose', function(err)
	{
		if(err)throw err;
		console.log("Connected");
	});*/
var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  login: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

var User = mongoose.model('User', UserSchema);
function createNewUser(_email, _login, _password)
{
	var newUser = new User({email:_email, login: _login, password: _password});
	newUser.save(function(err)
		{
			if(err) throw err;
			console.log("New user succesfully saved");
		});
}

