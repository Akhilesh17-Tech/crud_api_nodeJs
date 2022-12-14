// configuration of mongoose

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud_api_users');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to mongoDB'));

db.once('open', () => {
	console.log('MongoDB Database connected');
});

module.export = db;
