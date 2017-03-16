const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	name: String,
	email: String, 
  	description: String, 
	image: {data: Buffer, contentType: String },
	date: { type: Date, default: Date.now },
	location: String, //{street: String, number: String, zip: String, city: String, required: true},
	fixedAmount: { type: Number, required: true },
	receivedAmount: Number
});

module.exports = mongoose.model('Project', ProjectSchema);