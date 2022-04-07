//Install express server
const express = require('express');
const path = require('path');

const app = express();

//Serve only the static files from the ogani directory
app.use(express.static(__dirname + '/ogani'));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/ogani/index.html'));
});

//Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);