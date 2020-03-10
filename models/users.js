const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: String,
	googleId: String,
	userName: String,
	thumbnail: String,
	status: String
})

module.exports = mongoose.model('User', UserSchema);