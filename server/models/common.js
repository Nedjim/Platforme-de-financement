const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommonSchema = new Schema({
	projectName: String, 
	userName: String,
	amount: Number, 
	amountGiven: Number  
});

module.exports = mongoose.model('Common', CommonSchema);