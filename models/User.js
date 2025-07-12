const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 role: {
  type: String,
  enum: ['Admin', 'Student', 'user'], // added 'user' to allowed list
  default: 'user'                     // changed default to user
}

});



module.exports = mongoose.model('User', userSchema);