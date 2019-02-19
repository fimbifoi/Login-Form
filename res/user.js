const mongoose = require ('mongoose');

var userDetail = new mongoose.Schema({
	username: {type: String, unique: true)},
	password: {type: String},
	firstname: String,
	lastname: String,
});

var User = mongoose.model('thisUser', userDetail);
module.exports = user;