const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CVSchema = new Schema({
	email: String,
	cv: {	
	}
});
module.exports = mongoose.model('CV', CVSchema);