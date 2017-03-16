const mongoose = require('mongoose');
const Schema = mongoose.Schema

const UserSchema = new Schema({
	name: String,
	username: {type: String, index: true, unique: true , required: true },
	id: Schema.Types.ObjectId,
	email: {type: String, index: true, unique: true , required: true },
  password: String,
	image: {data: Buffer, contentType: String },
	age: { type: Number, min: 18, max: 99 },
	date: { type: Date, default: Date.now },
	location: {street: String, number: String, zip: Number, city: String}
});
module.exports = mongoose.model('User', UserSchema);
