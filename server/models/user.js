const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	id: Schema.Types.ObjectId,
	email: {type: String, index: { unique: true }, required: true },
  	password: String, 
	image: {data: Buffer, contentType: String },
	age: { type: Number, min: 18, max: 99 },
	date: { type: Date, default: Date.now },
	location: {street: String, number: String, zip: Number, city: String, required: true}
});

module.exports = mongoose.model('User', UserSchema);