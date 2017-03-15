const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user.js');
const Project = required('./project.js');

const CommonSchema = new Schema({
	projectName: String // Project.name,
	userName: String // User.name,
	amount: Number // Project.fixedAmount,
	amountGiven: Number  
});

module.exports = mongoose.model('Common', CommonSchema);