const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	name: String,
	id: String,
	email: String,
  	description: String,
	image: String,
	date: { type: Date, default: Date.now },
	address: String,
	fixedAmount: {type: Number, required: true},
	wantedAmount: Number,
	receivedAmount: Number
});

module.exports = mongoose.model('Project', ProjectSchema);
