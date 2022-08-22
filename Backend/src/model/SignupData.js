const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://alumni:alumni@ictakalumni.hkxzud0.mongodb.net/ICTAKALUMNI?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var SignupSchema = new Schema({

    firstName: String,
    lastName: String,
    phonenumber: Number,
    userCategory: String,
    email: String,
    password: String,
    confirmPassword: String
});

var SignupData = mongoose.model('users', SignupSchema);
module.exports = SignupData;