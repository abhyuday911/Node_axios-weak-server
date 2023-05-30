var mongoose = require('mongoose');
	var plm = require('passport-local-mongoose');

	mongoose.connect("mongodb://localhost/task1db");

	var userSchema = mongoose.Schema({
	  name: String,
	  username: String,
	  password: String
	});

	userSchema.plugin(plm);

	module.exports = mongoose.model("user", userSchema);