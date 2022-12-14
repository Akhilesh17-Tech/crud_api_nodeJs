const User = require("../model/users");
const bcrypt = require("bcrypt");
const { response } = require("express");

module.exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		return res.status(200).json({
			data: users,
			success: true,
			message: "All the users are here!",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.createUser = async (req, res) => {
	try {
		await User.create(req.body);
		return res.status(200).json({
			success: true,
			message: "New User has been created!",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.getUserDetails = async (req, res) => {
	try {
		const { id } = req.params;
		User.findById(id, function (err, user) {
			if (err) {
				console.log(err);
				return res.status(404).json({
					message: `User not found with given Id : ${id} please check Id!`,
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "Please find the details of the user!",
					user: user,
				});
			}
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		return res.status(200).json({
			success: true,
			message: "User deleted",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, email, contact, address, designation } = req.body;
		// console.log(name, '------------------------------------');
		User.findById(
			id,
			{
				$set: req.body,
			},
			(error, data) => {
				if (error) {
					console.log(error);
					return res.status(404).json({
						message: `User not found with given Id : ${id} please check Id!`,
					});
				} else {
					return res.status(200).json({
						success: true,
						message: `User updated with given Id : ${id}`,
					});
				}
			}
		);
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};
