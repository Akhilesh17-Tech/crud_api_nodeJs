const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		contact: {
			type: String,
			unique: true,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		designation: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);
module.exports = User;
