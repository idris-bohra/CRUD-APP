const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    user_name : String,
    age : Number
})

module.exports = (mongoose.model('USER' , userSchema));