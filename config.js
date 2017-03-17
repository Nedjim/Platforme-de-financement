const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect(`mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds123930.mlab.com:23930/kickass`);
module.exports = {
  'port': process.env.PORT || 3000,
  'dbUrl': `mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds123930.mlab.com:23930/kickass`,
  "jwtSecret": "a secret phrase !"
}


//console.log(process.env.USER_DB);
//console.log(process.env.PASSWORD_DB);
//console.log("mongodb://"+process.env.USER_DB+":"+process.env.PASSWORD_DB+"@ds123930.mlab.com:23930/kickass");
//console.log(`mongodb://${process.env.USER_DB}:${process.env.PASSWORD_DB}@ds123930.mlab.com:23930/kickass`);
