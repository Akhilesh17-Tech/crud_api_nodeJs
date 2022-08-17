const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const app = express();
// urlencoded is a built-in middleware function in express, it parses incoming requests with url encoded payloads and is based on body parser.
app.use(express.urlencoded());

// json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the body parser.
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Routing

// app.get('/', (req, res) => {
// 	console.log('TEST');
// 	res.send('Hello From HomePage');
// });

// mongoDB use
const db = require('./config/mongoose');

//  Routing
app.use('/', require('./routes/index.js'));

// server listening on defined port
app.listen(PORT, (err) => {
	if (err) {
		console.log('Error in running server!,', err);
		return;
	}
	console.log(`Server running on port : http://localhost:${PORT}`);
	return;
});
