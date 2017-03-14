const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user.js');

const ProjectSchema = new Schema({
	name: String,
	id: User.Types.ObjectId,
	email: User.email
  	description: String, 
	image: {data: Buffer, contentType: String },
	date: { type: Date, default: Date.now },
	location: {street: String, number: String, zip: String, city: String, required: true},
	fixedAmount: Number, required: true,
	wantedAmount: Number,
	receivedAmount: Number
});

module.exports = mongoose.model('Project', ProjectSchema);