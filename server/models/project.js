const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
	name: String,
	id: String, //Schema.Types.ObjectId,
	email: String, //User.email
  description: String,
	image: {data: Buffer, contentType: String },
	date: { type: Date, default: Date.now },
	location: {street: String, number: String, zip: String, city: String},
	fixedAmount: {type: Number, required: true},
	wantedAmount: Number,
	receivedAmount: Number,
	urlImage: String
});

module.exports = mongoose.model('Project', ProjectSchema);
