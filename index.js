const express = require('express')
const app = express()

app.use(express.static(__dirname));
app.get('/', (req, res) =>
	{
		res.sendFile(__dirname + '/views/login_screen/index.html')
	});

app.listen(3000, () => console.log('listen port is 3000'))
