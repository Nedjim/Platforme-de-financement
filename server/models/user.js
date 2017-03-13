const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: String,
	id: Schema.Types.ObjectId,
	email: {type: String, index: { unique: true } },
  	password: String, 
	image: {data: Buffer, contentType: String },
	age: { type: Number, min: 18, max: 65 },
	date: { type: Date, default: Date.now },
	location: {street: String, number: String, zip: String, city: String}
});

module.exports = mongoose.model('User', UserSchema);